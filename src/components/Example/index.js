// import "./index.css";

// const Example = () => (
//     <div className="example">
//         <div className="sub-example">
//             <div className="wavy-bg-container">
//                 <div className="ex-height"></div>
//                 <svg 
//                     viewBox="0 0 1440 320" 
//                     className="wavy-bg"
//                     preserveAspectRatio="none"
//                 >
//                     <path 
//                         fill="#9A5E26"
//                         fillOpacity="1" 
//                         d="M0,160L60,176C120,192,240,224,360,234.7C480,245,600,235,720,192C840,149,960,75,1080,69.3C1200,64,1320,128,1380,160L1440,192V0H0Z"
//                    />
//                 </svg>
//             </div>
//         </div>
//     </div>
// );

// export default Example;



// import "./index.css";

// const Example = () => (
//     <div className="example">
//         <div className="wavy-bg-container">
//             <div className="ex-height"></div>
//             <svg 
//                 viewBox="0 0 1440 320" 
//                 className="wavy-bg"
//                 preserveAspectRatio="none"
//             >

//                 <path 
//                     fill="#9A5E26"   
//                     fillOpacity="1" 
//                     d="M0,192L60,160C120,128,240,96,360,80C480,64,600,80,720,120C840,160,960,192,1080,208C1200,224,1320,208,1380,192L1440,176V0H0Z"
//                 />

                // {/* <path 
                //     fill="#9A5E26"   
                //     fillOpacity="1" 
                //     d="M0,192L60,170C120,130,240,100,360,90C480,80,600,100,720,140C840,180,960,200,1080,220C1200,240,1320,210,1380,180L1440,160V0H0Z"
                // /> */}

                // {/* <path 
                //     fill="#9A5E26"   
                //     fillOpacity="1" 
                //     d="M0,190L27,180C120,140,240,110,360,100C480,90,600,110,720,150C840,190,960,210,1080,230C1200,250,1320,220,1380,180L1440,140V0H0Z"
                // /> */}

                // {/* <path 
                //     fill="#9A5E26"   
                //     fillOpacity="1" 
                //     d="M0,200C120,160,240,120,360,100C480,90,600,110,720,150C840,190,960,210,1080,230C1200,250,1320,220,1380,180L1440,140V0H0Z"
                // /> */}

                //  {/* <path 
                //     fill="#9A5E26"   
                //     fillOpacity="1" 
                //     d="M0,210C100,180,200,140,320,120C440,100,560,130,680,170C800,210,920,220,1040,230C1160,240,1280,200,1380,170L1440,140V0H0Z"
                // /> */}
//             </svg>
//         </div>
//     </div>
// );

// export default Example; 

import { FaGooglePlay, FaApple } from "react-icons/fa";
// import {Container, Row, Col} from "react-bootstrap"
import "./index.css"

const Example = () => (
    <>
        <div className="example-container">
            <div className="wavy-section"></div>
            <div className="example-sub-container">
                {/* <div className="example-image-container">
                    <img src="/images/AllImages/example-image.jpg" alt="Example-Image" className="example-main-image"/>
                </div> */}
                {/* <Container>
                  <Row>
                  <Col md={6} xs={12} className="relative-column">
                    <div className="absolute-box box1">Box 1</div>
                    <div className="absolute-box box2">Box 2</div>
                    <div className="absolute-box box3">Box 3</div>
                  </Col>
                  <Col md={6} xs={12}>
                    <div className="content-box">
                      <h2>Hello World</h2>
                      <p>This is a text column beside the image layout.</p>
                    </div>
                  </Col>
                  </Row>
                </Container> */}
                <div className="example-added-section-image-container">
                  <div className="example-added-section-side-image example-added-side-image1">
                    <img src="/images/HeroImages/hero-main-11.jpg" alt="hero-side-image" />
                  </div>
                  <div className="example-added-section-side-image example-added-side-image2">
                    <img src="/images/HeroImages/hero-main-2.avif" alt="hero-side-image" />
                  </div>
                  <div className="example-added-section-side-image example-added-side-image3">
                    <img src="/images/barber-5194406_1280.jpg" alt="hero-side-image" />
                  </div>
                </div>
                <div className="example-content-container">
                            <div className="gold-text-container">
                              <h1 className="example-content-heading" data-heading="Estetica">Estetica</h1>
                            </div>
                            <p className="example-content-para">
                              Your all-in-one appointment and service booking app tailored for beauty and wellness
                            </p>
                            <p className="example-content-sub-para">
                              With Estetica, booking a salon, spa, or clinic appointment has never been easier.
                            </p>
                    
                            {/* User Images */}
                            {/* <div className="example-user-container">
                              <div className="example-icon-container">
                                <img src="/images/HeroImages/mini-circle-1.jpg" alt="user-image" className="example-image example-image-1" />
                                <img src="/images/HeroImages/mini-circle-2.jpeg" alt="user-image" className="example-image example-image-2" />
                                <img src="/images/HeroImages/mini-circle-3.jpg" alt="user-image" className="example-image example-image-3" />
                                <img src="/images/HeroImages/mini-circle-4.jpg" alt="user-image" className="example-image example-image-4" />
                              </div>
                              <p className="example-content-sub-para">12M+ active users around the world.</p>
                            </div> */}
                    
                            {/* App Store Cards */}
                            <div className="example-app-card-container">
                            <a href="https://play.google.com/store/apps/details?id=com.esteticaapp.user&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="example-section-anchor-card-link">
                                <div className="example-app-card">
                                  <FaGooglePlay className="example-app-icon" />
                                  <div className="example-app-sub-card">
                                    <p className="example-app-para">GET IT NOW</p>
                                    <h1 className="example-app-content">Google Play</h1>
                                  </div>
                                </div>
                              </a>
                    
                              <a href="https://apps.apple.com/in/app/estetica/id6739260215" target="_blank" rel="noopener noreferrer" className="example-section-anchor-card-link">
                                <div className="example-app-card">
                                  <FaApple className="example-app-icon" />
                                  <div className="example-app-sub-card">
                                    <p className="example-app-para">Download on the</p>
                                    <h1 className="example-app-content">Apple Store</h1>
                                  </div>
                                </div>
                              </a>
                            </div>
                </div>
            </div>
        </div>
    </>
)

export default Example