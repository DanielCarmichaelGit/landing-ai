import governor from "../assets/css/Governor.module.css";
import styles from "../assets/css/Hosting/Hosting.module.css";

import Typography from "@mui/material/Typography";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getUser } from '../State-Management/actions';

export default function Hosting() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.app.user);

  useEffect(() => {
    if (!user) {
      dispatch(getUser());
    }
  }, [user])

  return (
    <div className={`${governor.Main} ${styles.Hosting}`}>
      <Typography variant="overline">You have 1 build waiting to host</Typography>
      <div className={styles.HostingOptions}>
        
      </div>
    </div>
  );
}
