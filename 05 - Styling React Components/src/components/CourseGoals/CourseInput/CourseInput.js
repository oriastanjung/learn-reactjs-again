import React, { useState } from "react";
// import styled from "styled-components";
import stylesClasses from './CourseInput.module.css';
import Button from "../../UI/Button/Button";
// import "./CourseInput.css";

// const FormControl = styled.div`
//     margin: 0.5rem 0;
//     width: 100%;
//   & label {
//     color : ${props => props.invalidProps ? "red" : 'black'};
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${props => props.invalidProps ? 'red' : "#ccc"};
//     background : ${props => props.invalidProps ? '#edacac' : "transparent"};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }
//   @media (min-width:768px){
//     width : auto;
//   }
// `;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  // return (
  //   <form onSubmit={formSubmitHandler}>
  //     <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
  //       <label>Course Goal</label>
  //       <input type="text" onChange={goalInputChangeHandler} />
  //     </div>
  //     <Button type="submit">Add Goal</Button>
  //   </form>
  // );

  // return (
  //   //styled components can have props that can be used as dynamic style too
  //   <form onSubmit={formSubmitHandler}>
  //     <FormControl invalidProps = {!isValid}>
  //       <label>Course Goal</label>
  //       <input type="text" onChange={goalInputChangeHandler} />
  //     </FormControl>
  //     <Button type="submit">Add Goal</Button>
  //   </form>
  // );

  // using modules css
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${stylesClasses['form-control']} ${!isValid ? stylesClasses['invalid'] : ''}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
