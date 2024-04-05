import styles from "../../../../assets/css/Steps/Config.module.css";
import governor from "../../../../assets/css/Governor.module.css";
import Typography from "@mui/material/Typography";
import ImageUploader from "../../../features/ImageUploader";
import { useState } from "react";
import PromptInput from "../../Input";

import CheckIcon from "@mui/icons-material/Check";
import ColorPicker from '../../ColorPicker';

export default function ConfigStep({ setNextStep }) {
  const [step, setStep] = useState(1);
  const [brandName, setBrandName] = useState("");
  const [brandDescription, setBrandDescription] = useState("");
  const [brandImages, setBrandImages] = useState([]);
  const [logoImage, setLogoImage] = useState("");
  const [selectedImage, setSelectedImage] = useState("");
  const [imageConfigs, setImageConfigs] = useState([]);

  function handleBrandNameChange(value) {
    setBrandName(value);
  }

  function handleBrandDescriptionChange(value) {
    setBrandDescription(value);
  }

  function handleBrandImageUpload(image) {
    setBrandImages([...brandImages, image]);

    const newConfig = {
      url: image,
      type: "feature",
      copy: "",
    };

    setImageConfigs([...imageConfigs, newConfig]);
  }

  function handleImageSelect(image) {
    if (image === selectedImage) {
      setSelectedImage("");
    } else {
      setSelectedImage(image);
    }
  }

  function handleImageConfigUpdate(image, field, value) {
    const updatedConfigs = imageConfigs.map((config) => {
      if (config.url === image) {
        return {
          ...config,
          [field]: value,
        };
      }
      return config;
    });

    setImageConfigs(updatedConfigs);
  }

  const steps = [
    "Add a brand name",
    "Tell me about your brand",
    "Upload brand images",
    "Configs",
  ];

  return (
    <div className={styles.Configs}>
      <div
        style={{
          width: "80%",
          display: "flex",
          flexDirection: "column",
          rowGap: "10px",
        }}
      >
        <div className={styles.Stepper}>
          {steps.map((label, index) => (
            <div
              key={label}
              className={`${styles.Step} ${
                step === index + 1 ? styles.ActiveStep : ""
              }`}
            >
              <Typography
                style={
                  step === index + 1
                    ? { backgroundColor: "rgb(147, 68, 226)", color: "white" }
                    : {}
                }
                className={styles.StepNumber}
                variant="h4"
              >
                {step > index + 1 ? <CheckIcon /> : index + 1}
              </Typography>
              <div className={styles.StepLabel}>{label}</div>
            </div>
          ))}
        </div>
        {step === 1 ? (
          <div className={styles.DesignChoices}>
            <PromptInput
              textValue={brandName}
              handleTextChange={handleBrandNameChange}
              customStyles={{
                width: "400px",
                height: "50px",
                fontSize: "30px",
              }}
              label={"Brand Name"}
            />
          </div>
        ) : step === 2 ? (
          <div className={styles.DesignChoices}>
            <PromptInput
              textValue={brandDescription}
              type="text"
              handleTextChange={handleBrandDescriptionChange}
              customStyles={{
                width: "400px",
                height: "50px",
                fontSize: "30px",
              }}
              label={"Tell me about your brand"}
            />
          </div>
        ) : step === 3 ? (
          <div className={styles.DesignChoices}>
            <div className={styles.Images}>
              {brandImages.map((image, index) => {
                return (
                  <img
                    key={index}
                    onClick={() => handleImageSelect(image)}
                    style={
                      image === selectedImage
                        ? { border: "4px solid rebeccapurple" }
                        : { border: "4px solid transparent" }
                    }
                    className={styles.Image}
                    src={image}
                    alt=""
                  />
                );
              })}
            </div>
            <div className={styles.ImageRow}>
              <ImageUploader isLogo={true} setLogo={handleBrandImageUpload} />
              {selectedImage !== "" ? (
                <div className={styles.ImageConfigs}>
                  <Typography variant="caption">Image Options</Typography>
                  <div className={styles.Dropdown}>
                    <select
                      className={styles.DropdownSelect}
                      value={
                        imageConfigs.find(
                          (config) => config.url === selectedImage
                        )?.type || ""
                      }
                      onChange={(e) =>
                        handleImageConfigUpdate(
                          selectedImage,
                          "type",
                          e.target.value
                        )
                      }
                    >
                      <option value="" disabled hidden>
                        {imageConfigs.find(
                          (config) => config.url === selectedImage
                        )?.type || "Select an option"}
                      </option>
                      <option value="logo">Logo</option>
                      <option value="hero">Hero</option>
                      <option value="feature">Feature</option>
                      <option value="background">Background Graphic</option>
                    </select>
                    <div className={styles.DropdownOptions}>
                      <div
                        className={styles.DropdownOption}
                        onClick={() =>
                          handleImageConfigUpdate(selectedImage, "type", "logo")
                        }
                      >
                        Logo
                      </div>
                      <div
                        className={styles.DropdownOption}
                        onClick={() =>
                          handleImageConfigUpdate(selectedImage, "type", "hero")
                        }
                      >
                        Hero
                      </div>
                      <div
                        className={styles.DropdownOption}
                        onClick={() =>
                          handleImageConfigUpdate(
                            selectedImage,
                            "type",
                            "feature"
                          )
                        }
                      >
                        Feature
                      </div>
                      <div
                        className={styles.DropdownOption}
                        onClick={() =>
                          handleImageConfigUpdate(
                            selectedImage,
                            "type",
                            "background"
                          )
                        }
                      >
                        Background Graphic
                      </div>
                    </div>
                  </div>
                  <input
                    type="text"
                    className={styles.InputField}
                    placeholder="Add some copy for this image"
                    value={
                      imageConfigs.find(
                        (config) => config.url === selectedImage
                      )?.copy || ""
                    }
                    onChange={(e) =>
                      handleImageConfigUpdate(
                        selectedImage,
                        "copy",
                        e.target.value
                      )
                    }
                  />
                </div>
              ) : null}
            </div>
          </div>
        ) : step === 4 ? (
          <div className={styles.DesignChoices}>
            <ColorPicker />
          </div>
        ) : null}
        <div className={styles.ButtonRow}>
          <button
            className={styles.ContinueButton}
            onClick={() => setStep(step + 1)}
            disabled={
              step === 1 && brandName === ""
                ? true
                : step === 2 && brandDescription === ""
                ? true
                : step === 3 && brandImages.length === 0
                ? true
                : false
            }
          >
            Next
          </button>
          {step > 1 ? (
            <button
              className={styles.ContinueButton}
              onClick={() => setStep(step - 1)}
            >
              Previous
            </button>
          ) : null}
        </div>
      </div>
      {/* <button onClick={() => setNextStep(true)}>Start Generating</button> */}
    </div>
  );
}
