import React, { useState , useRef} from "react";
import Button from "../../Button";
import Card from "../../Card";
import styles from "./index.module.css";
import ErrorModal from "../../ErrorModal";

// Add Users using useState
// function AddUser(props) {
//   const [form, setForm] = useState({
//     username: "",
//     age: "",
//   });

//   const [error, setError] = useState();

//   const handlerOnChange = (e) => {
//     setForm((prevState) => {
//       return { ...prevState, [e.target.name]: e.target.value };
//     });
//   };

//   const addUserHandlerSubmit = (e) => {
//     e.preventDefault();
//     if (form.username.trim().length === 0 || form.age.trim().length === 0) {
//       setError({
//         title: 'Error has occured',
//         message : 'Please check if there is no empty data submited'
//       })
//       return;
//     }
//     if (+form.age < 1) {
//       setError({
//         title: 'Error for age',
//         message : 'Please check if the age must greater than 1'
//       })
//       return;
//     }
//     // console.log(form.username , form.age);
//     props.onAddUsers(form.username, form.age);

//     setForm({ username: "", age: "" });
//   };

//   const handlerCloseErrorModal = () =>{
//     setError(null);
//   }
//   return (
//     <>
//       {error && <ErrorModal onCloseModal={handlerCloseErrorModal}
//         titleError={error.title}
//         messageError={error.message}
//       />}
//       <Card className={`${styles["input"]}`}>
//         <form onSubmit={addUserHandlerSubmit}>
//           <label htmlFor="username">Username</label>
//           <input
//             value={form.username}
//             onChange={handlerOnChange}
//             type="text"
//             name="username"
//             id="username"
//           />
//           <label htmlFor="username">Age (years)</label>
//           <input
//             value={form.age}
//             onChange={handlerOnChange}
//             type="number"
//             name="age"
//             id="age"
//           />
//           <Button type="submit">Add User</Button>
//         </form>
//       </Card>
//     </>
//   );
// }


// Add Users using useRef
function AddUser(props) {
  const nameInputRef = useRef();
  const ageInputRef = useRef(); // this will output the location of the reference tag html element

  const [error, setError] = useState();


  const addUserHandlerSubmit = (e) => {
    e.preventDefault();
    const name = nameInputRef.current.value;
    const age = ageInputRef.current.value;
    if (name.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: 'Error has occured',
        message : 'Please check if there is no empty data submited'
      })
      return;
    }
    if (+age < 1) {
      setError({
        title: 'Error for age',
        message : 'Please check if the age must greater than 1'
      })
      return;
    }
    props.onAddUsers(name, age);
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  const handlerCloseErrorModal = () =>{
    setError(null);
  }
  return (
    <>
      {error && <ErrorModal onCloseModal={handlerCloseErrorModal}
        titleError={error.title}
        messageError={error.message}
      />}
      <Card className={`${styles["input"]}`}>
        <form onSubmit={addUserHandlerSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            ref={nameInputRef}
          />
          <label htmlFor="username">Age (years)</label>
          <input
            type="number"
            name="age"
            id="age"
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
}

export default AddUser;
