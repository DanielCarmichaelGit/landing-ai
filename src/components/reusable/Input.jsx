import styles from "../../assets/css/Input.module.css";

export default function PromptInput({label, type = "text", handleTextChange, textValue}) {
  return (
    <div className={styles.PromptInputGroup}>
      <label className={styles.PromptLabel}>{label}</label>
      {
        type !== "text-area" ? (
          <input onChange={(e) => handleTextChange(e.target.value)} value={textValue} className={styles.PromptInput} type={type} />
        ) : (
          <textarea onChange={(e) => handleTextChange(e.target.value)} value={textValue} className={styles.PromptInputArea} rows="4"></textarea>
        )
      }
    </div>
  )
}