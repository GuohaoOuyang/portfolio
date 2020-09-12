import React, {useContext} from 'react';
import './BulletPoint.css';
import { GlobalContext } from '../../context/GlobalState';

export const BulletPoint = ({bulletpoint}) => {

  const { deleteBulletPoint} = useContext(GlobalContext);

  return (
          <li  className={bulletpoint.font === 'normal' ? 'fNormal' : (bulletpoint.font==='bold' ? 'fBold': 'fItalic')}>
          {bulletpoint.text} <button className="delete-btn" onClick={()=>deleteBulletPoint(bulletpoint._id)} >x</button>
          </li>
  )
}
