import styles from "../../../../assets/css/Steps/BuildOptions.module.css";
import Typography from "@mui/material/Typography";

export default function BuildOptions({ handleOptionSelect }) {

  return (
    <div className={styles.WhatNew}>
      <div
        onClick={() => handleOptionSelect("Landing Page")}
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
  );
}
