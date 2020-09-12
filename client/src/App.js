import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import { Home } from './components/Home';
import { Resume } from './components/resume/Resume';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/resume">
{/*
  <GlobalState>
    <div className="resume">
      <Header />
      <ContactInfo />
      <BulletPointList />
      <AddTransaction />
    </div>
  </GlobalState>
  */}
          <Resume />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
