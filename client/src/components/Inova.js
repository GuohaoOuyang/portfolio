import React from 'react';
import './Inova.css';
import ssa from './bgImages/ssa.png';
import story1 from './bgImages/story1.png';
import story2 from './bgImages/story2.png';
import item1 from './bgImages/item1.png';
import item2 from './bgImages/item2.png';
import contact from './bgImages/contact.png';
import footer from './bgImages/footer.png';
import faq from './bgImages/faq.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link }  from 'react-router-dom';
import { faHome } from '@fortawesome/free-solid-svg-icons';

export function Inova() {
    return (
            <div className="content">
                <div className="content__title">
                    <h1>Inova Game</h1>
                    <Link to="/">
                        <h2 className="homeR" style={{color:'#dfe9c8'}}><FontAwesomeIcon icon={ faHome } /></h2>
                    </Link>
                </div>
                <div className="content__description">
                    <h3>
                      a refined web branding demo that demonstrate some fundamental javascript and css skills.
                    </h3>
                </div>
                <div className="content__feature">
                    <h3>Features</h3>
                    <ul>
                        <li>parallax scrolling</li>
                        <li>infinite scrolling banner</li>
                        <li>auto detect scroll section</li>  
                        <li>breathable web lottie animation</li>
                        <li>google map search with marker</li>
                        <li>gradient fill with svg and linear gradient</li>
                        <li>nav bar hide on scroll down, show on scroll up</li>
                        <li>auto play carousel with manual control and visible animation timer</li>
                    </ul>
                </div>
                <div className="content__demo">
                    <a href="https://inovagame.herokuapp.com/"><h3>Demo</h3></a>
                </div>
                <div className="content__demosub">
                    <h3>
                    the demo is hosted free by heroku, it might take a little bit longer to load
                    </h3>
                </div>
                <div className="content__explore">
                    <a href="https://github.com/GuohaoOuyang/Brand-demo-inovagame"><h3>Explore More at Github</h3></a>
                </div>
                <div className="content__ss__title">
                    <h3>ScreenShot</h3>
                </div>
                <div className="content__screenshot">
                    <img src={ssa} alt=""></img>
                    <img src={story1} alt=""></img>
                    <img src={story2} alt=""></img>
                    <img src={item1} alt=""></img>
                    <img src={item2} alt=""></img>
                    <img src={contact} alt=""></img>
                    <img src={faq} alt=""></img>
                    <img src={footer} alt=""></img>
                </div>
            </div>

    )
}
