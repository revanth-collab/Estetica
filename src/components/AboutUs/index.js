import { useEffect, useRef } from "react";
import "./index.css";

const AboutUs = () => {
  const imageTrackRef = useRef(null);

  useEffect(() => {
    let scrollAmount = 0;
    let direction = -1; // Leftward movement

    const scrollImages = () => {
      if (!imageTrackRef.current) return;

      scrollAmount += direction * 0.5; // Adjust speed if needed
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
    <div className="slider-container">
      <div className="image-track" ref={imageTrackRef}>
        {[
          "https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
          "https://images.unsplash.com/photo-1610194352361-4c81a6a8967e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
          "https://images.unsplash.com/photo-1618202133208-2907bebba9e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8fGVufDB8MHx8&auto=format&fit=crop&w=1770&q=80",
          "https://images.unsplash.com/photo-1495805442109-bf1cf975750b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8fGVufDB8MHx8&auto=format&fit=crop&w=1770&q=80",
        ].map((src, index) => (
          <img key={index} className="image" src={src} alt={`Slider ${index + 1}`} />
        ))}
        
        {/* Duplicate images to create an infinite effect */}
        {[
          "https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
          "https://images.unsplash.com/photo-1610194352361-4c81a6a8967e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
          "https://images.unsplash.com/photo-1618202133208-2907bebba9e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8fGVufDB8MHx8&auto=format&fit=crop&w=1770&q=80",
          "https://images.unsplash.com/photo-1495805442109-bf1cf975750b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8fGVufDB8MHx8&auto=format&fit=crop&w=1770&q=80",
        ].map((src, index) => (
          <img key={`duplicate-${index}`} className="image" src={src} alt={`Slider ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
