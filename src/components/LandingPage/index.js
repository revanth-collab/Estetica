import NavBar from "../NavBar"
import OurTeam from "../OurTeam"
import Rotate3D from "../Rotate3D"
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
    </div>
)

export default LandingPage