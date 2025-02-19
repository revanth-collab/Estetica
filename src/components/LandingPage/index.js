import NavBar from "../NavBar"
import OurTeam from "../OurTeam"
import Rotate3D from "../Rotate3D"
import FooterPage from "../FooterPage"
import "./index.css"

const LandingPage =() => (
    <div className="landing-page">
        <NavBar />
        <div className="rotate3d-wrapper">
            <Rotate3D />
        </div>
        <div className="our-team-wrapper">
            <OurTeam />
        </div>
        <FooterPage />
    </div>
)

export default LandingPage