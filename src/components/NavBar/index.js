import React, { useState, useEffect } from "react";
import {Link}  from "react-router-dom"
import "./index.css";

const NavBar = () => {
    const [navbarColor, setNavbarColor] = useState("transparent");
    const [sidePanelOpen, setSidePanelOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) { // Change 100 to the desired scroll threshold
                setNavbarColor("rgb(67, 65, 65)"); // New color after scrolling
                // setNavbarColor("#ffebcd")
            } else {
                setNavbarColor("transparent");
            }
        };

        // const openNav=()=> {
        //     document.getElementById("mySidepanel").style.width = "250px";
        // }

        // const closeNav =()=> {
        //     document.getElementById("mySidepanel").style.width = "0";
        //   }

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
            <div className="laptop-links">
                <ul className="nav-links">
                    <Link to="/" className="navbar-link">
                        <li className="list">
                            <p className="anchor">Home</p>
                        </li>
                    </Link>
                    <Link to="/about-us" className="navbar-link">
                        <li className="list">
                            <p className="anchor">About us</p>
                        </li>
                    </Link>
                    <Link to="/pricing" className="navbar-link">
                        <li className="list">
                            <p className="anchor">Pricing</p>
                        </li>
                    </Link>
                    <Link to="/reviews" className="navbar-link">
                        <li className="list">
                            <p className="anchor">Reviews</p>
                        </li>
                    </Link>
                    <Link to="/contact" className="navbar-link">
                        <li className="list">
                            <p className="anchor">Contact</p>
                        </li>
                    </Link>
                </ul>
            </div>
            <div className="mobile-links">
                <div className={`sidepanel ${sidePanelOpen ? "open" : ""}`}>
                    <button className="closebtn" onClick={() => setSidePanelOpen(false)}>&times;</button>
                    <Link to="/" onClick={() => setSidePanelOpen(false)}>Home</Link>
                    <Link to="/about-us" onClick={() => setSidePanelOpen(false)}>About us</Link>
                    <Link to="/pricing" onClick={() => setSidePanelOpen(false)}>Pricing</Link>
                    <Link to="/reviews" onClick={() => setSidePanelOpen(false)}>Reviews</Link>
                    <Link to="/contact" onClick={() => setSidePanelOpen(false)}>Contact</Link>
                </div>

                <button className="openbtn" onClick={() => setSidePanelOpen(true)}>&#9776;</button>
            </div>
        </div>
    );
};

export default NavBar;
