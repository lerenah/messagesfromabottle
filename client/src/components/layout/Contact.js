import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image } from 'react-bootstrap';

const Contact = () => (
  <div className='my-5 py-5'>
    <div className='container'>
      <div className='well well-sm'>
        <Row>
          <Col>
            <Image
              src='assets/green.jpeg'
              thumbnail
              style={{ height: 400, width: 400 }}
            ></Image>
          </Col>
          <Col>
            <h4>
              <strong>Contact Us</strong>
            </h4>
            <form>
              <div className='form-group'>
                <input
                  className='form-control'
                  type='text'
                  placeholder='name'
                ></input>
              </div>
              <div className='form-group'>
                <input
                  className='form-control'
                  type='email'
                  placeholder='email'
                ></input>
              </div>
              <textarea
                cols='30'
                rows='3'
                className='form-control'
                placeholder='message'
              ></textarea>
              <Link className='btn btn-outline-danger text-uppercase mt-1'>
                Send
              </Link>
            </form>
          </Col>
        </Row>
      </div>
    </div>
  </div>
);

export default Contact;
