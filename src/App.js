import logo from "./logo.svg";
import "./App.css";
import React from "react";

import { useState, useEffect } from "react";
import PrimarySearchAppBar from "./UI/Navbar";
import CustomizedTables from "./UI/Table";
import NewESGReport from "./Components/NewESGReport";

function App() {
  const [state, setState] = useState("");

  const fetchAllDetails = async () => {
    const response = await fetch(`http://localhost:9000/testAPI`);
    const data = await response.text();
    setState(data);
    console.log(data);
  };
  useEffect(() => {
    fetchAllDetails();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <PrimarySearchAppBar />
        <div className="row">
          <div className="col-lg-8 m-5">
            <CustomizedTables />
            {/* <NewESGReport /> */}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
