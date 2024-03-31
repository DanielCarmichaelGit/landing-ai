import styles from "../../assets/css/Response.module.css";

export default function Response({ response }) {
  return (
    <div className={styles.Response}>
      <p className={styles.ResponseHeader}>Grav Labs</p>
      <code>{response}</code>
    </div>
  );
}
