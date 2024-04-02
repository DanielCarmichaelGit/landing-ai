import governor from "../assets/css/Governor.module.css";
import styles from "../assets/css/Profile/Profile.module.css";
import Typography from "@mui/material/Typography";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  getUser,
  getImages,
  deleteBrandImage,
} from "../State-Management/actions";
import { useState } from "react";

import logo from "../../public/logo.png";
import ImageUploader from "../components/features/ImageUploader";
import PromptInput from "../components/reusable/Input";
import ColorPickerGroup from "../components/features/ColorPicker";
import fetchWrapper from "../../utils/fetchWrapper";

export default function Profile() {
  // begin control states for user update modal
  const [primary, setPrimary] = useState("#ffffff");
  const [secondary, setSecondary] = useState("#ffffff");
  const [tertiary, setTertiary] = useState("#ffffff");
  const [mode, setMode] = useState("dark");
  // end control states for user update modal
  const dispatch = useDispatch();
  const user = useSelector((state) => state.app.user);
  const brandImages = useSelector((state) => state.app.brand_images);

  const [userFetched, setUserFetched] = useState(false);
  const [brandImagesFetched, setBrandImagesFetched] = useState(false);

  const [makeChanges, setMakeChanges] = useState(false);

  const [logoImageUrl, setLogoImageUrl] = useState(logo);
  const [brandName, setBrandName] = useState(null);
  const [brandCopy, setBrandCopy] = useState("No brand copy");
  const [brandIndustry, setBrandIndustry] = useState("")
  const [brandColors, setBrandColors] = useState({
    primary: "#9013FE",
    secondary: "#BD10E0",
    tertiary: "#FF475D",
  });

  useEffect(() => {
    if (!user && !userFetched) {
      dispatch(getUser());
      setUserFetched(true);
    } else {
      if (user.brand_image_url) {
        setLogoImageUrl(user.brand_image_url);
      }
      if (user.brand_colors) {
        setBrandColors(user.brand_colors);
      }
      if (user.brand_name) {
        const capitalizedBrandName =
          user.brand_name.charAt(0).toUpperCase() + user.brand_name.slice(1);
        setBrandName(capitalizedBrandName);
      } else if (!user.brand_name && user.name?.first && user.name?.last) {
        const capitalizedFirstName =
          user.name.first.charAt(0).toUpperCase() + user.name.first.slice(1);
        setBrandName(capitalizedFirstName);
      }
      if (user.brand_copy) {
        setBrandCopy(user.brand_copy);
      }
    }
  }, [user]);

  function handleModalTrigger(e) {
    if (e.target === e.currentTarget) {
      e.preventDefault();
      setMakeChanges(!makeChanges);
    }
  }

  useEffect(() => {
    if (!brandImages && !brandImagesFetched) {
      dispatch(getImages());
      setBrandImagesFetched(true);
    }
  }, [brandImages]);

  function deleteImage(image) {
    dispatch(deleteBrandImage(image));
  }

  const handlePrimaryColorChange = (newColor) => {
    setPrimary(newColor.hex);
  };
  const handleSecondaryColorChange = (newColor) => {
    setSecondary(newColor.hex);
  };
  const handleTertiaryColorChange = (newColor) => {
    setTertiary(newColor.hex);
  };

  function handleBrandNameChange(value) {
    setBrandName(value)
  }

  function handleBrandIndustryChange(value) {
    setBrandIndustry(value)
  }

  function handleBrandCopyChange(value) {
    setBrandCopy(value)
  }

  function handleUserUpdate(e) {
    const payload = {
      user_id: user.user_id,
      brand_copy: brandCopy,
      brand_colors: {
        primary,
        secondary,
        tertiary
      },
      brand_industry: brandIndustry,
      brand_name: brandName,
      brand_mode: mode
    }

    const token = JSON.parse(localStorage.getItem("user"))?.token || "";

    fetchWrapper("/user", token, "PUT", { ...payload }).then((res) => {
      console.log(res)
      if (res.message === "User Updated") {
        setMakeChanges(false)
      }
    });
  }

  return (
    <div style={makeChanges ? {overflow: "hidden"} : {}} className={`${styles.Profile} ${governor.Main}`}>
      {makeChanges ? (
        <div onClick={(e) => handleModalTrigger(e)} className={styles.UpdateUserModalContainer}>
          <div className={styles.UpdateUserModal}>
            <button onClick={(e) => handleModalTrigger(e)}>Cancel</button>
            <PromptInput handleTextChange={handleBrandNameChange} label={"Brand Name"}/>
            <PromptInput handleTextChange={handleBrandIndustryChange} label={"Industry"}/>
            <PromptInput handleTextChange={handleBrandCopyChange} type="text-area" label={"Copy"}/>
            <ColorPickerGroup primary={primary} secondary={secondary} tertiary={tertiary}
              setPrimary={handlePrimaryColorChange}
              setSecondary={handleSecondaryColorChange}
              setTertiary={handleTertiaryColorChange}
              mode={mode}
              selectMode={setMode}
            />
            <button onClick={(e) => handleUserUpdate(e)}>Update Profile Configs</button>
          </div>
        </div>
      ) : null}
      <Typography variant="h4">{`Welcome back, ${brandName}`}</Typography>
      <div className={styles.ProfileDetails}>
        <Typography className={governor.SectionLabel} variant="body1">
          Profile Configs
        </Typography>
        <div className={governor.ColumnSection}>
          <button onClick={(e) => handleModalTrigger(e)}>Edit Profile Data</button>
          <img className={styles.ProfileDetailsLogoImage} src={logoImageUrl} />
        </div>
        <div className={governor.RowSection}>
          <div className={styles.ColorCard}>
            <Typography className={governor.SectionLabel} variant="body1">
              Primary Color
            </Typography>
            <div
              style={{ backgroundColor: `${brandColors.primary}` }}
              className={styles.ColorBox}
            ></div>
          </div>
          <div className={styles.ColorCard}>
            <Typography className={governor.SectionLabel} variant="body1">
              Secondary Color
            </Typography>
            <div
              style={{ backgroundColor: `${brandColors.secondary}` }}
              className={styles.ColorBox}
            ></div>
          </div>
          <div className={styles.ColorCard}>
            <Typography className={governor.SectionLabel} variant="body1">
              Tertiary Color
            </Typography>
            <div
              style={{ backgroundColor: `${brandColors.tertiary}` }}
              className={styles.ColorBox}
            ></div>
          </div>
        </div>
        <div className={governor.ColumnSection}>
          <Typography className={governor.SectionLabel} variant="body1">
            Brand Copy
          </Typography>
          <div className={styles.BrandCopy}>
            <Typography variant="body2">{brandCopy}</Typography>
          </div>
        </div>
        <div className={styles.ColumnSection}>
          <Typography className={governor.SectionLabel} variant="body1">
            Brand Images
          </Typography>
          <ImageUploader
            withInput={true}
            inputPlaceholder={"Enter some copy about this image if you'd like"}
          />
          <div className={styles.BrandImages}>
            {brandImages && brandImages.length > 0 ? (
              brandImages.map((image) => {
                return (
                  <img
                    onClick={() => deleteImage(image)}
                    className={styles.BrandImage}
                    key={image.image_id}
                    src={image.hosted_url}
                  />
                );
              })
            ) : (
              <h4>No Brand Images Found</h4>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
