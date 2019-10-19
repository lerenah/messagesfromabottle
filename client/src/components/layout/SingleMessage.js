import React from 'react';

const SingleMessage = props => {
  const { name, pic, title, comment } = props.message;
  return (
    <div className='card mb-3' style={{ maxWidth: '540px' }}>
      <div className='row no-gutters'>
        <div className='col-md-4'>
          <img src={pic} className='card-img' alt='pic' />
        </div>
        <div className='col-md-8'>
          <div className='card-body'>
            <h3 className='card-title'>{name}</h3>
            <h5 className='card-title'>{title}</h5>
            <p className='card-text'>{comment}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMessage;

// https://picsum.photos/300/200
