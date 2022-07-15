import React from "react";
import styles from "./index.module.css";
import Card from "../Card";
import Button from "../Button";

function ErrorModal(props) {
  return (
    <div className={styles.backdrop} onClick={props.onCloseModal}>
      <Card className={styles["modal"]}>
        <header className={styles["header"]}>
          <h2>{props.titleError}</h2>
        </header>
        <div className={styles["content"]}>
          <p>{props.messageError}</p>
        </div>
        <footer className={styles["actions"]}>
          <Button onClick={props.onCloseModal}>Okayy</Button>
        </footer>
      </Card>
    </div>
  );
}

export default ErrorModal;
