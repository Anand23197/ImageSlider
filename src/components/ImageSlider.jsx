import React, { useState, useEffect } from "react";
import "../css/ImageSlider.css"; // Import CSS file for styling
import { Button, Card, CardMedia, Checkbox } from "@mui/material";
const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoSlide, setAutoSlide] = useState(false);

  useEffect(() => {
    let intervalId;
    debugger;
    if (autoSlide) {
      intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 2000);
    }
    return () => {
      debugger;
      clearInterval(intervalId);
    };
  }, [autoSlide, images.length]);

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleClickThumbnail = (index) => {
    setCurrentIndex(index);
  };

  const handleAutoSlideChange = (e) => {
    setAutoSlide(e.target.checked);
  };

  return (
    <div className="image-slider">
      <div className="main-slider">
        {/* <div className="slide-wrapper"> */}
        <Card className="slide-wrapper">
          <CardMedia
            component="img"
            image={images[currentIndex]}
            alt="Paella dish"
          />
        </Card>
        {/* <img alt="natureImage" src={images[currentIndex]} /> */}
        {/* </div> */}
      </div>
      <div className="thumbnail-slider">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index}`}
            className={
              index === currentIndex ? "thumbnail active" : "thumbnail"
            }
            onClick={() => handleClickThumbnail(index)}
          />
        ))}
      </div>
      <div className="controls">
        <Button onClick={handlePrev}>Previous</Button>
        <Button onClick={handleNext}>Next</Button>
        <label>
          Auto Slide
          <Checkbox checked={autoSlide} onChange={handleAutoSlideChange} />
        </label>
      </div>
    </div>
  );
};

export default ImageSlider;
