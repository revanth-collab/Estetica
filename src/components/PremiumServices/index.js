import {useEffect} from "react"
import ScrollReveal from "scrollreveal"
import { MdOutlineWatchLater } from "react-icons/md";
import { LuCalendarRange } from "react-icons/lu";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";


import "./index.css"

const PremiumServices = () => {
    useEffect(() => {
        ScrollReveal().reveal(".premium-services-heading", {
            distance: "50px",
            duration: 1200,
            delay: 10,
            easing: "ease-in-out",
            reset: true, 
            once: false, 
            viewFactor: 0.3 
        });
    
        ScrollReveal().reveal(".premium-top, .premium-heading, .premium-para, .premiun-list, .premium-services-image-container, .premium-services-image, .card-image-lr", {
            distance: "50px",
            duration: 1200,
            delay: 25,
            origin: "bottom",
            easing: "ease-in-out",
            reset: true,  
            once: false, 
            viewFactor: 0.3
        });
    
    }, []);
    
    

    return (<div className="premium-services-wrapper">
        <h1 className="premium-services-heading">Premium Services <span className="premium-services-span">Tailored For You</span></h1>
        <div className="premium-services-card card-wb">
            <div className="premium-services-content-container">
                <div className="premium-top">
                    <LuCalendarRange className="why-icon"/>
                    <p className="why-choose-us-title">Wellness and Beauty</p>
                </div>
                <h1 className="premium-heading">Discover exclusive services designed to <span className="why-choose-us-span">elevate your wellness and beauty journey</span></h1>
                <p className="premium-para color-wb ">Our premium offerings provide access to top-rated aesthetic clinics, salons, and spas at your fingertips, with added benefits to make each appointment a seamless experience.</p>
                <ul className="premium-orderlist color-wb">
                    <li className="premiun-list">
                        <MdOutlineWatchLater className="why-mark-icon color-wb "/>
                        <div className="premium-sub-list">
                            <p className="premium-list-para premium-bold">Priority Booking</p>
                            <p className="premium-list-para">Secure appointments with ease, even during peak times.</p>
                        </div>
                    </li>
                    <li className="premiun-list">
                        <MdOutlineWatchLater className="why-mark-icon color-wb "/>
                        <div className="premium-sub-list">
                            <p className="premium-list-para premium-bold">Exclusive Offers</p>
                            <p className="premium-list-para">Unlock special discounts and packages curated just for you.</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="premium-services-image-container card-image-wb">
                <img src="	https://www.esteticanow.com/images/est_new/service.png" className="premium-services-image" alt="Wellness and Beauty"/>
                <img src="https://www.esteticanow.com/images/bigstar_dark.png" className="top-star" alt="star"/>
                <img src="https://www.esteticanow.com/images/bigstar_dark.png" className="bottom-star" alt="star"/>
                <img src="https://www.esteticanow.com/images/bigstar_dark.png" className="left-star" alt="star"/>
                <img src="https://www.esteticanow.com/images/bigstar_dark.png" className="right-star" alt="star"/>


            </div>
        </div>
        <div className="premium-services-card card-gb">
            <div className="premium-services-image-container card-image-gb">
                <img src="https://www.esteticanow.com/images/est_new/new_est_bss_1.png" className="premium-services-image" alt="Wellness and Beauty"/>
                <img src="https://www.esteticanow.com/images/bigstar_dark.png" className="top-star" alt="star"/>
                <img src="https://www.esteticanow.com/images/bigstar_dark.png" className="bottom-star" alt="star"/>
                <img src="https://www.esteticanow.com/images/bigstar_dark.png" className="left-star" alt="star"/>
                <img src="https://www.esteticanow.com/images/bigstar_dark.png" className="right-star" alt="star"/>
            </div>
            <div className="premium-services-content-container">
                <div className="premium-top">
                    <MdOutlineWatchLater className="why-icon"/>
                    <p className="why-choose-us-title">Grow Your Business</p>
                </div>
                <h1 className="premium-heading">Maximize your visibility with <span className="why-choose-us-span">Estetica’s premium provider services</span></h1>
                <p className="premium-para color-gb">Our platform offers advanced tools and exclusive features designed to enhance your clinic, spa, or salon’s reach, increase bookings, and help you stand out in the beauty and wellness industry.</p>
                <ul className="premium-orderlist color-gb">
                    <li className="premiun-list">
                        <IoIosCheckmarkCircleOutline className="why-mark-icon color-gb"/>
                        <p className="premium-list-para">Enhanced Profile Visibility: Showcase your services at the top, making it easier for users to discover and book with you.</p>
                    </li>
                    <li className="premiun-list">
                        <IoIosCheckmarkCircleOutline className="why-mark-icon color-gb"/>
                        <p className="premium-list-para">Advanced Marketing Tools: Run targeted campaigns, display custom banners, and access promotional features to attract new clients.</p>
                    </li>
                    <li className="premiun-list">
                        <IoIosCheckmarkCircleOutline className="why-mark-icon color-gb"/>
                        <p className="premium-list-para">Detailed Performance Insights: Gain access to comprehensive analytics to monitor booking trends, client demographics, and service performance.</p>
                    </li>
                </ul>
            </div>
        </div>
        <div className="premium-services-card card-lr size-lr">
            <div className="premium-services-content-container">
                <div className="premium-top">
                    <LuCalendarRange className="why-icon"/>
                    <p className="why-choose-us-title">Loyalty Rewards</p>
                </div>
                <h1 className="premium-heading color-lr">Earn and redeem rewards as <span className="why-choose-us-span">you enjoy your favorite services</span></h1>
                <p className="premium-para">Upgrade to premium and experience the best Estetica has to offer.</p>
                <ul className="premium-orderlist">
                    <li className="premiun-list">
                        <IoIosCheckmarkCircleOutline className="why-mark-icon"/>
                        <p className="premium-list-para">Client Management (CRM) Support: Manage customer relationships seamlessly, with tools to track interactions, follow up on feedback, and foster loyalty.</p>
                    </li>
                </ul>
            </div>
            <div className="premium-services-image-container card-image-lr">
                <img src="	https://www.esteticanow.com/images/est_new/wallet.png" className="premium-services-image" alt="Wellness and Beauty"/>
                <img src="https://www.esteticanow.com/images/bigstar_dark.png" className="top-star" alt="star"/>
                <img src="https://www.esteticanow.com/images/bigstar_dark.png" className="bottom-star" alt="star"/>
                <img src="https://www.esteticanow.com/images/bigstar_dark.png" className="left-star" alt="star"/>
                <img src="https://www.esteticanow.com/images/bigstar_dark.png" className="right-star" alt="star"/>


            </div>
        </div>
    </div>)
}

export default PremiumServices