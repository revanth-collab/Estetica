import { useEffect } from "react";
import ScrollReveal from "scrollreveal"
import "./index.css";

const CustomerProvider = () => {
    useEffect(() => {
        ScrollReveal().reveal(".customerprovider-heading",{
            duration:1200,
            distance:"50px",
            delay:30,
            easing:"ease-in-out",
            reset:true,
            once:false,
            viewFactor: 0.3 
        })
        ScrollReveal().reveal(".customerprovider-para, .customer-provider-card",{
            duration:1200,
            distance:"50px",
            delay:35,
            easing:"ease-in-out",
            reset:true,
            once:false,
            viewFactor: 0.3 
        })
        ScrollReveal().reveal(".customer-provider-sub-card-container",{
            duration:1200,
            distance:"50px",
            delay:30,
            easing:"ease-in-out",
            reset:true,
            once:false,
            viewFactor: 0.3 
        })
        // const observer = new IntersectionObserver(
        //     (entries) => {
        //         entries.forEach((entry) => {
        //             if (entry.isIntersecting) {
        //                 entry.target.classList.add("in-view");
        //             } else {
        //                 entry.target.classList.remove("in-view");
        //             }
        //         });
        //     },
        //     { threshold: 0.5 }
        // );

        // const elements = document.querySelectorAll(".fade-in");
        // elements.forEach((el) => observer.observe(el));

        // return () => elements.forEach((el) => observer.unobserve(el));
    }, []);

    return (
        <div className="customerprovider-wrapper fade-in">
            <h1 className="customerprovider-heading fade-in">
                Welcome To <span className="customerprovider-span">Estetica</span>
            </h1>
            <p className="customerprovider-para fade-in">
                Your all-in-one appointment and service booking app tailored for the beauty and wellness industry. With Estetica, booking a salon, spa, or clinic appointment has never been easier.
            </p>
            <div className="customer-provider-card-container">
                <div className="customer-provider-sub-card-container">
                    <div className="customer-provider-card">
                        <img src="https://www.esteticanow.com/images/est_new/new_est_cat_1.png" className="customer-provider-img" alt="Customer-Image"/>
                        <div className="customer-provider-sub-card">
                            <h1 className="customer-provider-card-heading">For <span className="customerprovider-span">Customers</span>:</h1>
                            <p className="customer-provider-card-para">Browse top-rated providers, explore exclusive services, and book appointments with a few simple taps. Estetica helps you find the perfect match for your wellness and aesthetic needs, making self-care more accessible than ever.</p>
                        </div>
                    </div>
                </div>
                <div className="customer-provider-sub-card-container">
                    <div className="customer-provider-card">
                        <img src="https://www.esteticanow.com/images/est_new/new_est_bss_1.png" className="customer-provider-img" alt="Customer-Image"/>
                        <div className="customer-provider-sub-card">
                            <h1 className="customer-provider-card-heading">For <span className="customerprovider-span">Service Providers</span>:</h1>
                            <p className="customer-provider-card-para">Estetica is designed to help you grow your brand, showcase services, and connect with a wide audience. Run promotions, track your business’s monthly performance, and manage bookings efficiently—all from one intuitive platform.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerProvider;
