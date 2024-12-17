import React, { useState } from "react";

const Slideshow = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
      )

    }

  const handlePrev = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
      )
  }

  return (
    <div className = "slideshow">
      <div className = "slideshow__img--container">
        <img src = {pictures[currentIndex]} alt = {`Slide ${currentIndex + 1}`} className = "slideshow__img"/>
        </div>
      {pictures.length > 1 && (
        <>
          <button className = "slideshow__arrow slideshow__arrow--left" onClick={handlePrev}>
            &#10094;
          </button>
          <button className = "slideshow__arrow slideshow__arrow--right" onClick={handleNext}>
            &#10095;
          </button>
        </>
      )}
     {pictures.length > 1 && (
        <div className = "slideshow__counter">
          {currentIndex + 1}/{pictures.length}
        </div>
     )}
    </div>
  )
}

export default Slideshow