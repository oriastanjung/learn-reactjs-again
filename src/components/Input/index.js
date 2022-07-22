import React, { forwardRef } from "react";

import styles from "./index.module.css";
const Input =forwardRef((props, ref) => {
  return (
    <div className={styles.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {/* <input id={props.input.id} type={props.type}  /> ada cara cepat :) */}
      <input ref={ref} {...props.input} />
    </div>
  );
})

export default Input;
