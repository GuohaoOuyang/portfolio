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

export function Fair() {
    return (
            <div className="content">
                <div className="content__title">
                    <h1>Fair E-Book Store</h1>
                    <Link to="/">
                        <h2 className="homeR" style={{color:'#dfe9c8'}}><FontAwesomeIcon icon={ faHome } /></h2>
                    </Link>
                </div>
                <div className="content__description">
                    <h3>
                      an e-book store build by React, Redux for frontend, backend with Express and MongoDB
                    </h3>
                </div>
                <div className="content__feature" >
                    <h3>Features</h3>
                    <ul style={{marginLeft:'2%'}}>
                        <li>product search</li>
                        <li>product pagination</li>
                        <li>paypal api integration</li>
                        <li>admin user management</li>  
                        <li>best selling product jumbotron</li>
                        <li>product review and rating support</li>
                        <li>user login/register authentication</li>
                        <li>product management add/delete</li>
                    </ul>
                </div>
                <div className="content__demo">
                    <a href="http://ec2-15-223-64-87.ca-central-1.compute.amazonaws.com"><h3>Demo</h3></a>
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

    )
}
