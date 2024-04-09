import styles from "../../../../assets/css/Steps/Config.module.css";
import governor from "../../../../assets/css/Governor.module.css";
import Typography from "@mui/material/Typography";
import ImageUploader from "../../../features/ImageUploader";
import { useState, useEffect } from "react";
import PromptInput from "../../Input";

import CheckIcon from "@mui/icons-material/Check";
import ColorPicker from "../../ColorPicker";
import fetchWrapper from "../../../../../utils/fetchWrapper";
import { useDispatch, useSelector } from "react-redux";
import { addLandingCopyPayload } from '../../../../State-Management/actions';
import GeneratedCodeContainerHTML from "../../HTMLRenderer";

export default function GenerationStep({ setNextStep }) {
  const dispatch = useDispatch();
  const [step, setStep] = useState(1);
  const landingData = useSelector((state) => state.app.landing_data);
  const initialCopy = useSelector((state) => state.app.landing_copy);
  const [copyResponse, setCopyResponse] = useState("");
  const [codeResponse, setCodeResponse] = useState("");

  const example_prompt = {
    "prompt": {
        "brand_name": "Mortecai",
        "brand_description": "Mortecai is a built for consumer, ai powered, fine tuned web developer currently in beta stage that allows anyone to build and deploy complex landing pages and web applications using only prompts",
        "brand_colors": {
            "primary": "#4a90e2",
            "secondary": "#b8e986",
            "tertiary": "#e566ff"
        },
        "theme_mode": "dark",
        "base_url": "http://localhost:5173",
        "brand_images": [
            {
                "url": "http://grav-labs-5d2f91941bbb.herokuapp.com/uploads/1712397261869-landing-ai.png",
                "type": "logo",
                "copy": "Mortecai is a cutting-edge, AI-powered web development platform that empowers anyone to create stunning landing pages and complex web applications using only natural language prompts. With its advanced machine learning algorithms and intuitive interface, Mortecai revolutionizes the way we build digital products, making it accessible to individuals without coding skills or technical expertise."
            },
            {
                "url": "http://grav-labs-5d2f91941bbb.herokuapp.com/uploads/1712397294421-example-2.svg",
                "type": "hero",
                "copy": "Experience the future of web development with Mortecai's innovative AI-driven technology. Our platform harnesses the power of artificial intelligence to transform your ideas into reality, allowing you to create sophisticated digital experiences effortlessly. With Mortecai, the possibilities are endless – design, build, and deploy your dream projects with just a few prompts."
            },
            {
                "url": "http://grav-labs-5d2f91941bbb.herokuapp.com/uploads/1712397298304-undraw_Static_website_re_x70h.png",
                "type": "feature",
                "copy": "Mortecai is a no-code solution that empowers you to build and deploy complex web applications and landing pages without writing a single line of code. Our intuitive platform leverages advanced AI algorithms to translate your natural language prompts into functional, visually stunning digital products. Say goodbye to the complexities of coding and embrace the freedom of creating with Mortecai."
            },
            {
                "url": "http://grav-labs-5d2f91941bbb.herokuapp.com/uploads/1712397331629-example-2.svg",
                "type": "feature",
                "copy": "Unleash your creativity and bring your ideas to life with Mortecai's AI-powered web development platform. Our cutting-edge technology allows you to iterate and refine your projects seamlessly, ensuring that every detail is perfected to your liking. With Mortecai, you have the flexibility to craft truly unique digital experiences that captivate and engage your audience."
            },
            {
                "url": "http://grav-labs-5d2f91941bbb.herokuapp.com/uploads/1712397418958-undraw_Design_inspiration_re_tftx.png",
                "type": "feature",
                "copy": "Mortecai bridges the gap between imagination and reality by transforming your prompts into stunning user interfaces. Our AI-driven platform takes your vision and translates it into visually compelling and functional designs, ensuring that your digital products not only look remarkable but also deliver an exceptional user experience."
            },
            {
                "url": "http://grav-labs-5d2f91941bbb.herokuapp.com/uploads/1712397430113-Brandon.jpeg",
                "type": "feature",
                "copy": "Meet Brandon Mikowski, a talented frontend developer at Mortecai with a passion for building lean and efficient products for startups. Brandon's expertise lies in crafting intuitive user interfaces that enhance the overall user experience. His dedication to creating seamless and engaging digital products is a driving force behind Mortecai's success."
            },
            {
                "url": "http://grav-labs-5d2f91941bbb.herokuapp.com/uploads/1712397497806-daniel.png",
                "type": "feature",
                "copy": "Introducing Daniel Carmichael, a full-stack developer at Mortecai with a knack for product development and complex integrations. Daniel's user-centric approach ensures that every digital experience crafted by Mortecai is tailored to the needs and preferences of its users. His ability to seamlessly integrate diverse technologies and functionalities is a key factor in delivering truly exceptional web applications."
            }
        ]
    }
}

  useEffect(() => {
    if (step) {
      if (step === 1 && copyResponse === "") {
        console.log("copy generation step")
        fetchCopy();
        console.log("copy generation step")
      } else if (step === 2 && codeResponse === "" && landingData && copyResponse !== "") {
        fetchCode();
      }
    }
  }, [step, initialCopy, landingData, copyResponse]);

  useEffect(() => {
    if (copyResponse !== "" && step === 1) {
      setStep(step + 1);
    }
  }, [copyResponse])

  async function fetchCopy() {
    const token = JSON.parse(localStorage.getItem("user"))?.token || "";
    const res = await fetchWrapper("/anthropic/copy-generation", token, "POST", { landing_copy_object: initialCopy });
    //console.log(res.data.content[0].text, " ")
    setCopyResponse(JSON.parse(res.data.content[0].text))
  }

  async function fetchCode() {
    try {
      const token = JSON.parse(localStorage.getItem("user"))?.token || "";

      const payload = {
        prompt: {
          ...landingData,
          ...copyResponse
        }
      };

      console.log(payload)

      const { processStream } = await fetchWrapper(
        "/anthropic/landing-page/stream",
        token,
        "POST",
        { ...payload }
      );

      processStream((chunk) => {
        if (chunk.includes("data:")) {
          console.log("done")
        } else {
          // Update the response state by appending the cleaned chunk to the existing response
          setCodeResponse((prevResponse) => prevResponse + chunk);
        }
      });
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const steps = [
    "Generating Copy",
    "Generating Landing Page",
    "Cleaning It Up",
    "Hosting Options",
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
            <Typography fontWeight={700} variant="body1">
              We'll start by generating some more copy
            </Typography>
          </div>
        ) : step === 2 || step === 3 ? (
          <div>
            <div className={styles.ButtonRow}>
              <Typography fontWeight={700} variant="body1">
                Make Changes
              </Typography>
              <PromptInput />
            </div>
            <GeneratedCodeContainerHTML htmlCode={codeResponse}/>
          </div>
        ) : step === 4 ? (
          <Typography fontWeight={700} variant="body1">
            Choose your hosting options
          </Typography>
        ) : null}
        <div className={styles.ButtonRow}>
          {step === 4 ? (
            <button
              className={styles.ContinueButton}
              onClick={() => setStep(step + 1)}
            >
              Start Hosting
            </button>
          ) : null}
        </div>
      </div>
      {/* <button onClick={() => setNextStep(true)}>Start Generating</button> */}
    </div>
  );
}
