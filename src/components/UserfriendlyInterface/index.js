import "./index.css";

const UserfriendlyInterface = () => (
    <div className="user-friendly-interface-wrapper">
        <div className="user-friendly-main-heading">
            <h1 className="user-friendly">App Screens</h1>
        </div>
        <h1 className="user-friendly-heading">Userfriendly <span className="contact-us-span">interface design</span></h1>
        
        <div className="user-friendly-scroll-wrapper">
            <div className="user-friendly-image-container">
                {/* Duplicating images for smooth infinite scroll */}
                <div className="image-track">
                    <img src="/images/UserImages/service-page.png" alt="user-app-image"/>
                    <img src="/images/UserImages/near-by.png" alt="user-app-image"/>
                    <img src="/images/UserImages/wallet-page.png" alt="user-app-image"/>
                    <img src="/images/UserImages/home-page.png" alt="user-app-image"/>
                    <img src="/images/ProviderImages/home-page.png" alt="user-app-image"/>
                    <img src="/images/UserImages/home-page.png" alt="user-app-image"/>
                    
                    {/* Duplicate images for seamless scrolling */}
                    <img src="/images/UserImages/service-page.png" alt="user-app-image"/>
                    <img src="/images/UserImages/near-by.png" alt="user-app-image"/>
                    <img src="/images/UserImages/wallet-page.png" alt="user-app-image"/>
                    <img src="/images/UserImages/home-page.png" alt="user-app-image"/>
                    <img src="/images/ProviderImages/home-page.png" alt="user-app-image"/>
                    <img src="/images/UserImages/home-page.png" alt="user-app-image"/>
                </div>
            </div>
        </div>
    </div> 
);

export default UserfriendlyInterface;
