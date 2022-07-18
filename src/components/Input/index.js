import React from "react";

import styles from "./index.module.css";
function Input(props) {
  return (
    <div className={styles.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {/* <input id={props.input.id} type={props.type}  /> ada cara cepat :) */}
      <input {...props.input} />
    </div>
  );
}

export default Input;
