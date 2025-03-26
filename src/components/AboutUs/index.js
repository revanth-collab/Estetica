import NavBar from "../NavBar"
import AboutUsScroll from "../AboutUsScroll"
import { useEffect, useState } from "react"
import ScrollReveal from "scrollreveal"
import FooterPage from "../FooterPage"
import OurApp from "../OurApp"
import { FaPlus, FaMinus } from "react-icons/fa6";

import "./index.css"

const AboutUs = () => {

    const [activeFAQ, setActiveFAQ] = useState("general")
    const [activeSubFAQ, setActiveSubFAQ] = useState("1")

    const query = [
        { id: "general", title: "How app will useful for my business?", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer.", index: "1" },
        { id: "general", title: "Is there any hidden cost?", content: "Some placeholder content for the second accordion panel. This panel is hidden by default.", index: "2" },
        { id: "general", title: "What support will I get in premium package?", content: "Some placeholder content for the second accordion panel. This panel is hidden by default.", index: "3" },
        { id: "general", title: "What is the process to get refund?", content: "And lastly, the placeholder content for the third and final accordion panel. This panel is hidden by default.", index: "4" },
        { id: "general", title: "Can I get updates for free?", content: "And lastly, the placeholder content for the third and final accordion panel. This panel is hidden by default.", index: "5" },
        { id: "pricing", title: "How app will useful for my business?", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer.", index: "1" },
        { id: "pricing", title: "Ever since the when an unknown printer?", content: "And lastly, the placeholder content for the third and final accordion panel. This panel is hidden by default.", index: "2" },
        { id: "account", title: "How app will useful for my business?", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer.", index: "1" },
        { id: "account", title: "How app will useful for my business?", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer.", index: "2" },
        { id: "returnpolicy", title: "How app will useful for my business?", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer.", index: "1" },
        { id: "returnpolicy", title: "This app will useful for my business?", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer.", index: "2" },
        { id: "technicalsupport", title: "Support app will useful for my business?", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer.", index: "1" },
        { id: "technicalsupport", title: "This app will useful for my business?", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer.", index: "2" }
    ]

    const faqheadingcard = (event) => {
        const faqValue = event.currentTarget.getAttribute("data-faq")
        setActiveFAQ(faqValue)
        setActiveSubFAQ("1")
    }

    const faqsubcontent = (event) => {
        const faqContent = event.currentTarget.getAttribute("data-faq")
        setActiveSubFAQ(faqContent === activeSubFAQ ? "" : faqContent)
    }

    useEffect(() => {
        ScrollReveal().reveal(".about-section-heading, .about-us-top-para, .sub-para, .our-para, .center, .faq-query, .about-our-right, .user-side-top, .contact-us-main-para, .contact-us-main-para", {
            duration: 1200,
            distance: "50px",
            delay: 100,
            easing: "ease-in-out",
            reset: true,
            viewFactor: 0.3,
        })
    }, [])

    return (
        <>
            <NavBar />
            
            <div className="about-section-wrapper parallax-bg">
                <div className="about-section-top fade-in">
                    <h1 className="about-section-heading">About <span className="about-us-span">Us</span></h1>
                    {/* <p className="about-us-top-para">Estetica transforms your beauty and wellness journey into an effortless, enjoyable experience.</p> */}
                    {/* <p className="sub-para">We’ve curated a vast selection of trusted salons, clinics, and spas, all accessible in one convenient platform.</p> */}
                    <p className="about-us-top-para">Estetica transforms your beauty and wellness journey into an effortless, enjoyable experience<span><img src="/images/AllImages/about-image-1.jpg" alt="min-image" className="micro-image" /></span> . We’ve curated a vast selection of trusted salons, clinics, and spas, all accessible in one convenient platform.</p>
                    {/* <p className="sub-para">Our commitment to trust, convenience, and quality guarantees that each booking meets the highest standards. Estetica equips you with complete, transparent information on providers, prices, and availability, empowering you to make choices that align with your unique needs and lifestyle.</p> */}
                    <p className="sub-para">Whether you're looking to refresh your look, unwind with a spa day <span><img src="/images/HeroImages/hero-main-1.avif" alt="min-image" className="micro-image" /></span> , or indulge in advanced skincare treatments. Estetica connects you with top-rated professionals and brings the world of beauty and wellness directly to your fingertips.</p>
                </div>

                <AboutUsScroll />

                <div className="about-our-mission">
                    <div className="about-our-right glow-hover">
                        <h1 className="about-our-heading">Our Mission</h1>
                        <p className="about-span">Empowering Beauty & Wellness Professionals</p>
                    </div>
                    <div className="about-our-content-container">
                        <p className="our-para">We connect beauty and wellness providers with clients seeking quality services.</p>
                        <p className="our-para">Our platform enhances visibility, streamlines operations, and attracts new customers.</p>
                    </div>
                </div>

                <div className="user-side">
                    <div className="user-side-top">
                        <h1 className="user-side-to-heading">User Side</h1>
                    </div>
                    <h1 className="contact-us-main-para">Our values <span className="contact-us-span">driven by relations</span></h1>
                    <div className="provider-scroll-container">
                    <div className="provider-scroll-track">
                        {[...Array(2)].map((_, i) => (
                            <div className="provider-card-container" key={i}>
                                <div className="provider-card">
                                    <div className="provider-content-container">
                                        <div className="provider-image-icon">
                                            <img src="/images/cardIcons/ourvalue_3.png" alt="provider-image" className="provider-image" />
                                        </div>
                                        <div className="provider-sub-content">
                                            <h1 className="provider-content-heading">User Convenience</h1>
                                            <p className="provider-content-para">
                                                Your convenience and satisfaction are at the heart of everything we do, making each step in your wellness journey effortless.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="provider-card">
                                    <div className="provider-content-container">
                                        <div className="provider-image-icon">
                                            <img src="/images/cardIcons/ourvalue_1.png" alt="provider-image" className="provider-image" />
                                        </div>
                                        <div className="provider-sub-content">
                                            <h1 className="provider-content-heading">Exceptional Service</h1>
                                            <p className="provider-content-para">
                                            We strive to provide a platform that users can rely on for quality, reliability, and exceptional service.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="provider-card">
                                    <div className="provider-content-container">
                                        <div className="provider-image-icon">
                                            <img src="/images/cardIcons/ourvalue_1.png" alt="provider-image" className="provider-image" />
                                        </div>
                                        <div className="provider-sub-content">
                                            <h1 className="provider-content-heading">Building Relationships</h1>
                                            <p className="provider-content-para">
                                                We prioritize building relationships that foster trust and satisfaction, ensuring a smooth booking
                                                experience.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="provider-card">
                                    <div className="provider-content-container">
                                        <div className="provider-image-icon">
                                            <img src="/images/cardIcons/ourvalue_2.png" alt="provider-image" className="provider-image" />
                                        </div>
                                        <div className="provider-sub-content">
                                            <h1 className="provider-content-heading">Commitment</h1>
                                            <p className="provider-content-para">
                                                At Estetica, we’re driven by our commitment to connect users with trusted providers in the beauty and wellness industry.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                </div>

                <div className="about-team">
                    <h1 className="contact-us-main-para">About Our <span className="contact-us-span">Team</span></h1>
                    <p className="our-para center">The Estetica team is a passionate group of innovators, beauty and wellness enthusiasts, and technology experts committed to reshaping how clients and providers connect in the beauty industry. Our expertise spans app development, marketing, business operations, and customer experience, ensuring Estetica stays at the forefront of industry trends and technology.</p>
                    <p className="our-para center">Driven by our shared vision, we work collaboratively to deliver a seamless, user-friendly platform that empowers both clients and providers. We believe in the power of technology to create meaningful experiences, foster business growth, and make self-care accessible to all.</p>
                    <p className="our-para center">Every member of our team is dedicated to maintaining high standards of trust, quality, and innovation, ensuring that Estetica continuously evolves to meet the needs of our community. Join us on this journey as we create a world where self-care, wellness, and beauty are just a tap away.</p>
                </div>

                <div className="faq-section">
                    <div className="user-side-top">
                        <h1 className="user-side-to-heading">FAQs</h1>
                    </div>

                    <div className="faq-top-section">
                        {["general", "pricing", "account", "returnpolicy","technicalsupport"].map((category) => (
                            <div key={category} className={`faq-top-card ${activeFAQ === category ? "active" : ""}`} data-faq={category} onClick={faqheadingcard}>
                                <h1 className="faq-heading">{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
                            </div>
                        ))}
                    </div>

                    <div className="faq-query-container">
                        {query.filter(each => each.id === activeFAQ).map((each) => (
                            <div key={each.index} className="faq-query" data-faq={each.index} onClick={faqsubcontent}>
                                <div className="faq-sub-query">
                                    <h1 className="query-heading">{each.title}</h1>
                                    {activeSubFAQ === each.index ? <FaMinus className="plus-icon" /> : <FaPlus className="plus-icon" />}
                                </div>
                                <p className={`faq-hide ${activeSubFAQ === each.index ? "active" : ""}`}>{each.content}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <OurApp />
                <FooterPage />
            </div>
        </>
    )
}

export default AboutUs
