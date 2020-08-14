import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { ContactInfo } from './components/ContactInfo';
import { BulletPointList } from './components/BulletPointList';
import { AddTransaction } from './components/AddBulletPoint';
import { GlobalState } from './context/GlobalState';

function App() {
  return (
    <GlobalState>
      <div>
        <Header />
        <ContactInfo />
        <BulletPointList />
        <AddTransaction />
      </div>
    </GlobalState>
  );
}

export default App;
