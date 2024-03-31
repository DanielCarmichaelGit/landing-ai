import styles from "../../assets/css/Input.module.css";

export default function PromptInput({label, type = "text", handleTextChange, textValue}) {
  return (
    <div className={styles.PromptInputGroup}>
      <label className={styles.PromptLabel}>{label}</label>
      {
        type !== "text-area" ? (
          <input onChange={handleTextChange} value={textValue} className={styles.PromptInput} type={type} />
        ) : (
          <textarea onChange={handleTextChange} value={textValue} className={styles.PromptInputArea} rows="4"></textarea>
        )
      }
    </div>
  )
}