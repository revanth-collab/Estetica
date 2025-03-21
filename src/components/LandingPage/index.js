import NavBar from "../NavBar";
import OurTeam from "../OurTeam";
import Rotate3D from "../Rotate3D";
import FooterPage from "../FooterPage";
import ProviderOurValue from "../ProviderOurValue";
import FeaturesOfUser from "../FeaturesOfUser";
import FeaturesForProvider from "../FeaturesForProvider";
import CustomerProvider from "../CustomerProvider";
import AboutUsForUser from "../AboutUsForUser";
import WhyChooseUs from "../WhyChooseUs";
import PremiumServices from "../PremiumServices";
import UserfriendlyInterface from "../UserfriendlyInterface";
import Reviews from "../Reviews";
import HeroSection from "../HeroSection";
import "./index.css";


const LandingPage = () => (
  <>
    <NavBar />
    <div className="landing-page">
      {/* <div className="rotate3d-wrapper">
        <Rotate3D />
      </div> */}
      <div className="herosection-wrapper">
        <HeroSection />
      </div>
      <div className="our-team-wrapper">
        <OurTeam />
      </div>
      <CustomerProvider />  
      <ProviderOurValue />
      <FeaturesOfUser />
      <AboutUsForUser />
      <FeaturesForProvider />
      <WhyChooseUs />
      <PremiumServices />
      <UserfriendlyInterface />
      <Reviews />
      <FooterPage />
    </div>
  </>
);

export default LandingPage;
