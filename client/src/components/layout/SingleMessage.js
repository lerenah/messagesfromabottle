import React from 'react';
import { Col, Image } from 'react-bootstrap';

const SingleMessage = props => {
  const { name, pic, title, comment } = props.message;
  return (
    <Col xs={12} sm={4} className='person-wrapper'>
      <Image src={pic} circle className='profile-pic' />
      <h3>{name}</h3>
      <h6>
        <strong>{title}</strong>
      </h6>
      <p>{comment}</p>
    </Col>
  );
};

export default SingleMessage;

// https://picsum.photos/300/200
