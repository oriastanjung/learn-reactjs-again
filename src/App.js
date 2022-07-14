import React from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals";

function App() {
  return (
    <>
      <Header />
      <main>
        <Meals></Meals>
      </main>
    </>
  );
}

export default App;
