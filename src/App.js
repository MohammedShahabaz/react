import "./App.css";
import React from "react";
import PrimarySearchAppBar from "./pages/Components/Navbar";
import NewESGReport from "./pages/Components/NewESGReport";
import Home from "../src/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ViewReport from "./pages/ViewReport";

function App() {
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
