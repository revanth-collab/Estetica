import React, { useState, useEffect } from "react";
import "./index.css";

const videoUrl = [
  { src: "https://cdn.pixabay.com/video/2024/04/10/207499_large.mp4" },
  { src: "https://cdn.pixabay.com/video/2015/08/11/306-135919105_large.mp4" },
  { src:"https://videos.pexels.com/video-files/2098988/2098988-uhd_2560_1440_30fps.mp4"},
  { src:"https://videos.pexels.com/video-files/4513059/4513059-uhd_2732_1440_24fps.mp4"}
];

const FadedPage = () => {
  const [randomVideo, setRandomVideo] = useState(null);

  useEffect(() => {
    // Select a random video on component load
    const randomIndex = Math.floor(Math.random() * videoUrl.length);
    setRandomVideo(videoUrl[randomIndex]);
  }, []);

  if (!randomVideo) return <p>Loading...</p>;

  return (
    <div className="faded-page-container">
      {/* Render only one random video */}
      <video autoPlay muted loop playsInline className="faded-page-video" key={randomVideo.src}>
        <source src={randomVideo.src} type="video/mp4" />
      </video>

      <div className="faded-page-content">
        <h1 className="fadedpage-heading">Welcome to the Estetica</h1>
        <p className="fadedpage-content">
          Your all-in-one appointment and service booking app tailored for the beauty and wellness industry. 
          With Estetica, booking a salon, spa, or clinic appointment has never been easier.
        </p>
      </div>
    </div>
  );
};

export default FadedPage;
