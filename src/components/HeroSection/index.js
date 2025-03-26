import { FaGooglePlay, FaApple } from "react-icons/fa";
import "./index.css";

const HeroSection = () => {
  return (
    <div className="hero-section-wrapper">
      {/* Content Section */}
      <div className="hero-section-content-container">
        <div className="gold-text-container">
          <h1 className="hero-content-heading" data-heading="Estetica">Estetica</h1>
        </div>
        <p className="hero-content-para">
          Your all-in-one appointment and service booking app tailored for beauty and wellness
        </p>
        <p className="hero-content-sub-para">
          With Estetica, booking a salon, spa, or clinic appointment has never been easier.
        </p>

        {/* User Images */}
        <div className="hero-user-container">
          <div className="hero-icon-container">
            <img src="/images/HeroImages/mini-circle-1.jpg" alt="user-image" className="hero-image hero-image-1" />
            <img src="/images/HeroImages/mini-circle-2.jpeg" alt="user-image" className="hero-image hero-image-2" />
            <img src="/images/HeroImages/mini-circle-3.jpg" alt="user-image" className="hero-image hero-image-3" />
            <img src="/images/HeroImages/mini-circle-4.jpg" alt="user-image" className="hero-image hero-image-4" />
          </div>
          <p className="hero-content-sub-para">12M+ active users around the world.</p>
        </div>

        {/* App Store Cards */}
        <div className="hero-app-card-container">
        <a href="https://play.google.com/store/apps/details?id=com.esteticaapp.user&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="hero-section-anchor-card-link">
            <div className="hero-app-card">
              <FaGooglePlay className="hero-app-icon" />
              <div className="hero-app-sub-card">
                <p className="hero-app-para">GET IT NOW</p>
                <h1 className="hero-app-content">Google Play</h1>
              </div>
            </div>
          </a>

          <a href="https://play.google.com/store/apps/details?id=com.esteticaapp.user&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="hero-section-anchor-card-link">
            <div className="hero-app-card">
              <FaApple className="hero-app-icon" />
              <div className="hero-app-sub-card">
                <p className="hero-app-para">Download on the</p>
                <h1 className="hero-app-content">Apple Store</h1>
              </div>
            </div>
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="hero-section-image-container">
        <div className="hero-section-side-image hero-side-image1">
          <img src="/images/HeroImages/hero-main-11.jpg" alt="hero-side-image" />
        </div>
        <div className="hero-section-side-image hero-side-image2">
          <img src="/images/HeroImages/hero-main-2.avif" alt="hero-side-image" />
        </div>
        <div className="hero-section-side-image hero-side-image3">
          <img src="/images/barber-5194406_1280.jpg" alt="hero-side-image" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
