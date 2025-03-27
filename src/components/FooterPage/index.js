import "./index.css";
import { FaInstagram, FaFacebookSquare, FaTwitter, FaTiktok, FaLinkedin } from "react-icons/fa";
import { TbSquareRoundedLetterC } from "react-icons/tb";
import {Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-contain">
      <div className="footer-container">
        <div className="footer">
          <h1 className="gold-colored-content">Quick Links</h1>
          <p className="footer-white-content">Who We Are</p>
          <p className="footer-white-content">What We Treat</p>
          <p className="footer-white-content">Services</p>
          <Link to="/contact" className="footer-link">
            <p className="footer-white-content">Contact Us</p>
          </Link>
        </div>
        <div className="footer">
          <h1 className="gold-colored-content">Resources</h1>
          <p className="footer-white-content">FAQs</p>
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
          <h1 className="gold-colored-content">For Careers</h1>
          <p className="footer-white-content">Interested in joining our team?</p>
          <p className="footer-white-content">Career@estetica.com</p>
        </div>
        <div className="footer">
          <div className="footer-content">
            <div className="footer-logo" alt="website logo"></div>
            <h1 className="footer-heading">ESTETICA</h1>
          </div>
          <h1 className="gold-colored-content">Locate Us</h1>
          <p className="footer-white-content">2-86/2/G5, Koppula Towers, Peerzadiguda, Hyderabad</p>
          <p className="footer-white-content">Phone: 480-526-9292</p>
          <h1 className="gold-colored-content">Follow Us</h1>
          <div className="footer-icons">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram className="footer-icon" /></a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebookSquare className="footer-icon" /></a>
            <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer"><FaTwitter className="footer-icon" /></a>
            <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer"><FaTiktok className="footer-icon" /></a>
            <a href="https://www.linkedin.com/in/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="footer-icon" /></a>
          </div>
        </div>
      </div>
      <hr className="hori" />
      <p className="footer-white-content reserved">
        <TbSquareRoundedLetterC /> Estetica. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
