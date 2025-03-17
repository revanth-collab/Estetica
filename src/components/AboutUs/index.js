import NavBar from "../NavBar"
import FooterPage from "../FooterPage"
import AboutUsScroll from "../AboutUsScroll"

import "./index.css"

const AboutUs = () => (
    <div className="about-us-wrapper">
    <NavBar />
    <div className="about-us-main-section">
        <AboutUsScroll />
    </div>
    <FooterPage />
    </div>
)

export default AboutUs