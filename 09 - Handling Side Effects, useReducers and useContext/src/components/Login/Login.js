import React, { useState, useEffect, useReducer, useContext, useRef } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../store/auth-context";
import Input from "../UI/Input/Input";

const emailReducer = (state, action) => {
  //state here is the latest state that been snapshot
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
}; //can be declared outsite components

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  const dataContext = useContext(AuthContext);

  //use Reducer is like useState, its for state management,
  // we use useReducer() if the state is relate to other state when updating state
  // const [state , dispatchStateFunction] = {reducerFunction , initState, initFunction}
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(
    (state, action) => {
      if (action.type === "USER_PASSWORD_INPUT") {
        return {
          value: action.passwordValue,
          isValid: action.passwordValue.trim().length > 6,
        };
      }
      if (action.type === "INPUT_PASS_BLUR") {
        return { value: state.value, isValid: state.value.trim().length > 6 };
      }
      return { value: "", isValid: false };
    },
    {
      value: "",
      isValid: null,
    }
  );

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    //debounce so this function run every split second using setTimeout
    const identifier = setTimeout(() => {
      console.log("checking validity");
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    return () => {
      console.log("cleanup");
      clearTimeout(identifier);
    }; // cleanup useEffect after every render component
  }, [emailIsValid, passwordIsValid]);



  const emailInputRef = useRef();
  const passwordInputRef = useRef();



  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);

    // SINCE WE USE USEREDUCER , we use dispatchFn to change the state
    // dispatch (actions) or dispatch({type : 'MUST_CAPITAL_CASE' , data : '', data1: ''})

    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
    // setFormIsValid(
    //   event.target.value.includes("@") && passwordState.isValid
    // );
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);

    dispatchPassword({
      type: "USER_PASSWORD_INPUT",
      passwordValue: event.target.value,
    });

    //accessing from useReducer using its state .value or .isValid the data at state
    // setFormIsValid(emailState.isValid && event.target.value.trim().length > 6);
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(emailState.isValid);
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(passwordState.value.trim().length > 6);
    dispatchPassword({ type: "INPUT_PASS_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // props.onLogin(emailState.value, passwordState.value);
    if(formIsValid){
      dataContext.onLogin(emailState.value, passwordState.value);
    }else if(!emailIsValid){
      emailInputRef.current.focus()
    }
    else if(!passwordIsValid){
      passwordInputRef.current.focus()

    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        {/* <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div> */}
        <Input
          ref={emailInputRef}
          id={"email"}
          label={"E-Mail"}
          type={"email"}
          isValid={emailState.isValid}
          value={emailState.value}
          onChangeHandler={emailChangeHandler}
          onValidateHandler={validateEmailHandler}
        />
        {/* <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div> */}
        <Input
          ref={passwordInputRef}
          id={"password"}
          label={"Password"}
          type={"password"}
          isValid={passwordState.isValid}
          value={passwordState.value}
          onChangeHandler={passwordChangeHandler}
          onValidateHandler={validatePasswordHandler}
        />
        <div className={classes.actions}>
          {/* <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button> */}
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
