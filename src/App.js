import logo from "./logo.svg";
import "./App.css";
import React from "react";

import { useState, useEffect } from "react";
import PrimarySearchAppBar from "./UI/Navbar";

import NewESGReport from "./Components/NewESGReport";
import Home from "./Components/Home";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";

function App() {
  const [state, setState] = useState("");
  const history = useHistory();

  // const fetchAllDetails = async () => {
  //   const response = await fetch(`http://localhost:9000/testAPI`);
  //   const data = await response.text();
  //   setState(data);
  //   console.log(data);
  // };
  // useEffect(() => {
  //   fetchAllDetails();
  // }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <PrimarySearchAppBar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/addnewreport">
              <div className="row">
                <div className="col-lg-8 m-5">
                  <NewESGReport />
                </div>
              </div>
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
