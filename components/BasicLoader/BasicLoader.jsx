import React from "react";
import { ClipLoader } from "react-spinners";
import { useSelector } from "react-redux";
import styles from "./basicLoader.module.css";

const BasicLoader = ({ color = "red", isLoading, size = 80 }) => {
  const { loading } = useSelector((store) => store.settings || {});
  return loading || isLoading ? (
    <div className={styles.loader_root}>
      <ClipLoader
        className={styles.loader}
        color={color}
        loading={true}
        size={size}
      />
    </div>
  ) : null;
};

export default BasicLoader;
