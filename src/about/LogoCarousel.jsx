import React from "react";
import "./styles.css"; // Import CSS for smooth animation

const images = [
  "/java.png",
  "/react.png",
  "/nodejs.png",
  "/express.png",
  "/mongodb.png",
  "/python.png",
  "/java.png",
  "/react.png",
  "/nodejs.png",
  "/express.png",
  "/mongodb.png",
  "/python.png",
];

const LogoCarousel = () => {
  return (
    <div className="slider">
      <div className="slide-track flex">
        {images.map((src, index) => (
          <div className="slide" key={index}>
            <img src={`${src}`} className="max-h-20" alt={`Logo ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;
