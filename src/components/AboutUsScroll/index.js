import { useEffect, useRef } from "react";
import ScrollReveal from "scrollreveal";
import "./index.css";

const AboutUsScroll = () => {
  const imageTrackRef = useRef(null);

  useEffect(() => {
    let scrollAmount = 0;
    let direction = -1; // Leftward movement

    ScrollReveal().reveal(".about-scroll",{
        duration:1500,
        distance:"60px",
        delay:50,
        easing:"ease-in-out",
        reset:true,
        once:false,
        viewFactor:0.3
    })

    const scrollImages = () => {
      if (!imageTrackRef.current) return;

      scrollAmount += direction * 1; // Adjust speed if needed
      imageTrackRef.current.style.transform = `translateX(${scrollAmount}px)`;

      // Reset position when it moves too far left
      if (scrollAmount <= -imageTrackRef.current.scrollWidth / 2) {
        scrollAmount = 0;
      }
      
      requestAnimationFrame(scrollImages);
    };

    scrollImages();

    return () => cancelAnimationFrame(scrollImages);
  }, []);

  return (
    <div className="slider-container-ab about-scroll">
      <div className="image-track-ab" ref={imageTrackRef}>
        {[
          "https://www.esteticanow.com/images/est/abt1.png",
          "https://www.esteticanow.com/images/est/abt2.png",
          "https://www.esteticanow.com/images/est/abt3.png",
          "https://www.esteticanow.com/images/est/abt4.png",
          "https://www.esteticanow.com/images/est/abt5.png",
          "https://www.esteticanow.com/images/est/abt6.png",
        ].map((src, index) => (
          <div className="image-ab-con">
            <img key={index} className="image-ab" src={src} alt={`Slider ${index + 1}`} />
          </div>
        ))}
        
        {/* Duplicate images to create an infinite effect */}
        {[
          "https://www.esteticanow.com/images/est/abt1.png",
          "https://www.esteticanow.com/images/est/abt2.png",
          "https://www.esteticanow.com/images/est/abt3.png",
          "https://www.esteticanow.com/images/est/abt4.png",
          "https://www.esteticanow.com/images/est/abt5.png",
          "https://www.esteticanow.com/images/est/abt6.png",
        ].map((src, index) => (
          <div className="image-ab-con">
            <img key={`duplicate-${index}`} className="image-ab" src={src} alt={`Slider ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUsScroll;
