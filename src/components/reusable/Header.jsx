import styles from "../../assets/css/Header.module.css";
import { useNavigate } from "react-router-dom";

import Typography from "@mui/material/Typography";

export default function Header({ setUser }) {
  const navigate = useNavigate();

  function handleNavigate(destination) {
    navigate(destination)
  }

  function handleLogout() {
    localStorage.removeItem("user");
    setUser(null)
    navigate("/")
  }

  return (
    <div className={styles.Header}>
      <div onClick={() => handleNavigate("home")} className={styles.HeaderLeft}>
        <img
          className={styles.HeaderLogo}
          src="./logo.png"
          alt="Mortecai Logo"
        />
        <Typography variant="h4">Mortecai</Typography>
      </div>
      <div className={styles.HeaderRight}>
        <button onClick={() => handleNavigate("create")} className={styles.HeaderButton}>Create</button>
        <button onClick={() => handleNavigate("hosting")} className={styles.HeaderButton}>Hosting</button>
        <button onClick={() => handleNavigate("profile")} className={styles.HeaderButton}>Profile</button>
        <button onClick={handleLogout} className={styles.HeaderButton}>Log Out</button>
      </div>
    </div>
  );
}
