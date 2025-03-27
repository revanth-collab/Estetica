import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

import "./index.css";

const OurApp = () => (
    <div className="ourapp-wrapper">
        <div className="our-app-container">
            <div className="ourapp-top">
                <h1 className="ourapp-top-heading">Download</h1>
            </div>
            <h1 className="ourapp-heading">Our app is available for Android & iOS</h1>
            <p className="ourapp-para">With Estetica, booking a salon, spa, or clinic appointment has never been easier.</p>
            <div className="apps-container">
                <a href="https://play.google.com/store/apps/details?id=com.esteticaapp.user" target="_blank" rel="noopener noreferrer"  className="our-app-anchor">
                    <div className="app-store">
                        <FaGooglePlay className="our-app-icon"/>
                        <div className="app-store-sub-card">
                            <p className="app-store-heading">GET IT ON</p>
                            <p className="app-store-para">Google Play</p>
                        </div>
                    </div>
                </a>

                <a href="https://apps.apple.com/in/app/estetica/id6739260215" target="_blank" rel="noopener noreferrer"  className="our-app-anchor">
                    <div className="app-store">
                        <FaApple className="our-app-icon"/>
                        <div className="app-store-sub-card">
                            <p className="app-store-heading">Download on the</p>
                            <p className="app-store-para">App Store</p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
        <div className="our-app-image-container">
            <img src="/images/UserImages/home-page.png" alt="Our App-Image" />
        </div>
    </div>
)

export default OurApp;