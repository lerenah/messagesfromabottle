import React from 'react';

export default function Quotes() {
  return (
    <div style={{ backgroundColor: '#fcf9ed' }}>
      <div className='container' style={{ padding: 20 }}>
        <div className='row'>
          <div className='col-sm text-center'>
            <img
              src='assets/quotes1.jpg'
              alt='pic'
              style={{ height: 100, width: 100 }}
            ></img>
            <div className='text-center'>
              <h4>William Blake</h4>
              <p>
                "Ability make take you to the top, but it takes character to
                stay there."
              </p>
            </div>
          </div>
          <div className='col-sm text-center'>
            <img
              src='assets/quotes2.jpg'
              alt='pic'
              style={{ height: 100, width: 100 }}
            ></img>
            <div className='text-center'>
              <h4>Bruce Lee</h4>
              <p>
                "Absorb what is useful, Discard what is not, Add what is
                uniquely your own."
              </p>
            </div>
          </div>
          <div className='col-sm text-center'>
            <img
              src='assets/quotes3.jpg'
              alt='pic'
              style={{ height: 100, width: 100 }}
            ></img>
            <div className='text-center'>
              <h4>George Bernard Shaw</h4>
              <p>
                "Life isn't about finding yourself. Life is about creating
                yourself."
              </p>
            </div>
          </div>
          <div className='col-sm text-center'>
            <img
              src='assets/quotes4.jpg'
              alt='pic'
              style={{ height: 100, width: 100 }}
            ></img>
            <div className='text-center'>
              <h4>Confucius</h4>
              <p>
                "They must often cahnge who would be constant in happiness or
                wisdom."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
