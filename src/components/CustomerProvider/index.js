// import { useEffect } from "react";
// import ScrollReveal from "scrollreveal"
// import "./index.css";

// const CustomerProvider = () => {
//     useEffect(() => {
//         ScrollReveal().reveal(".customer-provider-card",{
//             duration:1200,
//             distance:"50px",
//             delay:35,
//             easing:"ease-in-out",
//             reset:true,
//             once:false,
//             viewFactor: 0.3 
//         })
//         ScrollReveal().reveal(".customer-provider-sub-card-container",{
//             duration:1200,
//             distance:"50px",
//             delay:30,
//             easing:"ease-in-out",
//             reset:true,
//             once:false,
//             viewFactor: 0.3 
//         })
//         const observer = new IntersectionObserver(
//             (entries) => {
//                 entries.forEach((entry) => {
//                     if (entry.isIntersecting) {
//                         entry.target.classList.add("in-view");
//                     } else {
//                         entry.target.classList.remove("in-view");
//                     }
//                 });
//             },
//             { threshold: 0.5 }
//         );

//         const elements = document.querySelectorAll(".fade-in");
//         elements.forEach((el) => observer.observe(el));

//         return () => elements.forEach((el) => observer.unobserve(el));
//     }, []);

//     return (
//         <div className="customerprovider-wrapper fade-in">
//             <h1 className="customerprovider-heading fade-in">
//                 Welcome To <span className="customerprovider-span">Estetica</span>
//             </h1>
//             <p className="customerprovider-para fade-in">
//                 Your all-in-one appointment and service booking app tailored for the beauty and wellness industry. With Estetica, booking a salon, spa, or clinic appointment has never been easier.
//             </p>
//             <div className="customer-provider-card-container">
//                 <div className="customer-provider-sub-card-container">
//                     <div className="customer-provider-card">
//                         <img src="/images/UserImages/home-page.png" className="customer-provider-img" alt="Customer-Image"/>
//                         <div className="customer-provider-sub-card">
//                             <h1 className="customer-provider-card-heading">For <span className="customerprovider-span">Customers</span>:</h1>
//                             <p className="customer-provider-card-para">Browse top-rated providers, explore exclusive services, and book appointments with a few simple taps. Estetica helps you find the perfect match for your wellness and aesthetic needs, making self-care more accessible than ever.</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="customer-provider-sub-card-container">
//                     <div className="customer-provider-card">
//                         <img src="/images/ProviderImages/home-page.png" className="customer-provider-img" alt="Customer-Image"/>
//                         <div className="customer-provider-sub-card">
//                             <h1 className="customer-provider-card-heading">For <span className="customerprovider-span">Service Providers</span>:</h1>
//                             <p className="customer-provider-card-para">Estetica is designed to help you grow your brand, showcase services, and connect with a wide audience. Run promotions, track your business’s monthly performance, and manage bookings efficiently—all from one intuitive platform.</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CustomerProvider;


import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import "./index.css";

const CustomerProvider = () => {
    useEffect(() => {
        ScrollReveal().reveal(".customer-provider-card", {
            duration: 1200,
            distance: "50px",
            delay: 35,
            easing: "ease-in-out",
            reset: true,
            once: false,
            viewFactor: 0.3,
        });

        ScrollReveal().reveal(".customerprovider-heading", {
            duration: 1200,
            distance: "50px",
            delay: 30,
            easing: "ease-in-out",
            reset: true,
            once: false,
            viewFactor: 0.3,
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                entry.target.classList.toggle("in-view", entry.isIntersecting);
            });
        }, { threshold: 0.5 });

        const elements = document.querySelectorAll(".fade-in");
        elements.forEach((el) => observer.observe(el));
        return () => elements.forEach((el) => observer.unobserve(el));
    }, []);

    return (
        <div className="customerprovider-wrapper fade-in">
            <h1 className="customerprovider-heading fade-in">
                Welcome To <span className="customerprovider-span">Estetica</span>
            </h1>
            <p className="customerprovider-para fade-in">
                Your all-in-one appointment and service booking app tailored for the beauty and wellness industry. With Estetica, booking a salon, spa, or clinic appointment has never been easier.
            </p>

            <Container fluid className="mt-5">
                <Row className="justify-content-center g-4">
                    {/* Customer Card */}
                    <Col xs={12} md={6} lg={5}>
                        <Card className="customer-provider-card text-center">
                            <Image src="/images/UserImages/home-page.png" fluid className="customer-provider-img" />
                            <Card.Body className="customer-provider-sub-card">
                                <Card.Title className="customer-provider-card-heading">
                                    For <span className="customerprovider-span">Customers</span>:
                                </Card.Title>
                                <Card.Text className="customer-provider-card-para customer-provider-card-hover-content">
                                    Browse top-rated providers, explore exclusive services, and book appointments with a few simple taps. Estetica helps you find the perfect match for your wellness and aesthetic needs, making self-care more accessible than ever.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Provider Card */}
                    <Col xs={12} md={6} lg={5}>
                        <Card className="customer-provider-card text-center">
                            <Image src="/images/ProviderImages/home-page.png" fluid className="customer-provider-img" />
                            <Card.Body className="customer-provider-sub-card">
                                <Card.Title className="customer-provider-card-heading">
                                    For <span className="customerprovider-span">Service Providers</span>:
                                </Card.Title>
                                <Card.Text className="customer-provider-card-para customer-provider-card-hover-content">
                                    Estetica is designed to help you grow your brand, showcase services, and connect with a wide audience. Run promotions, track your business’s monthly performance, and manage bookings efficiently—all from one intuitive platform.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CustomerProvider;
