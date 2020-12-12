import React from 'react';
import homebot from './bgImages/homebot.png';
import hometop from './bgImages/hometop.png';
import cart from './bgImages/cart.png';
import orders from './bgImages/orders.png';
import payment from './bgImages/payment.png';
import product from './bgImages/product.png';
import products from './bgImages/products.png';
import signup from './bgImages/signup.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link }  from 'react-router-dom';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Footer } from './Footer';

export function Fair() {
    return (
        <>
            <div className="content">
                <div className="content__title">
                    <h1>Fair E-Books</h1>
                    <Link to="/">
                        <h2 className="homeR" style={{color:'#dfe9c8'}}><FontAwesomeIcon icon={ faHome } /></h2>
                    </Link>
                </div>
                <div className="content__description">
                    <h3>
                      an e-book store build with React, Redux, Express and MongoDB
                    </h3>
                </div>
                <div className="content__demo">
                    <a href="http://ec2-15-223-64-87.ca-central-1.compute.amazonaws.com"><h3>Demo</h3></a>
                </div>
                <div className="content__demosub">
                    <h3>
                    the demo is hosted on an AWS EC2 instance
                    </h3>
                </div>
                <div className="content__feature">
                    <h3>Features</h3>
                </div>
                <div className="content__feature_list">
                    <div>
                        <ul>
                            <li><h3>product searchbox</h3></li>
                            <li><h3>customized product page</h3></li>
                            <li><h3>customized shopping cart page</h3></li>
                            <li><h3>refreshable best selling product jumbotron</h3></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li><h3>paypal api intergration</h3></li>
                            <li><h3>product rate and review system</h3></li>
                            <li><h3>user register/login JWT authentication</h3></li>  
                            <li><h3>administrator inventory management system</h3></li>
                        </ul>
                    </div>
                </div>
                <div className="content__explore">
                    <a href="https://github.com/GuohaoOuyang/Fair-ebook-shop"><h3>Explore More at Github</h3></a>
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

    )
}
