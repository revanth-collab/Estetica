import "./index.css"
// import fadedVideo from "./fadedVideo.mp4"

const FadedPage = () => {
  return (
    <div className="faded-page-container">
      <video autoPlay muted loop playsInline className="faded-page-video">
        <source src="https://cdn.pixabay.com/video/2024/04/10/207499_large.mp4"
         /*src={fadedVideo}*/
          /* src="https://cdn.pixabay.com/video/2015/08/11/306-135919105_large.mp4"*/ 
          type="video/mp4" />
      </video>
      <div className="faded-page-content">
        <h1 className="fadedpage-heading">Welcome to the Estetica</h1>
        <p className="fadedpage-content">Your all-in-one appointment and service booking app tailored for the beauty and wellness industry. With Estetica, booking a salon, spa, or clinic appointment has never been easier.</p>
      </div>
    </div>
  );
}

export default FadedPage;
