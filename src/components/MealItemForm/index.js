import React from "react";
import Input from "../Input";

import styles from "./index.module.css";
function MealItemForm(props) {
  return (
    <form className={styles.form}>
      <Input
        label="Amount"
        input={{
          id: `amount_${props.id}`,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ to Cart</button>
    </form>
  );
}

export default MealItemForm;
