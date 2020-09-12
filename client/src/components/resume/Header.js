import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link }  from 'react-router-dom';
import { faHome } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
  return (
    <div className="headerStyle">
      <div className="head">
        <h2 className='name'>Guohao Ouyang</h2>
      </div>
      <div>
        <Link to="/">
        <h2 className="homeR"><FontAwesomeIcon icon={ faHome } /></h2>
        </Link>
      </div>
    </div>

  )
}
