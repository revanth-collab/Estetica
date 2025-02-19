import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TbSquareRoundedLetterC } from "react-icons/tb";

import "./index.css"

const Footer = () => {
    return (
        <div className="footer-contain">
            <div className="footer-container">
                <div className="footer">
                    <h1 className="gold-colored-content">Quick Links</h1>
                    <p className="footer-white-content">Who We Are</p>
                    <p className="footer-white-content">What We Treat</p>
                    <p className="footer-white-content">Services</p>
                    <p className="footer-white-content">Contact Us</p>
                </div>
                <div className="footer">
                    <h1 className="gold-colored-content">Resources</h1>
                    <p className="footer-white-content">FQAs</p>
                    <p className="footer-white-content">Blog</p>
                    <p className="footer-white-content">Fees and Insurance</p>
                </div>
                <div className="footer">
                    <h1 className="gold-colored-content">Legal</h1>
                    <p className="footer-white-content">Terms</p>
                    <p className="footer-white-content">Privacy</p>
                    <p className="footer-white-content">Return Policy</p>
                    <p className="footer-white-content">Cookie Settings</p>
                </div>
                <div className="footer">
                    <h1 className="gold-colored-content">Business Hours</h1>
                    <p className="footer-white-content">Monday - Thursday</p>
                    <p className="footer-white-content">09:00 am - 4:00 pm</p>
                    <p></p>
                    <h1 className="gold-colored-content">For Careers</h1>
                    <p className="footer-white-content">Interested in joining the psychiatry Team?</p>
                    <p className="footer-white-content">Career@estetica.com</p>
                </div>
                <div className="footer">
                    <div className="footer-content">
                        <div className="footer-logo" alt="website logo"></div>
                        <h1 className="footer-heading">ESTETICA</h1>
                    </div>
                    <h1 className="gold-colored-content">Locate us</h1>
                    <p className="footer-white-content">2-86/2/G5, koppula towers, peerzadiguda, Hyderabad</p>
                    <p className="footer-white-content">Phone: 480-526-9292</p>
                    <h1 className="gold-colored-content">Follow us</h1>
                    <div className="footer-icons">
                        <FaInstagram className="footer-icon"/>
                        <FaFacebookSquare className="footer-icon"/>
                        <FaTwitter className="footer-icon"/>
                        <FaTiktok className="footer-icon"/>
                        <FaLinkedin className="footer-icon"/>
                    </div>
                </div>
            </div>
            <hr className="hori"/>
            <p className="footer-white-content reserved"> <TbSquareRoundedLetterC />Estetice. All rights reserved.</p>
        </div>
    )
}

export default Footer


