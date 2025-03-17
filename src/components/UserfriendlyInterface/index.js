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
                    <img src="https://www.esteticanow.com/images/est_new/slider_service.png" alt="user-app-image"/>
                    <img src="https://www.esteticanow.com/images/est_new/slider_near_by.png" alt="user-app-image"/>
                    <img src="https://www.esteticanow.com/images/est_new/slider_wallet.png" alt="user-app-image"/>
                    <img src="https://www.esteticanow.com/images/est_new/slider_about_us_users.png" alt="user-app-image"/>
                    <img src="https://www.esteticanow.com/images/est_new/slider_new_y_choose.png" alt="user-app-image"/>
                    <img src="https://www.esteticanow.com/images/est_new/slider_new_est_cat_1.png" alt="user-app-image"/>
                    
                    {/* Duplicate images for seamless scrolling */}
                    <img src="https://www.esteticanow.com/images/est_new/slider_service.png" alt="user-app-image"/>
                    <img src="https://www.esteticanow.com/images/est_new/slider_near_by.png" alt="user-app-image"/>
                    <img src="https://www.esteticanow.com/images/est_new/slider_wallet.png" alt="user-app-image"/>
                    <img src="https://www.esteticanow.com/images/est_new/slider_about_us_users.png" alt="user-app-image"/>
                    <img src="https://www.esteticanow.com/images/est_new/slider_new_y_choose.png" alt="user-app-image"/>
                    <img src="https://www.esteticanow.com/images/est_new/slider_new_est_cat_1.png" alt="user-app-image"/>
                </div>
            </div>
        </div>
    </div> 
);

export default UserfriendlyInterface;
