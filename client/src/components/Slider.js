import React from 'react';
import { Slide } from 'react-slideshow-image';

const images = [
  'assets/mfab1.png',
  'assets/test2.jpg',
  'assets/test3.jpg',
  'assets/test1.jpg'
];

const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: false
};

const Slideshow = () => {
  return (
    <div className='slide' style={{ marginTop: 0 }}>
      <Slide {...zoomOutProperties}>
        {images.map((each, index) => (
          <img
            key={index}
            style={{ width: '100%', height: '80vh' }}
            src={`${each}`}
          />
        ))}
      </Slide>
    </div>
  );
};

export default Slideshow;
