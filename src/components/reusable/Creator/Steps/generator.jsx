import styles from "../../../../assets/css/Steps/Generator.module.css";
import governor from "../../../../assets/css/Governor.module.css";

import GeneratedCodeContainerHTML from "../../HTMLRenderer";

import ReplayIcon from "@mui/icons-material/Replay";

import Typography from "@mui/material/Typography";
import PromptInput from "../../Input";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getImages } from "../../../../State-Management/actions";

export default function Generator({
  type,
  code,
  handlePromptChange,
  promptValue,
  selectImage,
  selectedImages,
  setRetry,
  isComplete,
  variant,
  page,
  setIsComplete,
  setHTMLCode
}) {
  const dispatch = useDispatch();
  const [optionsModal, setOptionsModal] = useState(false);
  const [imagesFetched, setImagesFetched] = useState(false);
  const brandImages = useSelector((state) => state.app.brand_images);

  useEffect(() => {
    if (!brandImages && !imagesFetched) {
      dispatch(getImages());
      setImagesFetched(true);
    }
  }, [brandImages]);

  function handleModalTrigger(e) {
    if (e.target === e.currentTarget) {
      e.preventDefault();
      setOptionsModal(!optionsModal);
    }
  }

  return (
    <div className={styles.GeneratorContainer}>
      <div className={styles.GeneratorHeader}>
        <div className={styles.GeneratorHeaderLeft}>
          <button
            onClick={(e) => handleModalTrigger(e)}
            className={styles.GeneratorHeaderrOptionsButton}
          >
            Options
          </button>
          <PromptInput
            customStyles={{
              backgroundColor: "#333",
              borderRadius: "5px",
              width: "400px",
            }}
            label={"Changes"}
            type="text"
            handleTextChange={handlePromptChange}
            textValue={promptValue}
          />
        </div>
        <div className={styles.GeneratorHeaderRight}>
          <ReplayIcon
            onClick={() => setRetry(true)}
            className={`${governor.HoverIcon} ${styles.GenerationIcon}`}
          />
        </div>
      </div>
      <div className={styles.Generator}>
        {type === "Landing Page" && code !== "" ? (
          <GeneratedCodeContainerHTML setHTMLCode={setHTMLCode} setIsComplete={setIsComplete} isComplete={isComplete} variant={variant} page={page} htmlCode={code} />
        ) : null}
      </div>
      {optionsModal && (
        <div
          onClick={(e) => handleModalTrigger(e)}
          className={styles.UpdateOptionModalContainer}
        >
          <div className={styles.UpdateOptionModal}>
            <button
              style={{ width: "150px", alignSelf: "end" }}
              onClick={(e) => handleModalTrigger(e)}
            >
              Cancel
            </button>
            <div className={styles.BrandImages}>
              {brandImages.map((image) => (
                <img
                  style={{
                    border: selectedImages?.some(
                      (selectedImage) => selectedImage?.image_id === image?.image_id
                    )
                      ? "2px solid rgb(126, 0, 205)"
                      : "2px solid transparent",
                  }}
                  onClick={() => selectImage(image)}
                  className={styles.BrandImage}
                  src={image.hosted_url}
                  key={image.image_id}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
