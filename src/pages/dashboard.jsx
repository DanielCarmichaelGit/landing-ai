import styles from "../assets/css/Dashboard.module.css";
import governor from "../assets/css/Governor.module.css";
import { useState, useEffect, useRef } from "react";
import fetchWrapper from "../../utils/fetchWrapper";
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/reusable/Header';
import { getUser } from '../State-Management/actions';

export default function Dashboard() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  // useEffect(() => {
  //   if (!user) {
  //     dispatch(getUser());
  //   } else {
  //     console.log(user)
  //   }
  // }, [user])

  return (
    <div className={`${styles.Dashboard} ${governor.Main}`}>
    </div>
  );
}