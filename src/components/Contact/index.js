import { useEffect } from "react";
import NavBar from "../NavBar";
import FooterPage from "../FooterPage";
import "./index.css";

const Contact = () => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                        entry.target.classList.remove("out-of-view");
                    } else {
                        entry.target.classList.remove("active");
                        entry.target.classList.add("out-of-view");
                    }
                });
            },
            { threshold: 0.2 }
        );

        const elements = document.querySelectorAll(".fade-in");
        elements.forEach((el) => observer.observe(el));

        return () => elements.forEach((el) => observer.unobserve(el));
    }, []);

    return (
        <div className="contact-wrapper">
            <NavBar />
            <div className="contact-main-container fade-in">
                <div className="contact-us-main-heading fade-in">
                    <h1 className="contact-us">Contact Us</h1>
                </div>
                <p className="contact-us-main-para fade-in">Any query? <span className="contact-us-span">Let's talk</span></p>
                <p className="contact-us-para fade-in">
                    At Estetica, we believe in open communication. Whether you have questions about our services, need assistance with bookings, or simply want to learn more about how we can enhance your beauty and wellness journey, we're here to help!
                </p>
                <p className="contact-us-para fade-in">
                    Feel free to reach out to us using the contact details below, and our dedicated team will respond as soon as possible.
                </p>
                <div className="contact-us-card-container fade-in">
                    <div className="contact-us-card fade-in">
                        <div className="contact-image-icon">
                            <img src="/images/cardIcons/mail_icon.png" alt="mail-image" className="contact-image-mail" />
                        </div>
                        <p>Email us: <a href="mailto:support@esteticanow.com" className="contact-anchor">support@esteticanow.com</a></p>
                    </div>
                    <div className="contact-us-card fade-in">
                        <div className="contact-image-icon">
                            <img src="/images/cardIcons/phone_icon.png" alt="mail-image" className="contact-image-phone" />
                        </div>
                        <p>Whatsapp us: <a href="tel:+919063485299" className="contact-anchor">+91 90634 85299</a></p>
                    </div>
                    
                </div>
            </div>
            <div className="contact-main-container appear-effect">
                <div className="contact-us-main-heading appear-effect">
                    <h1 className="contact-us">Message Us</h1>
                </div>
                <p className="contact-us-main-para appear-effect">Drop a <span className="contact-us-span">Message us</span></p>
                <p className="contact-us-para appear-effect">
                    Fill up form below, our team will get back soon
                </p>
                <form className="contact-us-card-container" onSubmit="">
                    <input type="text" className="contact-us-input appear-effect" placeholder="Name *"/>
                    <input type="text" className="contact-us-input appear-effect" placeholder="Email *"/>
                    <input type="text" className="contact-us-input appear-effect" placeholder="Company Name"/>
                    <input type="text" className="contact-us-input appear-effect" placeholder="Country"/>
                    <input type="text" className="contact-us-input appear-effect" placeholder="Phone"/>
                    <input type="text" className="contact-us-input appear-effect" placeholder="Website"/>
                    <div className="contact-comment-container">
                        <textarea placeholder="Comment" className="contact-comment appear-effect"/>
                    </div>
                    <div className="contact-button-container appear-effect">
                        <button type="submit" className="contact-us-button">Submit</button>
                    </div>
                </form>
            </div>
            {/* <div className="google-map appear-effect">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d889.153756048639!2d78.60494061851293!3d17.426907332123907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9f005ede3dc9%3A0x2b324d0a6b05f598!2sPS%20Home!5e0!3m2!1sen!2sin!4v1741609388628!5m2!1sen!2sin"
                        title="Google Maps Location"
                        allowfullscreen=""
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div> */}



            <div className="contact-us-footer fade-in">
                <FooterPage />
            </div>
        </div>
    );
};

export default Contact;
