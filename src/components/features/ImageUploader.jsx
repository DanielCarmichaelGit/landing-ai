import React, { useState } from "react";
import styles from "../../assets/css/LogoUploader.module.css";

export default function ImageUploader({ setLogoImageUrl }) {
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

        // Log the contents of the form data
        for (const [key, value] of formData.entries()) {
          console.log(`${key}: ${value}`);
        }

        const token = JSON.parse(localStorage.getItem("user"))?.token || "";

        const response = await fetch(
          "https://grav-labs-5d2f91941bbb.herokuapp.com/upload-image",
          {
            method: "POST",
            body: formData,
            headers: {
              Authorization: token,
            },
          }
        );

        console.log(response);

        if (response.ok) {
          setPreviews([]);
          setImageUrls([]);
          const data = await response.json();
          console.log(data);
          const { imageUrl } = data;
          setLogoImageUrl(imageUrl);
        } else {
          console.error("Error uploading image:", response.statusText);
        }
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
      <p className={styles.ResponseHeader}>Upload a logo image</p>
      <div className={styles.LogoUploaderGroup}>
        {[...Array(1)].map((_, index) => (
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
