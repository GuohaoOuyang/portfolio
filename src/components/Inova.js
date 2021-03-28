import React from "react";
import "./Inova.css";
import ssa from "./bgImages/ssa.png";
import story1 from "./bgImages/story1.png";
import story2 from "./bgImages/story2.png";
import item1 from "./bgImages/item1.png";
import item2 from "./bgImages/item2.png";
import contact from "./bgImages/contact.png";
import footer from "./bgImages/footer.png";
import faq from "./bgImages/faq.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Footer } from "./Footer";

function Inova() {
  return (
    <>
      <div className="content">
        <div className="content__title">
          <h1>Inova Game</h1>
          <Link to="/">
            <h2 className="homeb" style={{ color: "#dfe9c8" }}>
              <FontAwesomeIcon icon={faHome} />
            </h2>
          </Link>
        </div>
        <div className="content__description">
          <h3>
            A responsive SPA brochure aimed at providing an interactive front
            end UI/UX design
          </h3>
        </div>
        <div className="content__feature">
          <h3>Stacks</h3>
        </div>
        <div className="content__description">
          <h3>React, Sass, Google Maps Platforms, Lottie-web, Materialize</h3>
        </div>
        <div className="content__demo">
          <a href="https://guohaoouyang.github.io/spa-brochure-inovagame/">
            <h3>
              Demo hosted by <em>Github Pages</em>
            </h3>
          </a>
        </div>
        {/* <div className="content__feature_list">
          <div>
            <ul>
              <li>
                <h3>parallax scrolling</h3>
              </li>
              <li>
                <h3>auto detect scroll section</h3>
              </li>
              <li>
                <h3>google map search with marker</h3>
              </li>
              <li>
                <h3>nav bar hide on scroll down, show on scroll up</h3>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <h3>infinite scrolling banner</h3>
              </li>
              <li>
                <h3>breathable web lottie animation</h3>
              </li>
              <li>
                <h3>gradient fill with svg and linear gradient</h3>
              </li>
              <li>
                <h3>
                  auto play carousel with manual control and visible animation
                  timer
                </h3>
              </li>
            </ul>
          </div>
        </div> */}
        <div className="content__explore">
          <a href="https://github.com/GuohaoOuyang/Brand-demo-inovagame">
            <h3>Explore More at Github</h3>
          </a>
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
      <Footer />
    </>
  );
}

export default Inova;
