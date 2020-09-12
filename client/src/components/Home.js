import React, {useState} from 'react';
import { Link }  from 'react-router-dom';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversity, faProjectDiagram, faUserSecret, faBriefcase, faCode, faAddressCard, faAt , faHome, faRunning } from '@fortawesome/free-solid-svg-icons';
import ReactCardFlip from 'react-card-flip';
import { Expertise } from './Expertise';
import { Education } from './Education';
import { Contact } from './Contact';
import * as Scroll from 'react-scroll';
import  mock  from './bgImages/mockup.png';
// import  cert  from './bgImages/certif.png';


export const Home = () => {
  const [isFlipped1, setIsFlipped1] = useState(false);
  const [isFlipped2, setIsFlipped2] = useState(false);
  const [isFlipped3, setIsFlipped3] = useState(false);
  let Slink = Scroll.Link;
  let scroll = Scroll.animateScroll;

  const handleClick1 = (e) => {
    e.preventDefault();
    setIsFlipped1(!isFlipped1);
  }

  const handleClick2 = (e) => {
    e.preventDefault();
    setIsFlipped2(!isFlipped2);
  }

  const handleClick3 = (e) => {
    e.preventDefault();
    setIsFlipped3(!isFlipped3);
  }

  const scrollToTop = (e) => {
    e.preventDefault();
    scroll.scrollToTop();
  }


  return (
    <React.Fragment>
    {/* home botton */}
      <h2 className="homeb"><FontAwesomeIcon icon={ faHome } onClick={scrollToTop}/></h2>
    <div className="container in-small">
    {/* title */}
      <div className="bg1">
        <Link to="/" className="res">
          <p className="homeName">Hi, Welcome to My Page!</p>
        </Link>
      </div>
    {/* nav section */}
     <Slink activeClass="active" to="aboutMe" spy={true} smooth={true} offset={50} duration={500} className="link">
       <div className="front">
        <div className="bg1">
          <h2 ><FontAwesomeIcon icon={faUserSecret} /></h2>
          <p>Who I Am</p>
        </div>
      </div>
    </Slink>
      <Slink activeClass="active" to="ido" spy={true} smooth={true} offset={50} duration={500} className="link">
        <div className="front">
         <div className="bg1">
           <h2><FontAwesomeIcon icon={faBriefcase} /></h2>
           <p>What I Do</p>
         </div>
       </div>
     </Slink>
    {/* card flip education */}
     <ReactCardFlip isFlipped={isFlipped1} flipDirection="horizontal" flipSpeedFrontToBack='1' flipSpeedBackToFront="1">
     <div className="front">
      <div className="bg1" onClick={ handleClick1 }>
        <h2><FontAwesomeIcon icon={faUniversity} /></h2>
        <p>My Education Experience</p>
      </div>
      </div>
      <div onClick={ handleClick1 } className="back">
      <Education />
      </div>
    </ReactCardFlip>
     {/* card flip expertise */}
      <ReactCardFlip isFlipped={isFlipped2} flipDirection="horizontal" flipSpeedFrontToBack='1' flipSpeedBackToFront="1">
      <div className="front">
      <div className="bg2" onClick={ handleClick2 }>
        <h2><FontAwesomeIcon icon={faCode} /></h2>
        <p>Top Expertise</p>
      </div>
      </div>
      <div onClick={ handleClick2 } className="back">
      <Expertise />
      </div>
    </ReactCardFlip>
     {/* route to resume */}
      <div className="bg1">
      <Link to="/resume" className="res">
        <h2><FontAwesomeIcon icon={faAddressCard} /></h2>
        <p>My Resume</p>
      </Link>
      </div>
     {/* project link */}
      <div className="bg2">
      <a href="https://github.com/GuohaoOuyang/Analyzer" className="res">
        <h2><FontAwesomeIcon icon={faProjectDiagram} /></h2>
        <p>Project 1</p>
      </a>
      </div>
      <div className="bg2">
      <a href="https://github.com/GuohaoOuyang/chess_solitaire" className="res">
        <h2><FontAwesomeIcon icon={faProjectDiagram} /></h2>
        <p>Project 2</p>
      </a>
      </div>
      <div className="bg2">
      <a href="https://github.com/GuohaoOuyang/my-resume" className="res">
        <h2><FontAwesomeIcon icon={faProjectDiagram} /></h2>
        <p>Project 3</p>
      </a>
      </div>
     {/* card flip contact*/}
      <ReactCardFlip isFlipped={isFlipped3} flipDirection="verticle" flipSpeedFrontToBack='1' flipSpeedBackToFront="1">
      <div className="front">
      <div className="bg2" onClick={ handleClick3 }>
        <h2><FontAwesomeIcon icon={faAt} /></h2>
        <p>Find Me Through...</p>
      </div>
      </div>
      <div onClick={ handleClick3 } className="back">
      <Contact />
      </div>
      </ReactCardFlip>
    </div>
    {/* about me section */}
      <div className="aboutMe" id="aboutMe">
        <h2 className="section-head">Hi, My Name is Guohao Ouyang</h2>
        <p className="section-content">I was born and raised in Chengdu, China.
        A mega city south west known for panda. I did my elementary schooling
        there all the way till grade eleven. Then, I came to Canada in June 2013 for
        further studying. I had two diplomas, one is at Windsor, the south Ontario.
        And the second one is from Niagara College. I went to University at 2016 and just finished
        my bachelor degree at York, Toronto.</p>
      <img src={mock} alt="" className="aboutbg"/>
      </div>
      {/* what I do section */}
      <div className="ido" id="ido">
        <div>
          <h2 className="running"><FontAwesomeIcon icon={ faRunning }/></h2>
        </div>
        <div>
          <p className="section-content">
            There was a time, I used to do vehicle express services in Nissan, Waterloo in 2015, back when I first
              graduated from Niagara College. It was a good job. However, I found that I wasn't enjoying that much
              every now and then. Deep down I want to achieve something meaningful, So I manage to keep learning
              and go back to University for a computer science degree.
            </p>
            <br></br>
            <p className="section-content">
              After graduating from the University. I build projects and keep learning new techs to tickle my
              brain. I am looking forward to meet a bunch of awesome guys to make some beautiful things together.
            </p>
        </div>
      </div>
     {/* education ection */}
      {/*
        <div className="edu" id="edu">
        <img src={cert} alt="" className="cert"/>
        <ul className="eduList">
          <li>Chengdu Experimental Foreign Languages School <span style={{fontStyle:"italic", fontSize: "1rem"}}> 2009-2013</span></li>
          <li>Bronte College-high scool, Mississauga 2013-2014</li>
          <li>St Clair College-Diploma, Fashion Design 2014-2015</li>
          <li>Niagara College-Diploma, Automotive Technician 2015-2016</li>
          <li>York University-Lassonde School of Engineering Bachelor's degree, Computer Science 2016-2020</li>
        </ul>

      </div>
        */}
    </React.Fragment>

  )
}
