import React, { useState } from "react";
import "./Carousel.css";

interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="image-carousel">
      <button
        className="carousel-button prev-button"
        onClick={goToPreviousSlide}
      >
        &lt;
      </button>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className="carousel-image"
      />
      <button className="carousel-button next-button" onClick={goToNextSlide}>
        &gt;
      </button>
    </div>
  );
};

export default ImageCarousel;
