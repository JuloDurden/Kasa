import './Gallery.scss'
import { useState } from 'react';

import ArrowLeft from '../../assets/arrow-left.png'
import ArrowRight from '../../assets/arrow-right.png'

function Gallery({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <div className="gallery">
      <img src={images[currentIndex]} alt="" className="gallery__img" />
      {images.length > 1 && (
        <>
          <img className="gallery__prev" src={ArrowLeft} alt='Précédent' onClick={handlePrev}></img>
          <img className="gallery__next" src={ArrowRight} alt='Suivant' onClick={handleNext}></img>
        </>
      )}
        <div className="gallery__counter">
            {currentIndex + 1}/{images.length}
        </div>
    </div>
  )
}

export default Gallery
