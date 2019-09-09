import React from 'react';
import { Zoom } from 'react-slideshow-image';

const images = [
  'assets/pic1.png',
  'assets/pic2.png',
  'assets/pic3.png',
  'assets/pic4.png'
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
            style={{ width: '100%', height: '70vh' }}
            src={`${each}`}
          />
        ))}
      </Zoom>
    </div>
  );
};

export default Slideshow;
