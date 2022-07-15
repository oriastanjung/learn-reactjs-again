import React from 'react';

import Navigation from './Navigation';
import classes from './MainHeader.module.css';

const MainHeader = (props) => {
  return (
    <header className={classes['main-header']}>
      <h1>A Simple Login Page</h1>
      {/* <Navigation isLoggedIn={props.isAuthenticated} onLogout={props.onLogout} /> */}
      {/*using context to pass data */}
      <Navigation  />
    </header>
  );
};

export default MainHeader;
