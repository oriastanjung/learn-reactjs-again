import React, {useContext} from "react";
import AuthContext from "../store/auth-context";

import classes from "./Navigation.module.css";

const Navigation = (props) => {

  // useContext(contextFilePointer)
  const dataContext = useContext(AuthContext);
  return (
    // <nav className={classes.nav}>
    //   <ul>
    //     {props.isLoggedIn && (
    //       <li>
    //         <a href="/">Users</a>
    //       </li>
    //     )}
    //     {props.isLoggedIn && (
    //       <li>
    //         <a href="/">Admin</a>
    //       </li>
    //     )}
    //     {props.isLoggedIn && (
    //       <li>
    //         <button onClick={props.onLogout}>Logout</button>
    //       </li>
    //     )}
    //   </ul>
    // </nav>

    // to use the context data we can use Consumer or useContext()
    // this time we will use Consumer
    // <Context.Consumer> {(dataFromContext) => return (all jsx code )}
    // <AuthContext.Consumer>
    //   {(dataContext) => {
    //     return (
    //       <nav className={classes.nav}>
    //         <ul>
    //           {dataContext.isLoggedIn && (
    //             <li>
    //               <a href="/">Users</a>
    //             </li>
    //           )}
    //           {dataContext.isLoggedIn && (
    //             <li>
    //               <a href="/">Admin</a>
    //             </li>
    //           )}
    //           {dataContext.isLoggedIn && (
    //             <li>
    //               <button onClick={props.onLogout}>Logout</button>
    //             </li>
    //           )}
    //         </ul>
    //       </nav>
    //     );
    //   }}
    // </AuthContext.Consumer>

    // using useContext() hook

    <nav className={classes.nav}>
      <ul>
        {dataContext.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {dataContext.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {dataContext.isLoggedIn && (
          <li>
            <button onClick={dataContext.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
