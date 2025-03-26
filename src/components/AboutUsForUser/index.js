import { useEffect } from "react";
import "./index.css";
import ScrollReveal from "scrollreveal";

const AboutUsForUser = () => {
    useEffect(() => {
        // ScrollReveal Animation
        ScrollReveal().reveal(".about-us-for-user-glass", { 
            duration: 1200, 
            origin: "bottom", 
            distance: "50px",
            easing: "ease-in-out",
            reset: true,
            once: false, 
            viewFactor: 0.3
        });

        ScrollReveal().reveal(".about-us-for-user-heading",{
            duration:1200,
            origin:"bottom",
            distance:"50px",
            easing:"ease",
            reset:true,
            once: false, 
            viewFactor: 0.3
        })

        ScrollReveal().reveal(".about-us-count", { 
            duration: 1200, 
            origin: "left", 
            distance: "30px", 
            delay: 200,
            easing: "ease-in-out",
            reset: true,
            once: false, 
            viewFactor: 0.3
        });

        ScrollReveal().reveal(".about-us-for-user-content", { 
            duration: 1500, 
            origin: "right", 
            distance: "50px", 
            delay: 300,
            easing: "ease-in-out",
            reset: true,
            once: false, 
            viewFactor: 0.3
        });

        // Counter Animation with Intersection Observer
        const counters = document.querySelectorAll(".num");

        const startCounter = (counter) => {
            let startValue = 0;
            let endValue = parseInt(counter.getAttribute("data-val"));
            let duration = Math.floor(2000 / endValue);
            let countSpan = counter.querySelector("span"); // Get the span inside p.num
            let unit = countSpan ? countSpan.textContent : ""; // Get M+ or +
            
            let countInterval = setInterval(() => {
                startValue += 1;
                counter.innerHTML = `${startValue}<span>${unit}</span>`; // Keep span intact

                if (startValue >= endValue) clearInterval(countInterval);
            }, duration);
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    startCounter(entry.target);
                    observer.unobserve(entry.target); // Stop observing after animation starts
                }
            });
        }, { threshold: 0.5 }); // Trigger when 50% of the element is visible

        counters.forEach(counter => observer.observe(counter));

    }, []);

    return (
        <div className="about-us-for-user-container">
            <h1 className="about-us-for-user-heading">About Us For <span className="about-us-for-user-span">Users</span></h1>
            <div className="about-us-for-user-glass">
                {/* <div className="about-us-count-container">
                    <div className="about-us-count count-download">
                        <p className="about-us-count-para num" data-val="17">0<span>M+</span></p>
                        <p className="about-us-count-para">Download</p>
                    </div>
                    <div className="about-us-count count-reviews">
                        <p className="about-us-count-para num" data-val="2300">0<span>+</span></p>
                        <p className="about-us-count-para">Reviews</p>
                    </div>
                    <div className="about-us-count count-countries">
                        <p className="about-us-count-para num" data-val="150">0<span>+</span></p>
                        <p className="about-us-count-para">Countries</p>
                    </div>
                    <div className="about-us-count count-followers">
                        <p className="about-us-count-para num" data-val="8">0<span>M+</span></p>
                        <p className="about-us-count-para">Followers</p>
                    </div>
                </div> */}
                <div className="about-us-for-user-image">
                    <img src="/images/UserImages/home-page.png" alt="UserScreen" />
                </div>
                <div className="aligning-container">
                    <div className="about-us-for-user-content-container">
                        <p className="about-us-for-user-content">Estetica transforms your beauty and wellness journey into an effortless, enjoyable experience.</p>
                        <p className="about-us-for-user-content">We’ve curated a vast selection of trusted salons, clinics, and spas, all accessible in one convenient platform—so you can easily explore, compare, and book the services that suit you best.</p>
                        <p className="about-us-for-user-content">Discover exclusive offers, browse authentic reviews, and gain insights from expert recommendations, all tailored to help you make the most of your self-care routine.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsForUser;
