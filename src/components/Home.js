import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUniversity,
  faProjectDiagram,
  faUserSecret,
  faCode,
  faAddressCard,
  faAt,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import ReactCardFlip from "react-card-flip";
import { Expertise } from "./Expertise";
import { Education } from "./Education";
import { Contact } from "./Contact";
import * as Scroll from "react-scroll";
import mock from "./bgImages/mockup.png";
import { Footer } from "./Footer";

const Home = () => {
  const [isFlipped1, setIsFlipped1] = useState(false);
  const [isFlipped2, setIsFlipped2] = useState(false);
  const [isFlipped3, setIsFlipped3] = useState(false);
  let Slink = Scroll.Link;
  let scroll = Scroll.animateScroll;

  const handleClick1 = (e) => {
    e.preventDefault();
    setIsFlipped1(!isFlipped1);
  };

  const handleClick2 = (e) => {
    e.preventDefault();
    setIsFlipped2(!isFlipped2);
  };

  const handleClick3 = (e) => {
    // e.preventDefault();
    setIsFlipped3(!isFlipped3);
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    scroll.scrollToTop();
  };

  return (
    <React.Fragment>
      {/* home botton */}
      <h2 className="homeb">
        <FontAwesomeIcon icon={faHome} onClick={scrollToTop} />
      </h2>
      <div className="container in-small">
        {/* title */}
        <div className="bg1">
          <Link to="/" className="res">
            <p
              className="homeName"
              style={{ fontFamily: "'Work Sans', sans-serif" }}>
              Aidan Ouyang
            </p>
            <p
              style={{
                color: "#dfe9c8",
                fontFamily: "'Work Sans', sans-serif",
              }}>
              Full Stack Developer
            </p>
          </Link>
        </div>
        {/* nav section */}
        <Slink
          activeClass="active"
          to="aboutMe"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="link">
          <div className="front">
            <div className="bg1">
              <h2>
                <FontAwesomeIcon icon={faUserSecret} />
              </h2>
              <p>I Am</p>
            </div>
          </div>
        </Slink>
        <ReactCardFlip
          isFlipped={isFlipped2}
          flipDirection="horizontal"
          flipSpeedFrontToBack="1"
          flipSpeedBackToFront="1">
          <div className="front">
            <div className="bg1" onClick={handleClick2}>
              <h2>
                <FontAwesomeIcon icon={faCode} />
              </h2>
              <p>Skills</p>
            </div>
          </div>
          <div onClick={handleClick2} className="back">
            <Expertise />
          </div>
        </ReactCardFlip>
        {/* card flip education */}
        <ReactCardFlip
          isFlipped={isFlipped1}
          flipDirection="horizontal"
          flipSpeedFrontToBack="1"
          flipSpeedBackToFront="1">
          <div className="front">
            <div className="bg1" onClick={handleClick1}>
              <h2>
                <FontAwesomeIcon icon={faUniversity} />
              </h2>
              <p>Education</p>
            </div>
          </div>
          <div onClick={handleClick1} className="back">
            <Education />
          </div>
        </ReactCardFlip>
        {/* route to resume */}
        <div className="bg1">
          <Link to="/resources/resume" className="res">
            <h2>
              <FontAwesomeIcon icon={faAddressCard} />
            </h2>
            <p>Resume</p>
          </Link>
        </div>
        {/* project link */}
        <div className="bg2">
          <a
            href="https://github.com/GuohaoOuyang/spa-brochure"
            className="res">
            {/* <Link to="/project/inova" className="res"> */}
            <h2>
              <FontAwesomeIcon icon={faProjectDiagram} />
            </h2>
            <p>SPA Brochure</p>
            {/* </Link> */}
          </a>
        </div>
        <div className="bg2">
          <a href="https://github.com/GuohaoOuyang/ebook-store" className="res">
            {/* <Link to="/project/fair" className="res"> */}
            <h2>
              <FontAwesomeIcon icon={faProjectDiagram} />
            </h2>
            <p>Ebook Store</p>
            {/* </Link> */}
          </a>
        </div>
        <div className="bg2">
          <a
            href="https://github.com/GuohaoOuyang/team-dolphin"
            className="res">
            <h2>
              <FontAwesomeIcon icon={faProjectDiagram} />
            </h2>
            <p>Mentions Crawler</p>
          </a>
        </div>
        {/* card flip contact*/}
        <ReactCardFlip
          isFlipped={isFlipped3}
          flipDirection="verticle"
          flipSpeedFrontToBack="1"
          flipSpeedBackToFront="1">
          <div className="front">
            <div className="bg2" onClick={handleClick3}>
              <h2>
                <FontAwesomeIcon icon={faAt} />
              </h2>
              <p>Find Me Through...</p>
            </div>
          </div>
          <div onClick={handleClick3} className="back">
            <Contact />
          </div>
        </ReactCardFlip>
      </div>
      {/* about me section */}
      <div className="aboutMe" id="aboutMe">
        <h2 className="section-head">About</h2>
        <p className="section-content">
          Hi! My Name is Aidan Ouyang and I am the developer and maintainer of
          this site.
          <br />
          <br />
          Some facts about me:
          <br />◆ I am software developer | snowboarder | dream chaser 🌈
          <br />
          ◆ 70%❤️ front end, 30%❤️ back end
          <br />
          ◆ Always focus on the problem, not the technology
          <br />◆ Looking for a challenging role that provides an opportunity to
          learn new technologies and contribute to the organization
        </p>
        <img src={mock} alt="" className="aboutbg" />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
