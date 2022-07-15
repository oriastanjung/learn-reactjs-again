import React, { useState } from "react";
import AddUser from "./components/Users/AddUsers";
import UsersList from "./components/Users/UsersList";
import "./index.css";

function App() {
  const [users, setUsers] = useState([]);

  const handlerOnAddUsers = (uName, uAge) => {
    setUsers((prevState) => {
      return [
        ...prevState,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div>
      <AddUser onAddUsers={handlerOnAddUsers} />
      <UsersList dataUsers={users} />
    </div>
  );
}

export default App;
