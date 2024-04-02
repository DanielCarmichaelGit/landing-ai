import React, { useState } from "react";
import styles from "../../assets/css/LogoUploader.module.css";
import PromptInput from "../reusable/Input";
import { useDispatch } from 'react-redux';
import { addBrandImage } from "../../State-Management/actions";

export default function ImageUploader({withInput = false, inputPlaceholder = ""}) {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  function handleInputChange(value) {
    setInputValue(value);
  }

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      try {
        const formData = new FormData();
        formData.append("image", file);
        if (withInput) {
          formData.append("copy", inputValue);
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
  
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          const { imageUrl, image } = data;
          dispatch(addBrandImage(image));
          handleInputChange("")
          console.log("Image uploaded successfully. URL:", imageUrl);
          // Perform any necessary actions with the image URL
        } else {
          console.error("Error uploading image:", response.statusText);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <div className={styles.LogoUploader}>
      <div className={styles.LogoUploaderGroup}>
        <input
          type="file"
          accept="image/*"
          alt="Image Uploader"
          onChange={handleFileChange}
          id="image-uploader"
        />
        <label className={styles.Uploader} htmlFor="image-uploader">
          Choose Image
        </label>
      </div>
      {
        withInput ? (
          <PromptInput textValue={inputValue} handleTextChange={handleInputChange} type="text-area" label={inputPlaceholder}/>
        ) : null
      }
    </div>
  );
}
