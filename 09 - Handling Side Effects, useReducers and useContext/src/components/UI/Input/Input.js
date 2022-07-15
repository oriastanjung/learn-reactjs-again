import React, {useRef, useImperativeHandle} from "react";
import classes from "./input.module.css";

// to pass ref to other component we can use useImperativeHandle 

const Input = React.forwardRef((props, ref) => {
    
    const inputRef = useRef();

    const activate = () =>{
        inputRef.current.focus();
    }

    useImperativeHandle(ref, () =>{
        return {
            // focus is the ref atribute to use at outside components
            focus : activate
        }
    })
  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={inputRef}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChangeHandler}
        onBlur={props.validateHandler}
      />
    </div>
  );
})

export default Input;
