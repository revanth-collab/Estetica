import NavBar from "../NavBar";
import OurTeam from "../OurTeam";
import Rotate3D from "../Rotate3D";
import AboutUs from "../AboutUs";
import FooterPage from "../FooterPage";
import "./index.css";

const LandingPage = () => (
  <>
    <NavBar />
    <div className="landing-page">
      <div className="rotate3d-wrapper">
        <Rotate3D />
      </div>
      <div className="our-team-wrapper">
        <OurTeam />
      </div>
      <AboutUs />
      <FooterPage />
    </div>
  </>
);

export default LandingPage;
