// Importation du Composant React

import React, { useState } from "react";
import PropTypes from 'prop-types';

// Défilement Carrousel 

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
// Intégration de la Page

    return (
        // Design de l'image du carrousel
        <div className="slideshow">
            <div className="slideshow__img--container">
                <img src={pictures[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slideshow__img" />
            </div>
            {/*Code pour les flèches*/}
            {pictures.length > 1 && (
                <>
                    <button className="slideshow__arrow slideshow__arrow--left" onClick={handlePrev}>
                        &#10094;
                    </button>
                    <button className="slideshow__arrow slideshow__arrow--right" onClick={handleNext}>
                        &#10095;
                    </button>
                </>
            )}
            {/*Conmpteur du nombres d'images du Carrousel*/}
            {pictures.length > 1 && (
                <div className="slideshow__counter">
                    {currentIndex + 1}/{pictures.length}
                </div>
            )}
        </div>
    )
}

// PropTypes pour le débogage

Slideshow.propTypes = {
    pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
}

// Exportation du composant du Carrousel

export default Slideshow