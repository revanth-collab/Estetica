import "./index.css";

const ProviderOurValue = () => (
    <div className="provider-wrapper">
        <h1 className="provider-wrapper-heading">Provider</h1>
        <p className="provider-wrapper-sub-heading">
            Our values <span className="provider-wrapper-span">driven by relations</span>
        </p>
        <div className="provider-scroll-container">
            <div className="provider-scroll-track">
                {[...Array(2)].map((_, i) => (
                    <div className="provider-card-container" key={i}>
                        <div className="provider-card">
                            <div className="provider-content-container">
                                <div className="provider-image-icon">
                                    <img src="/images/cardIcons/ourvalue_1.png" alt="provider-image" className="provider-image" />
                                </div>
                                <div className="provider-sub-content">
                                    <h1 className="provider-content-heading">Engagement</h1>
                                    <p className="provider-content-para">
                                        Our platform helps you engage effectively with clients to enhance your service quality and professionalism.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="provider-card">
                            <div className="provider-content-container">
                                <div className="provider-image-icon">
                                    <img src="/images/cardIcons/ourvalue_2.png" alt="provider-image" className="provider-image" />
                                </div>
                                <div className="provider-sub-content">
                                    <h1 className="provider-content-heading">Support</h1>
                                    <p className="provider-content-para">
                                        We aim to create a space where providers can flourish, connecting with clients who value quality and professionalism.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="provider-card">
                            <div className="provider-content-container">
                                <div className="provider-image-icon">
                                    <img src="/images/cardIcons/ourvalue_3.png" alt="provider-image" className="provider-image" />
                                </div>
                                <div className="provider-sub-content">
                                    <h1 className="provider-content-heading">Growth</h1>
                                    <p className="provider-content-para">
                                        Our dedication to building strong relationships is reflected in our tools and resources, all designed to help you succeed in the competitive wellness and beauty industry.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="provider-card">
                            <div className="provider-content-container">
                                <div className="provider-image-icon">
                                    <img src="/images/cardIcons/ourvalue_1.png" alt="provider-image" className="provider-image" />
                                </div>
                                <div className="provider-sub-content">
                                    <h1 className="provider-content-heading">Partnership</h1>
                                    <p className="provider-content-para">
                                        For providers, Estetica is more than a platform; it’s a partnership. We value the relationship we build with each clinic, salon, and spa, supporting your growth through visibility and meaningful client engagement.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default ProviderOurValue;

