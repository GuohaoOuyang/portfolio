import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
import { Inova } from "./components/Inova";
import { Fair } from "./components/Fair";
import resume from "./components/bgImages/resume.pdf";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/resources/resume">
          <iframe
            style={{ width: "100vw", height: "100vh" }}
            src={resume}
            type="application/pdf"
            title="resume"
          />
        </Route>
        <Route path="/project/inova">
          <Inova />
        </Route>
        <Route path="/project/fair">
          <Fair />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
