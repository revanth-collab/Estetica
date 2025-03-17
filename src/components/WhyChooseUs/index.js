import { useEffect } from "react";
import { CiSettings } from "react-icons/ci";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import ScrollReveal from "scrollreveal"

import "./index.css"

const WhyChooseUs = () =>{

    useEffect (()=>{
        ScrollReveal().reveal(".why-choose-us-container",{
            distance:"50px",
            origin:"bottom",
            duration: 1200, 
            easing: "ease-in-out",
            reset:true,
            once: false, 
            viewFactor: 0.3
        });
        ScrollReveal().reveal(".why-choose-us-image-container",{
            distance:"50px",
            origin:"bottom",
            duration: 1200, 
            easing: "ease-in-out",
            reset:true,
            once: false, 
            viewFactor: 0.3
        });
        ScrollReveal().reveal(".why-choose-top",{
            distance:"50px",
            origin:"bottom",
            duration: 1200, 
            easing: "ease-in-out",
            delay:25,
            reset:true,
            once: false, 
            viewFactor: 0.3
        });
        ScrollReveal().reveal(".why-choose-us-heading",{
            distance:"50px",
            origin:"bottom",
            duration: 1200, 
            easing: "ease-in-out",
            delay:50,
            reset:true,
            once: false, 
            viewFactor: 0.3
        });
        ScrollReveal().reveal(".why-choose-us-para",{
            distance:"50px",
            origin:"left",
            duration: 1200, 
            easing: "ease-in-out",
            reset:true,
            once: false, 
            viewFactor: 0.3
        });
        ScrollReveal().reveal(".why-choose-us-list",{
            distance:"50px",
            origin:"left",
            duration: 1200, 
            easing: "ease-in-out",
            reset:true,
            once: false, 
            viewFactor: 0.3
        });
        ScrollReveal().reveal(".why-choose-us-image-container img ",{
            distance:"50px",
            origin:"right",
            duration:1200,
            easing:"ease-in-out",
            delay:100,
            reset:true,
            once: false, 
            viewFactor: 0.3
        })
    },[])

    return (
        <div className="why-choose-us-wrapper">
            <div className="why-choose-us-container">
                <div className="why-choose-top">
                    <CiSettings className="why-icon"/>
                    <p className="why-choose-us-title">Why Choose Us</p>
                </div>
                <h1 className="why-choose-us-heading">Why Choose <span className="why-choose-us-span">Estetica</span></h1>
                <p className="why-choose-us-para">Choose Estetica and embrace a reliable, user-friendly platform that makes it easy to prioritize your wellness and beauty goals.</p>
                <ul className="why-choose-us-orderlist">
                    <li className="why-choose-us-list">
                        <IoIosCheckmarkCircleOutline className="why-mark-icon"/>
                        <p className="why-choose-us-bold">Enhanced Business Growth: <span className="why-choose-us-para">Our platform provides a range of tools to help you expand your client base, from targeted marketing to customer relationship management (CRM) features.</span></p>
                    </li>    
                    <li className="why-choose-us-list">
                        <IoIosCheckmarkCircleOutline className="why-mark-icon"/>
                        <p className="why-choose-us-bold">Premium Exposure Options: <span className="why-choose-us-para">Enjoy advanced promotional tools like featured listings, banners, and campaigns to boost your visibility and attract new clients.</span></p>
                    </li> 
                    <li className="why-choose-us-list">
                        <IoIosCheckmarkCircleOutline className="why-mark-icon"/>
                        <p className="why-choose-us-bold">Detailed Analytics and Insights: <span className="why-choose-us-para">Get in-depth performance data to understand booking trends, client demographics, and overall service success, empowering you to make informed business decisions.</span></p>
                    </li> 
                    <li className="why-choose-us-list">
                        <IoIosCheckmarkCircleOutline className="why-mark-icon"/>
                        <p className="why-choose-us-bold">Dedicated Provider Support: <span className="why-choose-us-para">Our provider support team is here to help you every step of the way, ensuring you make the most of what Estetica offers.</span></p>
                    </li> 
                </ul>
            </div>
            <div className="why-choose-us-image-container">
                <img src="https://www.esteticanow.com/images/est_new/new_y_choose.png" alt="Why choose us" />
            </div>
        </div>
    )
}
export default WhyChooseUs