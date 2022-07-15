import React from "react";
import styles from "./index.module.css";
import UserItem from "../UserItem/index";
import Card from "../../Card";
function UsersList(props) {
  return (
    <Card className={styles["users"]}>
        {props.dataUsers.length === 0 && <p style={{textAlign : 'center',paddingTop : '1rem'}}>No Data here</p>}
      <ul>
        {props.dataUsers.map((user) =>  <UserItem key={user.id} user={user} />)}
      </ul>
    </Card>
  );
}

export default UsersList;
