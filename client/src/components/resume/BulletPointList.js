import React, { useContext, useEffect } from 'react';
import { BulletPoint } from './BulletPoint';
import { GlobalContext } from '../../context/GlobalState';

export const BulletPointList = () => {

  const { bullepoints, getInfo } = useContext(GlobalContext);
  useEffect(() => {
    getInfo()
    // eslint-disable-next-line
  }, []);

  return (
    <div className="mainContext">
    <div className="header">
    <h3 className="sectionTitle">PROFILE</h3>
    <p className='fNormal' style={{lineHeight:'1.6rem',listStyleType:'none', marginBottom: '30px',fontSize:'1rem'}}>Highly Self-Motivated front-end 
    developer with 3 years of experience building end-to-end responsive websites. Proficient in HTML, CSS, JavaScript and modern
     frameworks with react, redux, and sass. Accustomed to an agile and fast-paced work environment.</p>
    <h3 className="sectionTitle">QUALIFICATIONS</h3>
    <ul className="list">
        {bullepoints.filter(bulletpoint => (bulletpoint.into==='qualification')).map(bulletpoint => (<BulletPoint key={bulletpoint._id} bulletpoint={bulletpoint} />))}
    </ul>
    </div>
    <div className="header">
    <h3 className="sectionTitle">EDUCATION</h3>
    <ul className="list">
      {bullepoints.filter(bulletpoint => (bulletpoint.into==='education')).map(bulletpoint => (<BulletPoint key={bulletpoint._id} bulletpoint={bulletpoint} />))}
    </ul>
    </div>
    <div className="header">
    <h3 className="sectionTitle">PROJECT EXPERIENCE</h3>
    <ul className="list">

  {bullepoints.filter(bulletpoint => (bulletpoint.into==='project_experience')).map(bulletpoint => (<BulletPoint key={bulletpoint._id} bulletpoint={bulletpoint} />))}

    </ul>
    </div>
    <div className="header">
    <h3 className="sectionTitle">VOLUNTEER EXPERIENCE</h3>
    <ul className="list">

  {bullepoints.filter(bulletpoint => (bulletpoint.into==='volunteer_experience')).map(bulletpoint => (<BulletPoint key={bulletpoint._id} bulletpoint={bulletpoint} />))}

    </ul>
    </div>
    <div className="header">
    <h3 className="sectionTitle">INTERESTS</h3>
    <ul className="list">

  {bullepoints.filter(bulletpoint => (bulletpoint.into==='interests')).map(bulletpoint => (<BulletPoint key={bulletpoint._id} bulletpoint={bulletpoint} />))}

    </ul>
    </div>
  </div>
  )
}
