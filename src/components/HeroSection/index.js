// import { FaGooglePlay } from "react-icons/fa";
// import { FaApple } from "react-icons/fa";

// import "./index.css"


// const HeroSection = () => {

//     return(
//         <div className="hero-section-wrapper">
//             <div className="hero-section-content-container">
//                 <h1 className="hero-content-heading">Estetica</h1>
//                 <p className="hero-content-para">Your all-in-one appointment and service booking app tailored for the beauty and wellness</p>
//                 <p className="hero-content-sub-para">With Estetica, booking a salon, spa, or clinic appointment has now been easier.</p>
//                 <div className="hero-user-container">
//                     <div className="hero-icon-container">
//                         <img src="https://tse3.mm.bing.net/th?id=OIP.tHoXCdncHBSqVXXwJ7FIPwHaE7&pid=Api&P=0&h=220" alt="user-image" className="hero-image hero-image-1"/>
//                         <img src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg" alt="user-image" className="hero-image hero-image-2"/>
//                         <img src="https://tse3.mm.bing.net/th?id=OIP.F5ZdsSh_3C9tlu_Lnzql1gAAAA&pid=Api&P=0&h=220" alt="user-image" className="hero-image hero-image-3"/>
//                         <img src="https://tse1.mm.bing.net/th?id=OIP.ohYdHf-O5_wDy0qoEFTWPQHaDt&pid=Api&P=0&h=220" alt="user-image" className="hero-image hero-image-4"/>
//                     </div>
//                     <p className="hero-content-sub-para">12M+ active user around the world.</p>
//                 </div>
//                 <div className="hero-app-card-container">
//                     <div className="hero-app-card">
//                         <FaGooglePlay className="hero-app-icon"/>
//                         <div className="hero-app-sub-card">
//                             <p className="hero-app-para">GET IT NOW</p>
//                             <h1 className="hero-app-content">Google Play</h1>
//                         </div>
//                     </div>
//                     <div className="hero-app-card">
//                         <FaApple className="hero-app-icon"/>
//                         <div className="hero-app-sub-card">
//                             <p className="hero-app-para">Download on the</p>
//                             <h1 className="hero-app-content">Apple Store</h1>
//                         </div>
//                     </div>
//                     {/* <div className="curly-arrow">
//                         <img src="/images/curlyarrow.jpg" alt="curlyarrow"  />
//                     </div> */}
//                 </div>
//             </div>
//             <div className="hero-section-image-container">
//                 <div className="hero-section-side-image hero-side-image1">
//                     <img src="https://img.freepik.com/free-photo/medium-shot-woman-living-healthy-lifestyle_23-2151201938.jpg?t=st=1742542792~exp=1742546392~hmac=5e94deaa036987ce9f6343ac281ca1faae2951583204cfe1ae8fd5cc6c9a160e&w=1800" alt="hero-side-image" />
//                 </div>
//                 <div className="hero-section-side-image hero-side-image2">
//                     <img src="https://img.freepik.com/premium-photo/woman-applying-shampoo-massaging-hair-customer-woman-having-her-hair-washed-hairdress_763111-6278.jpg" alt="hero-side-image" />
//                 </div>
//                 <div className="hero-section-side-image hero-side-image3">
//                     <img src="/images/barber-5194406_1280.jpg" alt="hero-side-image" />
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default HeroSection




import { FaGooglePlay, FaApple } from "react-icons/fa";
import "./index.css";

const HeroSection = () => {
  return (
    <div className="hero-section-wrapper">
      {/* Content Section */}
      <div className="hero-section-content-container">
        <h1 className="hero-content-heading">Estetica</h1>
        <p className="hero-content-para">
          Your all-in-one appointment and service booking app tailored for beauty and wellness
        </p>
        <p className="hero-content-sub-para">
          With Estetica, booking a salon, spa, or clinic appointment has never been easier.
        </p>

        {/* User Images */}
        <div className="hero-user-container">
          <div className="hero-icon-container">
            <img src="https://tse3.mm.bing.net/th?id=OIP.tHoXCdncHBSqVXXwJ7FIPwHaE7&pid=Api&P=0&h=220" alt="user-image" className="hero-image hero-image-1" />
            <img src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg" alt="user-image" className="hero-image hero-image-2" />
            <img src="https://tse3.mm.bing.net/th?id=OIP.F5ZdsSh_3C9tlu_Lnzql1gAAAA&pid=Api&P=0&h=220" alt="user-image" className="hero-image hero-image-3" />
            <img src="https://tse1.mm.bing.net/th?id=OIP.ohYdHf-O5_wDy0qoEFTWPQHaDt&pid=Api&P=0&h=220" alt="user-image" className="hero-image hero-image-4" />
          </div>
          <p className="hero-content-sub-para">12M+ active users around the world.</p>
        </div>

        {/* App Store Cards */}
        <div className="hero-app-card-container">
          <div className="hero-app-card">
            <FaGooglePlay className="hero-app-icon" />
            <div className="hero-app-sub-card">
              <p className="hero-app-para">GET IT NOW</p>
              <h1 className="hero-app-content">Google Play</h1>
            </div>
          </div>

          <div className="hero-app-card">
            <FaApple className="hero-app-icon" />
            <div className="hero-app-sub-card">
              <p className="hero-app-para">Download on the</p>
              <h1 className="hero-app-content">Apple Store</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="hero-section-image-container">
        <div className="hero-section-side-image hero-side-image1">
          <img src="https://img.freepik.com/free-photo/medium-shot-woman-living-healthy-lifestyle_23-2151201938.jpg?t=st=1742542792~exp=1742546392~hmac=5e94deaa036987ce9f6343ac281ca1faae2951583204cfe1ae8fd5cc6c9a160e&w=1800" alt="hero-side-image" />
        </div>
        <div className="hero-section-side-image hero-side-image2">
          <img src="https://img.freepik.com/premium-photo/woman-applying-shampoo-massaging-hair-customer-woman-having-her-hair-washed-hairdress_763111-6278.jpg" alt="hero-side-image" />
        </div>
        <div className="hero-section-side-image hero-side-image3">
          <img src="/images/barber-5194406_1280.jpg" alt="hero-side-image" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
