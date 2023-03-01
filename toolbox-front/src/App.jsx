import React from "react";
import { NavBar } from "./components/NavBar.jsx";
import { TableBasic } from "./components/TableBasic.jsx";
const App = () => {
  return (
    <>
    <NavBar />
    <div className="container">
      <TableBasic />
    </div>
    </>
  );
};

export default App;
