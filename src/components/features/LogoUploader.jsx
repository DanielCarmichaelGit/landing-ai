import React, { useState } from "react";
// import axios from "axios";
import styles from "../../assets/css/LogoUploader.module.css";
import fetchWrapper from "../../../utils/fetchWrapper";

export default function LogoUploader() {
  const [previews, setPreviews] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);

  const handleFileChange = async (event, index) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const updatedPreviews = [...previews];
        updatedPreviews[index] = reader.result;
        setPreviews(updatedPreviews);
      };
      reader.readAsDataURL(file);

      try {
        const formData = new FormData();
        formData.append("image", file);

        const response = fetchWrapper("/upload-image", "", "POST", {
          formData,
        }).then((res) => {
          console.log(res)
        });
        const { imageUrl } = response.data;

        const updatedImageUrls = [...imageUrls];
        updatedImageUrls[index] = imageUrl;
        setImageUrls(updatedImageUrls);
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      const updatedPreviews = [...previews];
      updatedPreviews[index] = null;
      setPreviews(updatedPreviews);

      const updatedImageUrls = [...imageUrls];
      updatedImageUrls[index] = null;
      setImageUrls(updatedImageUrls);
    }
  };

  return (
    <div className={styles.LogoUploader}>
      <p className={styles.ResponseHeader}>
        Upload up to six images (first image is logo)
      </p>
      <div className={styles.LogoUploaderGroup}>
        {[...Array(6)].map((_, index) => (
          <div key={index} className={styles.ImagePreviewContainer}>
            {previews[index] ? (
              <img
                src={previews[index]}
                alt={`Logo Preview ${index + 1}`}
                className={styles.ImagePreview}
              />
            ) : (
              <>
                <input
                  type="file"
                  accept="image/*"
                  alt={`Logo Image Uploader ${index + 1}`}
                  onChange={(event) => handleFileChange(event, index)}
                  id={`actual-btn-${index}`}
                />
                <label
                  className={styles.Uploader}
                  htmlFor={`actual-btn-${index}`}
                >
                  Choose Landing Page Image
                </label>
              </>
            )}
            {imageUrls[index] && (
              <p className={styles.ImageUrl}>Hosted URL: {imageUrls[index]}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
