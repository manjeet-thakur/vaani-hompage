import React from "react";
import "./Homepage.css";

const Homepage = () => {
    return (
        <div className="main">
            <div className="homepage">
                <div className="homepage1">
                    <div className="navItems">
                        <img
                            src="https://vaanitechlabs.com/public/frontend/assets/webp_images/Resize_Image/site-logo.webp"
                            alt=""
                            className="logo"
                        />
                        <ul>
                            <li>HOME</li>
                            <li>ABOUT US</li>
                            <li>SERVICES</li>
                            <li>PORTFOLIO</li>
                            <li>CONTACT</li>
                        </ul>
                    </div>
                    <p className="quote">
                        <span>Wellcome</span>
                        <br />
                        You are at right Place
                    </p>
                    <p className="quote2">
                        We craft astonishing websites, magnificent high geared Apps for
                        Android & IOS & others, innovative CRM that ensure overall growth of
                        your business.
                    </p>
                    <div className="buttons">
                        <button className="button button3">LEARN MORE</button>
                        <button className="button button3 button4">CONTACT US</button>
                    </div>
                    <div className="icons">
                        <i className="icon fa-brands fa-facebook"></i>
                        <i className="icon fa-brands fa-youtube"></i>
                        <i className="icon fa-brands fa-twitter"></i>
                        <i className="icon fa-brands fa-instagram"></i>
                        <i className="icon fa-brands fa-linkedin"></i>
                        <i className="icon fa-brands fa-pinterest"></i>
                        <i className="icon fa-brands fa-whatsapp"></i>
                        <i className="icon fa-brands fa-telegram"></i>
                        <i className="icon fa-brands fa-skype"></i>
                        <i className="icon fa-brands fa-google"></i>
                    </div>
                </div>
                <div className="homepage2">
                    <div className="buttons">
                        <button className="button button3">GET A QUOTE</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Homepage;
