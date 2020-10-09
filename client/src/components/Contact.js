import React from 'react';
import qr from './bgImages/wechat.jpg';
import './Contact.css';

export const Contact = () => {
  return (
    <div className="contactI" style={{lineHeight: "2em"}}>
     <div>
       <a href="https://www.linkedin.com/in/guohao-ouyang-13451619a/"><h3>Linkedin</h3></a>
       <a href="https://github.com/GuohaoOuyang?tab=repositories"><h3>Github</h3></a>
     </div>
    <h3>Email: guohao.ouyang@gmail.com</h3>
    <h3>WeChat: ha408737315 </h3>
    <img src={ qr } alt="qrcode" className="qC"/>
    </div>
  )
}
