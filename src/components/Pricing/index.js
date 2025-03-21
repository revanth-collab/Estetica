import {Link} from "react-router-dom"
import NavBar from "../NavBar"
import Footer from "../FooterPage"

import { MdEventNote } from "react-icons/md";



import "./index.css"

const Pricing = () => {
    return (
        <>
        <NavBar />
        <div className="pricing-wrapper">
            <div className="pricing-rate-container">
                <h1 className="pricing-rate-main-heading">Best Plans For Providers</h1>
                <div className="pricing-rate-card-container">
                    <div className="pricing-rate-card">
                        <h1 className="rate-card-heading">BASIC <span className="contact-us-span">PLAN</span></h1>
                        <p className="price-rate">₹699/month</p>
                        <hr className="pricing-horizontal"/>
                        <h4 className="rate-card-bold">Core Features:</h4>
                        <p className="rate-card-para">Access to the booking system</p>
                        <p className="rate-card-para">Customer insights</p>
                        <p className="rate-card-para">Revenue tracking</p>
                        <p className="rate-card-para">Home service management</p>
                        <Link to="/contact">
                            <button type="button" className="pricing-button">Contact Us</button>
                        </Link>
                    </div>

                    <div className="pricing-rate-card">
                        <h1 className="rate-card-heading">PREMIUM <span className="contact-us-span">PLAN</span></h1>
                        <p className="price-rate">₹1,499 - ₹1,999/month</p>
                        <hr className="pricing-horizontal"/>
                        <h4 className="rate-card-bold">Includes Basic Plan Features:</h4>
                        <p className="rate-card-para">Reels & Promotions</p>
                        <p className="rate-card-para">Run marketing campaigns</p>
                        <p className="rate-card-para">Display banners on secondary pages</p>
                        <p className="rate-card-para">Priority Listing</p>
                        <p className="rate-card-para">Front Page Banners</p>
                        <p className="rate-card-para">Advanced Campaigns</p>
                        <Link to="/contact">
                            <button type="button" className="pricing-button">Contact Us</button>
                        </Link>
                    </div>
                </div>
                <p className="pricing-span rate-card-para">Not sure what to choose? <Link to="/contact" className="us"><span className="price-rate">Contact us!</span></Link></p>
            </div>
        </div>
        <div className="pricing-opportunities pricing-parallax-bg">
            <h1 className="pricing-rate-main-heading">Enhanced Marketing & Business Growth Opportunities</h1>
            <div className="pricing-opportunities-card-container">
                <div className="pricing-opportunities-card">
                    <div className="pricing-oppurtunities-card-top">
                        <MdEventNote className="oppurtunities-icon"/>
                        <p className="oppurtunities-top-para">Feature Listing Add-On's</p>
                    </div>
                    <h1 className="oppurtunities-card-heading">Top Placement in <span className="contact-us-span">Search Results</span></h1>
                    <div className="oppurtunities-card-para-cont">
                        <p className="rate-card-para opp-para">Providers can pay an additional fee to have their business featured at the top of search results for a week or month.</p>
                    </div>
                    <p className="price-rate opp-bold">Pricing: <span className="price-rate card-rate-color">₹500 - ₹1,000 per week</span></p>
                </div>
                <div className="pricing-opportunities-card">
                    <div className="pricing-oppurtunities-card-top">
                        <MdEventNote className="oppurtunities-icon"/>
                        <p className="oppurtunities-top-para">Banner Placement</p>
                    </div>
                    <h1 className="oppurtunities-card-heading">Additional <span className="contact-us-span">Banners</span></h1>
                    <div className="oppurtunities-card-para-cont">
                        <p className="rate-card-para opp-para">Providers can place additional banners on the app’s homepage, service category pages, or search results pages.</p>
                    </div>
                    <p className="price-rate opp-bold">Pricing: <span className="price-rate card-rate-color"> ₹1,000 - ₹2,000 per month</span></p>
                </div>
                <div className="pricing-opportunities-card">
                    <div className="pricing-oppurtunities-card-top">
                        <MdEventNote className="oppurtunities-icon"/>
                        <p className="oppurtunities-top-para">Reels & Video Marketing</p>
                    </div>
                    <h1 className="oppurtunities-card-heading">Promoted <span className="contact-us-span">Reels</span></h1>
                    <div className="oppurtunities-card-para-cont">
                        <p className="rate-card-para opp-para">Charge providers to promote their reels as part of targeted marketing campaigns within the app.</p>
                    </div>
                    <p className="price-rate opp-bold">Pricing: <span className="price-rate card-rate-color">₹300 - ₹500 per promoted reel</span></p>
                </div>
                <div className="pricing-opportunities-card">
                    <div className="pricing-oppurtunities-card-top">
                        <MdEventNote className="oppurtunities-icon"/>
                        <p className="oppurtunities-top-para">Enhanced Marketing Campaigns</p>
                    </div>
                    <h1 className="oppurtunities-card-heading">Coupon & <span className="contact-us-span">Discount Campaigns</span></h1>
                    <div className="oppurtunities-card-para-cont">
                        <p className="rate-card-para opp-para">Providers can pay for advanced targeting features in their campaigns (e.g., age, location, gender).</p>
                    </div>
                    <p className="price-rate opp-bold">Pricing: <span className="price-rate card-rate-color">₹500 - ₹1,500 per campaign</span></p>
                </div>
                <div className="pricing-opportunities-card">
                    <div className="pricing-oppurtunities-card-top">
                        <MdEventNote className="oppurtunities-icon"/>
                        <p className="oppurtunities-top-para"> Home Service Employee Management</p>
                    </div>
                    <h1 className="oppurtunities-card-heading">Additional <span className="contact-us-span">Employee Management</span></h1>
                    <div className="oppurtunities-card-para-cont">
                        <p className="rate-card-para opp-para">Manage additional employees for home services in higher-tier plans. Includes up to 5 employees in the basic plan, with options to add more.</p>
                    </div>
                    <p className="price-rate opp-bold">Pricing: <span className="price-rate card-rate-color">₹50 - ₹100 per additional employee per month</span></p>
                </div>
                <div className="pricing-opportunities-card">
                    <div className="pricing-oppurtunities-card-top">
                        <MdEventNote className="oppurtunities-icon"/>
                        <p className="oppurtunities-top-para">Commission on Bookings</p>
                    </div>
                    <h1 className="oppurtunities-card-heading">Optional <span className="contact-us-span">Booking Fees</span></h1>
                    <div className="oppurtunities-card-para-cont">
                        <p className="rate-card-para opp-para">Charge a small commission per booking (2-5%) as an alternative to subscription fees.</p>
                    </div>
                    {/* <p className="price-rate opp-bold">Pricing: <span className="price-rate card-rate-color">₹500 - ₹1,000 per week</span></p> */}
                </div>
                <div className="pricing-opportunities-card">
                    <div className="pricing-oppurtunities-card-top">
                        <MdEventNote className="oppurtunities-icon"/>
                        <p className="oppurtunities-top-para">Training and Support Add-Ons</p>
                    </div>
                    <h1 className="oppurtunities-card-heading">Premium <span className="contact-us-span">Training & Support</span></h1>
                    <div className="oppurtunities-card-para-cont">
                        <p className="rate-card-para opp-para">Offer sessions for providers needing assistance in optimizing their business on Estetica.</p>
                    </div>
                    <p className="price-rate opp-bold">Pricing: <span className="price-rate card-rate-color">₹500 - ₹1,000 per session</span></p>
                </div>
                <div className="pricing-opportunities-card">
                    <div className="pricing-oppurtunities-card-top">
                        <MdEventNote className="oppurtunities-icon"/>
                        <p className="oppurtunities-top-para">Insights & Analytics</p>
                    </div>
                    <h1 className="oppurtunities-card-heading">Advanced <span className="contact-us-span">Analytics</span></h1>
                    <div className="oppurtunities-card-para-cont">
                        <p className="rate-card-para opp-para">Gain access to in-depth analytics, including customer behavior, peak times, and detailed booking trends.</p>
                    </div>
                    <p className="price-rate opp-bold">Pricing: <span className="price-rate card-rate-color">₹500 - ₹1,000 per month</span></p>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default Pricing