import React, { useState, useEffect } from "react";
import "./index.css";

const NavBar = () => {
    const [navbarColor, setNavbarColor] = useState("transparent");

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) { // Change 100 to the desired scroll threshold
                setNavbarColor("rgb(67, 65, 65)"); // New color after scrolling
            } else {
                setNavbarColor("transparent"); // Default color
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="navbar" style={{ backgroundColor: navbarColor }}>
            <div className="logo">
                <a href="#home">
                    <img src="https://www.esteticanow.com/images/est/logo.png" alt="Website Logo" className="navbar-logo"/>
                </a>
            </div>
            <ul className="nav-links">
                <li className="list"><a href="#home" className="anchor">Home</a></li>
                <li className="list"><a href="#services" className="anchor">About us</a></li>
                <li className="list"><a href="#about" className="anchor">Pricing</a></li>
                <li className="list"><a href="#about" className="anchor">Reviews</a></li>
                <li className="list"><a href="#contact" className="anchor">Contact</a></li>
            </ul>
        </div>
    );
};

export default NavBar;
