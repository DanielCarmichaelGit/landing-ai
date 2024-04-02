import { useState, useEffect } from "react";

import styles from "../assets/css/Create/Create.module.css";
import governor from "../assets/css/Governor.module.css";

import fetchWrapper from "../../utils/fetchWrapper";

import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import SailingIcon from "@mui/icons-material/Sailing";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";

import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../State-Management/actions";
import CodeRenderer from "../components/reusable/CodeRenderer";
import GeneratedCodeContainerHTML from "../components/reusable/HTMLRenderer";

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
  const [initialPrompt, setInitialPrompt] = useState("");
  const [errorOccured, setErrorOccured] = useState(null);

  const config_options = {
    "Landing Page": {
      prompt: true,
      trained: true,
      hosting: true,
      retrieve_code: true,
      costs: {
        generation: 500,
        hosting: 500,
        iterations: 25,
        additional_iterations: {
          package: {
            count: 50,
            price: 200,
          },
        },
        restrictions: false,
      },
    },
  };

  const handleOptionClick = (selectedMode) => {
    setStep(1);
    setMode(selectedMode);
  };

  useEffect(() => {
    if (step === 3 && !isGenerating) {
      setIsGenerating(true);
      handleSubmit();
    }
  }, [step])

  useEffect(() => {
    if (mode !== null) {
      setShowMode(true);
    }
  }, [mode]);

  useEffect(() => {
    if (!user) {
      dispatch(getUser());
    }
  }, [user]);

  function handleCreateOptionSelect(option) {
    setCreateOption(option);
  }

  function handlePricingToggle() {
    setPricingCollapsed(!pricingCollapsed);
  }

  async function handleSubmit() {
    if (user) {
      try {
        const token = JSON.parse(localStorage.getItem("user"))?.token || "";
        const payload = {
          prompt: {
            website_title: user.brand_name,
            theme: user.brand_mode,
            colors: user.brand_colors,
            industry: user.brand_industry,
            staggered: true,
            alignment: "left",
          },
        };

        setInitialPrompt(payload);
        setResponse(""); // Clear the previous response

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
          } else {
            console.log(chunk);
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
            <div className={styles.WhatNew}>
              <div
                onClick={() => handleCreateOptionSelect("Landing Page")}
                className={styles.WhatNewOption}
              >
                <Typography fontWeight={600} variant="h5">
                  Landing Page
                </Typography>
              </div>
              <div className={styles.WhatNewOption}>
                <Typography fontWeight={600} variant="h5">
                  Web App
                </Typography>
              </div>
              <div className={styles.WhatNewOption}>
                <Typography fontWeight={600} variant="h5">
                  Blog
                </Typography>
              </div>
              <div className={styles.WhatNewOption}>
                <Typography fontWeight={600} variant="h5">
                  Video Streaming
                </Typography>
              </div>
              <div className={styles.WhatNewOption}>
                <Typography fontWeight={600} variant="h5">
                  Social Media
                </Typography>
              </div>
              <div className={styles.WhatNewOption}>
                <Typography fontWeight={600} variant="h5">
                  Something Else
                </Typography>
              </div>
            </div>
          ) : step === 2 ? (
            <div className={styles.Configs}>
              {pricingCollapsed ? (
                <KeyboardArrowDown
                  onClick={handlePricingToggle}
                  className={governor.CollapseIcon}
                  sx={{ alignSelf: "end" }}
                />
              ) : (
                <KeyboardArrowUp
                  onClick={handlePricingToggle}
                  className={governor.CollapseIcon}
                  sx={{ alignSelf: "end" }}
                />
              )}
              <div
                style={
                  pricingCollapsed ? { height: "30px", overflow: "hidden" } : {}
                }
                className={styles.Costs}
              >
                {pricingCollapsed ? null : (
                  <>
                    <div className={styles.CostsColumn}>
                      <Typography variant="h5">Build Method</Typography>
                      {config_options[createOption]?.prompt ? (
                        <Typography
                          alignSelf={"center"}
                          padding={"0px"}
                          fontSize={"75px"}
                        >
                          Prompt
                        </Typography>
                      ) : (
                        <Typography
                          alignSelf={"center"}
                          padding={"0px"}
                          fontSize={"75px"}
                        >
                          Low Code
                        </Typography>
                      )}
                    </div>
                    <Divider
                      orientation="vertical"
                      sx={{ color: "#f1f1f1", height: "180px" }}
                      variant="middle"
                    />
                    <div className={styles.CostsColumn}>
                      <Typography variant="h5">Iterations</Typography>
                      <Typography
                        alignSelf={"center"}
                        padding={"0px"}
                        fontSize={"75px"}
                      >
                        {config_options[createOption]?.costs?.iterations}
                      </Typography>
                    </div>
                    <Divider
                      orientation="vertical"
                      sx={{ color: "#f1f1f1", height: "180px" }}
                      variant="middle"
                    />
                    <div className={styles.CostsColumn}>
                      <Typography variant="h5">Hosting</Typography>
                      <Typography
                        alignSelf={"center"}
                        padding={"0px"}
                        fontSize={"75px"}
                      >
                        {`$${(
                          config_options[createOption]?.costs?.hosting / 100
                        ).toFixed(2)}`}
                      </Typography>
                    </div>
                    <Divider
                      orientation="vertical"
                      sx={{ color: "#f1f1f1", height: "180px" }}
                      variant="middle"
                    />
                    <div className={styles.CostsColumn}>
                      <Typography variant="h5">Restrictions</Typography>
                      <Typography
                        alignSelf={"center"}
                        padding={"0px"}
                        fontSize={"75px"}
                      >
                        {!config_options[createOption]?.costs?.restrictions
                          ? "None"
                          : "Yes"}
                      </Typography>
                    </div>
                  </>
                )}
              </div>
              <Typography>
                We have pulled your profile configs in to make your{" "}
                {createOption}
              </Typography>
              <button onClick={() => setNextStep(true)}>
                Start Generating
              </button>
            </div>
          ) : step === 3 ? (
            <div className={styles.GeneratorContainer}>
              <Typography variant="h5">Generating your {createOption} below</Typography>
              <div className={styles.Generator}>
                <GeneratedCodeContainerHTML htmlCode={response}/>
              </div>
            </div>
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
