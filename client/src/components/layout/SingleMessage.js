import React from 'react';

const SingleMessage = props => {
  console.log('PROPS', props);
  const { name, pic, title, comment } = props.message;
  return (
    <div className='col-md-6'>
      <div className='card mb-5 shadow-sm' style={{ width: '35vw' }}>
        <div className='card-body'>
          <p className='card-text'>
            <h5 className='card-title'>
              <strong>{title}</strong>
            </h5>
          </p>
          <p className='card-content'>{comment}</p>
          <img src={pic} className='card-img-bottom' alt='pic' />
          <hr />
          <small className='btn btn-danger'>{name}</small>
        </div>
      </div>
    </div>
  );
};

export default SingleMessage;
