import React from 'react'
import styles from './index.module.css';

function ModalOverlay(props) {
  return (
    <div className={styles.modal}>
        <div className={styles.content}>
            {props.children}
        </div>
    </div>
  )
}

export default ModalOverlay