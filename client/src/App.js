import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <div className="apppp">
      <Router>
      <Navbar/>
        <Switch>
          <Route path="/" exact component = {Home}/>
          <Route path="/dashboard" exact component = {Dashboard}/>
        </Switch>
      </Router>
    </div>
  );
};
export default App;
