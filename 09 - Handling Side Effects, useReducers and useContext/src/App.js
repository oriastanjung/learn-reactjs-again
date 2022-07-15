import React, { useState, useEffect, useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./components/store/auth-context";
import { AuthContextProvider } from "./components/store/auth-context";
function App() {
  //since we use useContext() and use it on the Context.Provider custom component
  // we create the data on that context
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   const checkIsLoggedInLocalStorage = localStorage.getItem("isLoggedIn");
  //   if (checkIsLoggedInLocalStorage === "1") {
  //     setIsLoggedIn(true);
  //   }
  // }, []);

  // const loginHandler = (email, password) => {
  //   // We should of course check email and password
  //   // But it's just a dummy/ demo anyways
  //   localStorage.setItem("isLoggedIn", "1");
  //   setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
  //   localStorage.removeItem("isLoggedIn");
  //   setIsLoggedIn(false);
  // };
  const dataContext = useContext(AuthContext);
  return (
    // <React.Fragment>
    //   <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
    //   <main>
    //     {!isLoggedIn && <Login onLogin={loginHandler} />}
    //     {isLoggedIn && <Home onLogout={logoutHandler} />}
    //   </main>
    // </React.Fragment>

    // to use the context we use <ContextComponent.Provider value={{dataThatWantToBePass}}> content that use all the data inside context</ContextComponent.Provider>
    // <AuthContext.Provider
    //   value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandler }}
    // >
    //   {/* <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} /> */}
    //   {/* // USE context to pass data, we dont need props isLoggedIn again */}
    //   <MainHeader/>
    //   <main>
    //     {!isLoggedIn && <Login onLogin={loginHandler} />}
    //     {isLoggedIn && <Home onLogout={logoutHandler} />}
    //   </main>
    // </AuthContext.Provider>

    // using custom component see at index.js
    <>
      <MainHeader />
      <main>
        {!dataContext.isLoggedIn && <Login />}
        {dataContext.isLoggedIn && <Home  />}
      </main>
      </>
  );
}

export default App;
