import React, { useContext, useEffect } from 'react';
import { BulletPoint } from './BulletPoint';
import { GlobalContext } from '../context/GlobalState';

export const BulletPointList = () => {

  const { bullepoints, getInfo } = useContext(GlobalContext);
  useEffect(() => {
    getInfo()
    // eslint-disable-next-line
  }, []);

  return (
    <div className="mainContext">
    <div className="header">
    <h3>QUALIFICATIONS</h3>
    <ul className="list">
        {bullepoints.filter(bulletpoint => (bulletpoint.into==='qualification')).map(bulletpoint => (<BulletPoint key={bulletpoint._id} bulletpoint={bulletpoint} />))}
    </ul>
    </div>
    <div className="header">
    <h3>EDUCATION</h3>
    <ul className="list">
      {bullepoints.filter(bulletpoint => (bulletpoint.into==='education')).map(bulletpoint => (<BulletPoint key={bulletpoint._id} bulletpoint={bulletpoint} />))}
    </ul>
    </div>
    <div className="header">
    <h3>PROJECT EXPERIENCE</h3>
    <ul className="list">

  {bullepoints.filter(bulletpoint => (bulletpoint.into==='project_experience')).map(bulletpoint => (<BulletPoint key={bulletpoint._id} bulletpoint={bulletpoint} />))}

    </ul>
    </div>
    <div className="header">
    <h3>VOLUNTEER EXPERIENCE</h3>
    <ul className="list">

  {bullepoints.filter(bulletpoint => (bulletpoint.into==='volunteer_experience')).map(bulletpoint => (<BulletPoint key={bulletpoint._id} bulletpoint={bulletpoint} />))}

    </ul>
    </div>
    <div className="header">
    <h3>INTERESTS</h3>
    <ul className="list">

  {bullepoints.filter(bulletpoint => (bulletpoint.into==='interests')).map(bulletpoint => (<BulletPoint key={bulletpoint._id} bulletpoint={bulletpoint} />))}

    </ul>
    </div>
  </div>
  )
}
