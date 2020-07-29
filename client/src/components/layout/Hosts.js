import React from 'react';
import { Container, Col, Image, Row } from 'react-bootstrap';
import Quotes from './Quotes';

const Hosts = () => (
  <div>
    <Image src='assets/hero1.png' className='header-image' />
    <Container style={{ marginTop: 5 }}>
      <Row>
        <Col>
          <Image
            src='assets/hero2.png'
            className='about-profile-pic'
            style={{ height: 300, width: 300 }}
          />

          <h3>Lerena Holloway</h3>
          <p>
            Lerena Holloway is a Software Engineer, Traveller, and personal
            development enthusiast living in New York with her extensive sets of
            hiking-gear, a menagerie of lego characters, and her collection of
            Batman t-shirts. Check out her latest travel ventures on Facebook.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Image
            src='assets/hero3.png'
            className='about-profile-pic'
            style={{ height: 300, width: 300 }}
          />
          <h3>Rick Shaw</h3>
          <p>
            Rick Shaw is a writer, traveler and care-giver for his mother living
            in Denver, Colorado. Be on the lookout for his high-consciousness
            novel on atonement, forgiveness, and the after-life.{' '}
          </p>
        </Col>
      </Row>
    </Container>

    <Image
      src='assets/intention.png'
      className='header-image'
      style={{ height: 400 }}
    />
  </div>
);

export default Hosts;
