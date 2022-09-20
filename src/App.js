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
import ViewReport from "./Components/ViewReport";

function App() {
  const [state, setState] = useState("");
  const history = useHistory();

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <PrimarySearchAppBar />
          <Switch>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/ViewReport">
              <ViewReport />
            </Route>
            <Route exact path="/addnewreport">
              <NewESGReport />
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
