import React from "react";
import styles from "./index.module.css";

function UserItem(props) {
  return (
    <li className={styles.user}>
      {props.user.name} ({props.user.age} years old)
    </li>
  );
}

export default UserItem;
