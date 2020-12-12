import React from 'react';

export const Footer = () => {
    const footerStyle = {
        width: "100%",
        height: "4vh",
        backgroundColor: "#1e1e1e",
        color: "#F4CBB2",
        // color: "#fff",
        textAlign: "center",
        fontSize: "0.8rem"
    }
    return (
        <div style={footerStyle}>
            © 2020 Aidan Ouyang. All Rights Reserved
        </div>
    )
  }