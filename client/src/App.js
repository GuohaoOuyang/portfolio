import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
<<<<<<< HEAD
// import { Header } from './components/resume/Header';
// import { ContactInfo } from './components/resume/ContactInfo';
// import { BulletPointList } from './components/resume/BulletPointList';
// import { AddTransaction } from './components/resume/AddBulletPoint';
// import { GlobalState } from './context/GlobalState';
=======
>>>>>>> 8485c4d4... init commit
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
