import React from 'react';
import { Zoom } from 'react-slideshow-image';

const images = [
  'assets/mfab1.png',
  'assets/mfab2.png',
  'assets/mfab3.png',
  'assets/mfab4.png'
];

const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true
};

const Slideshow = () => {
  return (
    <div className='slide'>
      <Zoom {...zoomOutProperties}>
        {images.map((each, index) => (
          <img
            key={index}
            style={{ width: '100%', height: '80vh' }}
            src={`${each}`}
          />
        ))}
      </Zoom>
    </div>
  );
};

export default Slideshow;
