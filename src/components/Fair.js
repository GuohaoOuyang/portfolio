import React from "react";
import homebot from "./bgImages/homebot.png";
import hometop from "./bgImages/hometop.png";
import cart from "./bgImages/cart.png";
import orders from "./bgImages/orders.png";
import payment from "./bgImages/payment.png";
import product from "./bgImages/product.png";
import products from "./bgImages/products.png";
import signup from "./bgImages/signup.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Footer } from "./Footer";

function Fair() {
  return (
    <>
      <div className="content">
        <div className="content__title">
          <h1>Fair</h1>
          <Link to="/">
            <h2 className="homeb" style={{ color: "#dfe9c8" }}>
              <FontAwesomeIcon icon={faHome} />
            </h2>
          </Link>
        </div>
        <div className="content__description">
          <h3>A mock eCommerce solution</h3>
        </div>
        <div className="content__feature">
          <h3>Stacks</h3>
        </div>
        <div className="content__description">
          <h3>MERN Stack, Redux, React Bootstrap</h3>
        </div>
        <div className="content__demo">
          <a href="http://ec2-15-223-64-87.ca-central-1.compute.amazonaws.com">
            <h3>
              Demo hosted by <em>AWS EC2</em>
            </h3>
          </a>
        </div>
        {/* <div className="content__feature_list">
          <div>
            <ul>
              <li>
                <h3>React</h3>
              </li>
              <li>
                <h3>Redux</h3>
              </li>
              <li>
                <h3>Node.js</h3>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <h3>MongoDB</h3>
              </li>
              <li>
                <h3>Express.js</h3>
              </li>
              <li>
                <h3>React Bootstrap</h3>
              </li>
            </ul>
          </div>
        </div> */}
        <div className="content__explore">
          <a href="https://github.com/GuohaoOuyang/Fair-ebook-shop">
            <h3>Explore More at Github</h3>
          </a>
        </div>
        <div className="content__ss__title">
          <h3>ScreenShot</h3>
        </div>
        <div className="content__screenshot">
          <img src={hometop} alt=""></img>
          <img src={homebot} alt=""></img>
          <img src={signup} alt=""></img>
          <img src={product} alt=""></img>
          <img src={cart} alt=""></img>
          <img src={payment} alt=""></img>
          <img src={orders} alt=""></img>
          <img src={products} alt=""></img>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Fair;
