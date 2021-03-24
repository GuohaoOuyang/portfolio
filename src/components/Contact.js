import React from "react";
// import qr from './bgImages/wechat.jpg';
import "./Contact.css";

export const Contact = () => {
  return (
    <div className="contactI" style={{ lineHeight: "2em" }}>
      <div>
        <a href="https://www.linkedin.com/in/guohao-aidan-ouyang-13451619a/">
          <h3>Linkedin</h3>
        </a>
        <a href="https://github.com/GuohaoOuyang">
          <h3>Github</h3>
        </a>
        <a href="https://gojsblog.herokuapp.com/">
          <h3>Blog</h3>
        </a>
        <a href="mailto:guohao.ouyang@gmail.com">
          <h3>Email</h3>
        </a>
      </div>
    </div>
  );
};
