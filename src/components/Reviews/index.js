import { useEffect } from "react";
import { FaRegStar } from "react-icons/fa";
import ScrollReveal from "scrollreveal";

import "./index.css"

const Reviews = () => {

    useEffect(()=>{
        ScrollReveal().reveal(".reviews-top",{
            duration:1200,
            distance:"50px",
            delay:20,
            easing:"ease-in-out",
            reset:true,
            once: false, 
            viewFactor: 0.3
        })
        ScrollReveal().reveal(".review-main-heading",{
            duration:1200,
            distance:"50px",
            delay:20,
            easing:"ease-in-out",
            reset:true,
            once: false, 
            viewFactor: 0.3
        })
        ScrollReveal().reveal(".review-stars-container",{
            duration:1200,
            distance:"50px",
            delay:20,
            origin:"left",
            easing:"ease-in-out",
            reset:true,
            once: false, 
            viewFactor: 0.3
        })
        ScrollReveal().reveal(".review-card",{
            duration:1200,
            distance:"50px",
            delay:20,
            origin:"bottom",
            easing:"ease-in-out",
            reset:true,
            once: false, 
            viewFactor: 0.3
        })
        ScrollReveal().reveal(".review-card-top",{
            duration:1200,
            distance:"50px",
            delay:50,
            origin:"left",
            easing:"ease-in-out",
            reset:true,
            once: false, 
            viewFactor: 0.3
        })
        ScrollReveal().reveal(".review-card-bottom",{
            duration:1200,
            distance:"50px",
            delay:50,
            origin:"left",
            easing:"ease-in-out",
            reset:true,
            once: false, 
            viewFactor: 0.3
        })
    },[]) 

    return (
    <>
        <div className="reviews-wrapper">
            <div className="reviews-top">
                <h1 className="reviews-top-heading">Reviews</h1>
            </div>
            <h1 className="review-main-heading">check out some of the reviews we recieved from <span className="contact-us-span">our valuable customers and users</span></h1>
            <div className="review-stars-container">
                <FaRegStar className="review-star"/>
                <FaRegStar className="review-star"/>
                <FaRegStar className="review-star"/>
                <FaRegStar className="review-star"/>
                <FaRegStar className="review-star"/>
            </div>
            <div className="reviews-card-container">
                <div className="review-card">
                    <div className="review-card-top">
                        <div className="review-image-container">
                            <img src="https://www.esteticanow.com/images/est/r2.png" alt="profile"/>
                            <div className="review-name-content">
                                <h1 className="review-name-heading">Ruthvik</h1>
                                <p className="review-name-para">Estetica User</p>
                            </div>
                        </div>
                        <div className="review-stars-container">
                            <FaRegStar className="review-star"/>
                            <FaRegStar className="review-star"/>
                            <FaRegStar className="review-star"/>
                            <FaRegStar className="review-star"/>
                            <FaRegStar className="review-star"/>
                        </div>
                    </div>
                    <div className="review-card-bottom">
                        <p className="review-card-bottom-para">Estetica has completely changed the way I book my wellness appointments. It's so easy to explore different services, compare prices, and book in just a few clicks. The exclusive offers for premium users are fantastic too!</p>
                    </div>

                </div>
                <div className="review-card">
                    <div className="review-card-top">
                        <div className="review-image-container">
                            <img src="https://www.esteticanow.com/images/est/r1.png" alt="profile"/>
                            <div className="review-name-content">
                                <h1 className="review-name-heading">Dr. Latha Sri Guda</h1>
                                <p className="review-name-para">Cosmetologist</p>
                            </div>
                        </div>
                        <div className="review-stars-container">
                            <FaRegStar className="review-star"/>
                            <FaRegStar className="review-star"/>
                            <FaRegStar className="review-star"/>
                            <FaRegStar className="review-star"/>
                            <FaRegStar className="review-star"/>
                        </div>
                    </div>
                    <div className="review-card-bottom">
                        <p className="review-card-bottom-para">As a cosmetologist, I appreciate how Estetica bridges the gap between clinics and clients seamlessly. It’s refreshing to see a platform that values user experience while offering robust support for providers. Estetica has been instrumental in reaching more clients and building lasting connections.</p>
                    </div>

                </div>
                <div className="review-card">
                    <div className="review-card-top">
                        <div className="review-image-container">
                            <img src="https://www.esteticanow.com/images/est/r6.png" alt="profile"/>
                            <div className="review-name-content">
                                <h1 className="review-name-heading">Ramana</h1>
                                <p className="review-name-para">Estetica User</p>
                            </div>
                        </div>
                        <div className="review-stars-container">
                            <FaRegStar className="review-star"/>
                            <FaRegStar className="review-star"/>
                            <FaRegStar className="review-star"/>
                            <FaRegStar className="review-star"/>
                            <FaRegStar className="review-star"/>
                        </div>
                    </div>
                    <div className="review-card-bottom">
                        <p className="review-card-bottom-para">I've tried a few booking platforms, but Estetica stands out for its simplicity and efficiency. The priority booking feature for premium users is a game-changer, especially during peak times when appointments are hard to get!</p>
                    </div>

                </div>
                <div className="review-card">
                    <div className="review-card-top">
                        <div className="review-image-container">
                            <img src="	https://www.esteticanow.com/images/est/r7.png" alt="profile"/>
                            <div className="review-name-content">
                                <h1 className="review-name-heading">Saketh</h1>
                                <p className="review-name-para">Estetica User</p>
                            </div>
                        </div>
                        <div className="review-stars-container">
                            <FaRegStar className="review-star"/>
                            <FaRegStar className="review-star"/>
                            <FaRegStar className="review-star"/>
                            <FaRegStar className="review-star"/>
                            <FaRegStar className="review-star"/>
                        </div>
                    </div>
                    <div className="review-card-bottom">
                        <p className="review-card-bottom-para">Estetica has made my wellness and beauty routine so much easier! I love being able to see reviews, browse service details, and book everything without hassle. The platform's premium features also give that extra touch of convenience.</p>
                    </div>

                </div>
                <div className="review-card">
                    <div className="review-card-top">
                        <div className="review-image-container">
                            <img src="https://www.esteticanow.com/images/est/r8.png" alt="profile"/>
                            <div className="review-name-content">
                                <h1 className="review-name-heading">Nipun</h1>
                                <p className="review-name-para">Estetica Provider</p>
                            </div>
                        </div>
                        <div className="review-stars-container">
                            <FaRegStar className="review-star"/>
                            <FaRegStar className="review-star"/>
                            <FaRegStar className="review-star"/>
                            <FaRegStar className="review-star"/>
                            <FaRegStar className="review-star"/>
                        </div>
                    </div>
                    <div className="review-card-bottom">
                        <p className="review-card-bottom-para">The provider side of Estetica is just as impressive as the user experience. With tools to run targeted campaigns and performance insights, it’s incredibly effective for reaching and retaining clients. Estetica has become an essential part of growing my business.</p>
                    </div>

                </div>

            </div>
        </div>
    </>
)
}

export default Reviews