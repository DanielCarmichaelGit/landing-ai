import styles from "../../assets/css/ColorPickerGroup.module.css";
import ColorPicker from "../reusable/ColorPicker";

export default function ColorPickerGroup({ mode, selectMode, primary, secondary, tertiary, setPrimary, setSecondary, setTertiary }) {

  return (
    <div className={styles.ColorPickerGroup}>
      <div className={styles.ModeSelector}>
        <button onClick={() => selectMode("dark")} style={mode === "dark" ? {border: "2px solid white"} : {}} className={styles.DarkModeButton}>Dark Mode</button>
        <button onClick={() => selectMode("light")} style={mode === "light" ? {border: "2px solid white"} : {}} className={styles.LightModeButton}>Light Mode</button>
      </div>
      <div className={styles.ColorPickers}>
        <ColorPicker selectColor={setPrimary} color={primary} label={"Primary"}/>
        <ColorPicker selectColor={setSecondary} color={secondary} label={"Secondary"}/>
        <ColorPicker selectColor={setTertiary} color={tertiary} label={"Tertiary"}/>
      </div>
    </div>
  );
}
