import React from 'react'
import styles from './index.module.css'
function Backdrop(props) {
  return (
    <div className={styles.backdrop} onClick={props.onClose}></div>
  )
}

export default Backdrop