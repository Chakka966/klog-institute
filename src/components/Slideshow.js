import { useState, useEffect } from "react";
import img1 from "../assets/computer1.jpg";
import img2 from "../assets/computer2.jpg";
import img3 from "../assets/computer3.jpg";
import "./Slideshow.css";

function Slideshow() {
  const images = [img1, img2, img3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow-container">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          className={index === currentIndex ? "active" : ""}
          alt="slideshow"
        />
      ))}
    </div>
  );
}

export default Slideshow;

