import { useState, useEffect } from "react";

import styles from "../assets/css/Create/Create.module.css";
import governor from "../assets/css/Governor.module.css";

import fetchWrapper from "../../utils/fetchWrapper";

import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import SailingIcon from "@mui/icons-material/Sailing";
import Typography from "@mui/material/Typography";

import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../State-Management/actions";

import ConfigStep from "../components/reusable/Creator/Steps/config";
import Generator from "../components/reusable/Creator/Steps/generator";
import BuildOptions from "../components/reusable/Creator/Steps/buildOptions";
import GenerationStep from "../components/reusable/Creator/Steps/generationSteps";

export default function Create() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.app.user);
  const [mode, setMode] = useState(null);
  const [showMode, setShowMode] = useState(false);
  const [step, setStep] = useState(null);
  const [nextStep, setNextStep] = useState(false);
  const [createOption, setCreateOption] = useState(null);
  const [pricingCollapsed, setPricingCollapsed] = useState(true);
  const [response, setResponse] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [reprompt, setReprompt] = useState("");
  const [retry, setRetry] = useState(false);
  const [initialPrompt, setInitialPrompt] = useState("");
  const [errorOccured, setErrorOccured] = useState(null);
  const [selectedImages, setSelectedImages] = useState([]);

  // console.log(response)
  
  // configs for subsequent requests
  const [historyId, setHistoryId] = useState("");
  const [pageId, setPageId] = useState("");
  const [variantId, setVariantId] = useState("");
  const [isComplete, setIsComplete] = useState(true);

  useEffect(() => {
    console.log(selectedImages)
  }, [selectedImages])

  const handleOptionClick = (selectedMode) => {
    setStep(1);
    setMode(selectedMode);
  };

  function handlePromptChange(value) {
    setReprompt(value);
  }

  useEffect(() => {
    if (step === 3 && !isGenerating) {
      setIsGenerating(true);
      handleSubmit();
    }
  }, [step]);

  useEffect(() => {
    if (mode !== null) {
      setShowMode(true);
    }
  }, [mode]);

  useEffect(() => {
    if (retry) {
      handleStreamedInput();
      setRetry(false);
    }
  }, [retry])

  useEffect(() => {
    if (!user) {
      dispatch(getUser());
    }
  }, [user]);

  function handleImageSelect(image) {
    const isSelected = selectedImages.some(
      (selectedImage) => selectedImage.image_id === image.image_id
    );
  
    if (isSelected) {
      setSelectedImages(
        selectedImages.filter(
          (selectedImage) => selectedImage.image_id !== image.image_id
        )
      );
    } else {
      setSelectedImages([...selectedImages, image]);
    }
  }

  function handleCreateOptionSelect(option) {
    setCreateOption(option);
  }

  function handlePricingToggle() {
    setPricingCollapsed(!pricingCollapsed);
  }

  const handleStreamedInput = async () => {
    try {
      // Send the streamed input to the server for processing
      console.log("historyId: ", historyId.trim());
      const payload = {
        prompt: "to the current page: " + reprompt + ` -- RAG Resource Images: ${selectedImages.map((image) => image.hosted_url)}`,
        html: response,
        initialPrompt,
        history_id: historyId,
        page_id: pageId
      };

      console.log(payload);

      setReprompt(""); // Clear the streamed input field
      setResponse("");
      setIsComplete(false);

      const token = JSON.parse(localStorage.getItem("user"))?.token || "";

      const { processStream } = await fetchWrapper(
        "/anthropic/modify-html/stream",
        token,
        "POST",
        { ...payload }
      );

      processStream((chunk) => {
        // Remove the "data: " tags and unnecessary whitespace from the chunk
        // const cleanedChunk = removeDataTags(chunk);
        // console.log(chunk);
        if (chunk.includes("data:")) {
          setIsComplete(true);
          const cleanedChunk = chunk.split("data:")[1];
          const parsedChunk = JSON.parse(cleanedChunk);
          setHistoryId(parsedChunk.history_id);
          setVariantId(parsedChunk.variant_id);
          setPageId(parsedChunk.page_id);
        } else {
          // Update the response state by appending the cleaned chunk to the existing response
          setResponse((prevResponse) => prevResponse + chunk);
        }
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  async function handleSubmit() {
    if (user) {
      try {
        const token = JSON.parse(localStorage.getItem("user"))?.token || "";
        const payload = {
          prompt: {
            website_title: user.brand_name,
            brand_logo: user.brand_logo_url,
            theme: user.brand_mode,
            colors: user.brand_colors,
            industry: user.brand_industry,
            copy: user.brand_copy,
            staggered: true,
            alignment: "left",
          },
        };

        console.log(payload.prompt)

        setInitialPrompt(payload);
        setResponse(""); // Clear the previous response
        setIsComplete(false)

        const { processStream } = await fetchWrapper(
          "/anthropic/landing-page/stream",
          token,
          "POST",
          { ...payload }
        );

        processStream((chunk) => {
          if (chunk.includes("data:")) {
            const cleanedChunk = chunk.split("data:")[1];
            const parsedChunk = JSON.parse(cleanedChunk);
            setHistoryId(parsedChunk.history_id);
            setPageId(parsedChunk.page_id);
            setIsComplete(true);
          } else {
            // Update the response state by appending the cleaned chunk to the existing response
            setResponse((prevResponse) => prevResponse + chunk);
          }
        });
      } catch (error) {
        console.error("Error:", error);
        setErrorOccured(`There was an error generating your ${createOption}`);
      }
    }
  }

  useEffect(() => {
    if (createOption) {
      setNextStep(true);
    }
  }, [createOption]);

  useEffect(() => {
    if (nextStep) {
      setStep(step + 1);
      setNextStep(false);
    }
  }, [nextStep]);

  return (
    <div className={`${governor.Main} ${styles.Create}`}>
      {mode === null && (
        <div className={styles.Options}>
          <div
            className={styles.Option}
            onClick={() => handleOptionClick("new")}
          >
            <Typography variant="h3">Something New</Typography>
            <RocketLaunchIcon className={styles.Icon} />
          </div>
          <div
            className={styles.Option}
            onClick={() => handleOptionClick("old")}
          >
            <Typography variant="h3">Something Old</Typography>
            <SailingIcon className={styles.Icon} />
          </div>
        </div>
      )}
      {mode === "new" && (
        <div className={`${styles.New} ${showMode ? styles.fadeIn : ""}`}>
          {step === 1 ? (
            <BuildOptions handleOptionSelect={handleCreateOptionSelect} />
          ) : step === 2 ? (
            <ConfigStep
              option={createOption}
              pricingCollapsed={pricingCollapsed}
              toggle={handlePricingToggle}
              setNextStep={setNextStep}
            />
          ) : step === 3 ? (
            <GenerationStep
              setNextStep={setNextStep}
            />
          ) : null}
          {step === 1 ? (
            <button
              className={styles.SomethingElseButton}
              onClick={() => handleOptionClick("old")}
            >
              I'd rather alter existing sites
            </button>
          ) : null}
        </div>
      )}
      {mode === "old" && (
        <div className={`${styles.Old} ${showMode ? styles.fadeIn : ""}`}>
          {step === 1 ? (
            <button
              className={styles.SomethingElseButton}
              onClick={() => handleOptionClick("new")}
            >
              I want to make something new
            </button>
          ) : null}
        </div>
      )}
    </div>
  );
}
