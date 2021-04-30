import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import resume from "./components/bgImages/resume.pdf";

function App() {
  return (
    <HashRouter basename={window.location.pathname || ""}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/resources/resume">
          <iframe
            style={{ width: "100vw", height: "100vh" }}
            src={resume}
            type="application/pdf"
            title="resume"
          />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
