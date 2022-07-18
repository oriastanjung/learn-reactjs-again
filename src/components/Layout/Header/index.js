import React from 'react';

import mealsImg from "../../../assets/meals.jpeg";
import HeaderCartButton from '../HeaderCartButton';
import styles from './index.module.css';;


function Header(props) {
  
  return (
    <>
        <header className={styles['header']}>
            <h1>
                Flash Meals
            </h1>
            <HeaderCartButton onClick={props.onShowCart}/ >
        </header>
        <div className={`${styles['main-image'] }`}>
            <img src={mealsImg} />
        </div>
    </>
  )
}

export default Header