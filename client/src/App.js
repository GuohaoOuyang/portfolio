import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import { Home } from './components/Home';
import { Resume } from './components/resume/Resume';
import { Inova } from './components/Inova';
import { Fair } from './components/Fair';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
        <Route path="/inova">
          <Inova />
        </Route>
        <Route path="/fair">
          <Fair />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
