import React from 'react'
import './layout.css';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import fb from './images/facebook-square-brands.svg';
import inst from './images/instagram-square-brands.svg';
import lkn from './images/linkedin-brands.svg';
import tw from './images/twitter-square-brands.svg';
import yt from './images/youtube-square-brands.svg';

function Footer(){
    return(
        <footer class=" bg-footerbgcolor mt-5 py-5 text-white">
            <div class="d-flex justify-content-around">
                <div>
                    ABOUT SHOPPERS
                    <ul>
                        <li>About us</li>
                        <li>Careers</li>
                        <li>Terms and Conditions</li>
                        <li>Shoppers Express</li>
                        <li>Privacy and Cookie Notice</li>
                        <li>Our Partners</li>
                    </ul>


                </div>
                <div>
                MAKE MONEY WITH SHOPPERS
                <ul>
                        
                        <li>Sell on Shoppers</li>
                        <li>Become a LOogistics Partner</li>
                        <li>Becom a Sales Consultant</li>
                        
                    </ul>

                </div>
                <div>
                    SHOPPERS INTERNATIONAL
                <ul>
                        <li>Nigeria</li>
                        <li>Ghana</li>
                        <li>Senegal</li>
                        <li>Zimbabwe</li>
                        <li>Egypt</li>
                        <li>South Africa</li>
                        <li>Malawi</li>
                    </ul>

                </div>
            </div>
            <div class="mx-5 d-flex justify-content-between">
                <div class="d-flex justify-content-between gap">
                    <a><img src={fb} alt="" height='30px'></img></a>
                    <a><img src={inst} alt="" height='30px'></img></a>
                    <img src={lkn} alt="" height='30px'></img>
                    <img src={tw} alt="" height='30px'></img>
                    <img src={yt} alt="" height='30px'></img>

                </div>
                <div>
                    <p> &copy;Copyright Shopify 2022</p>
                </div>
            </div>
            
        </footer>

    );
};

export default Footer;