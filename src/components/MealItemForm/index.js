import React, { useRef ,useState} from "react";
import Input from "../Input";

import styles from "./index.module.css";

function MealItemForm(props) {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = +amountInputRef.current.value;
    if (
      amountInputRef.current.value.trim().length === 0 ||
      enteredAmount < 1 ||
      enteredAmount > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmount)
  };
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
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
      {!amountIsValid && <p>Please enter a valid amount [1 to 5]</p>}
    </form>
  );
}

export default MealItemForm;
