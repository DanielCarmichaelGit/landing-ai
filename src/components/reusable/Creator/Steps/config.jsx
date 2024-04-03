import styles from "../../../../assets/css/Steps/Config.module.css";
import governor from "../../../../assets/css/Governor.module.css";

import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";

export default function ConfigStep({ pricingCollapsed, option, toggle, setNextStep }) {
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

  return (
    <div className={styles.Configs}>
      {pricingCollapsed ? (
        <KeyboardArrowDown
          onClick={toggle}
          className={governor.CollapseIcon}
          sx={{ alignSelf: "end" }}
        />
      ) : (
        <KeyboardArrowUp
          onClick={toggle}
          className={governor.CollapseIcon}
          sx={{ alignSelf: "end" }}
        />
      )}
      <div
        style={pricingCollapsed ? { height: "30px", overflow: "hidden" } : {}}
        className={styles.Costs}
      >
        {pricingCollapsed ? null : (
          <>
            <div className={styles.CostsColumn}>
              <Typography variant="h5">Build Method</Typography>
              {config_options[option]?.prompt ? (
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
                {config_options[option]?.costs?.iterations}
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
                  config_options[option]?.costs?.hosting / 100
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
                {!config_options[option]?.costs?.restrictions
                  ? "None"
                  : "Yes"}
              </Typography>
            </div>
          </>
        )}
      </div>
      <Typography>
        We have pulled your profile configs in to make your {option}
      </Typography>
      <button onClick={() => setNextStep(true)}>Start Generating</button>
    </div>
  );
}
