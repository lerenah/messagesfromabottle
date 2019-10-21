import React from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap';

export default function Footer() {
  return (
    <div className='main-footer' style={{ height: '90vh' }}>
      <Container className='footer-middle'>
        <Row>
          <Col sm={6} md={3}>
            <h4>Title</h4>
            <ul className='list-unstyled'>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
            </ul>
          </Col>
          <Col sm={6} md={3}>
            <h4>Title</h4>
            <ul className='list-unstyled'>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
            </ul>
          </Col>
          <Col sm={6} md={3}>
            <h4>Title</h4>
            <ul className='list-unstyled'>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
            </ul>
          </Col>
          <Col sm={6} md={3}>
            <h4>Title</h4>
            <ul className='list-unstyled'>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
            </ul>
          </Col>
        </Row>
        <div className='footer-bottom'>
          <p className='text-xs-center'>
            &copy;{new Date().getFullYear()} Messages From A Bottle
          </p>
        </div>
      </Container>
    </div>
    // <Navbar
    //   style={{ backgroundColor: 'rgba(79, 73, 137, 0.7)', marginBottom: 0 }}
    //   className='justify-content-around'
    // >
    //   <Nav.Item>
    //     <h4>Messages From A Bottle</h4>
    //     <Image
    //       src='assets/cropped-MFAB-final-art-cover.jpg'
    //       thumbnail
    //       style={{ height: 200, width: 200 }}
    //     />
    //     <br />
    //     <a
    //       href='https://podcasts.apple.com/us/podcast/messages-from-a-bottle-podcast/id1340730783'
    //       target='_blank'
    //     >
    //       Listen Today
    //     </a>
    //   </Nav.Item>
    //   <Nav.Item>
    //     <h4>Contact Us</h4>
    //     <p>
    //       <i class='fas fa-envelope-open'></i>Email
    //     </p>
    //     <a href='#'>Go Here for more</a>
    //   </Nav.Item>
    //   <Nav.Item>
    //     <h4>Latest Episodes</h4>
    //     <Image
    //       src='assets/cropped-MFAB-final-art-cover.jpg'
    //       thumbnail
    //       style={{ height: 200, width: 200 }}
    //     />

    //     <p>Hellow</p>
    //     <a href='#'>Go Here for more</a>
    //   </Nav.Item>
    //   <Nav.Item>
    //     <Image
    //       src='assets/cropped-MFAB-final-art-cover.jpg'
    //       thumbnail
    //       style={{ height: 200, width: 200 }}
    //     />
    //     <h4>THis is the Title</h4>
    //     <p>Hellow</p>
    //     <a href='#'>Go Here for more</a>
    //   </Nav.Item>
    // </Navbar>
  );
}
