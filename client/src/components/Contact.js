import React from 'react';
import qr from './bgImages/wechat.jpg';

export const Contact = () => {
  return (
    <div className="contactI" style={{lineHeight: "2em"}}>
    <h3>Email: guohao.ouyang@gmail.com</h3>
    <h3>WeChat: ha408737315 </h3>
    <img src={ qr } alt="qrcode" className="qC"/>
    </div>
  )
}
