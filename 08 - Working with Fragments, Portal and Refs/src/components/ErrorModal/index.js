import React from "react";
import styles from "./index.module.css";
import Card from "../Card";
import Button from "../Button";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onCloseModal} />;
};
const Overlay = (props) => {
  return (
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
  );
};
function ErrorModal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onCloseModal={props.onCloseModal} />,
        document.getElementById("backdrop-portal")
      )}
      {ReactDOM.createPortal(
        <Overlay titleError={props.titleError} messageError={props.messageError} onCloseModal={props.onCloseModal} />,
        document.getElementById("overlay-portal")
      )}
    </>
  );
}

export default ErrorModal;
