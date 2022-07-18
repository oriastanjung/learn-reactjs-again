import React from 'react';
import ReactDOM from 'react-dom'
import ModalOverlay from '../ModalOverlay';
import Backdrop from '../Backdrop';
import styles from './index.module.css';


function Modal(props) {
    const portalElement = document.getElementById("overlays");
  return (
    <>
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children} </ModalOverlay>, portalElement)}
    </>
  )
}

export default Modal