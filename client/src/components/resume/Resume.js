import React from 'react';
import './Resume.css';
import { Header } from './Header';
import { ContactInfo } from './ContactInfo';
import { BulletPointList } from './BulletPointList';
import { AddTransaction } from './AddBulletPoint';
import { GlobalState } from '../../context/GlobalState';

export const Resume = ()=> {
  return (
    <GlobalState>
      <div className="resume">
        <Header />
        <ContactInfo />
        <BulletPointList />
        <AddTransaction />
      </div>
    </GlobalState>
  )
}
