import React from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap';

export default function Footer() {
  return (
    <div className='main-footer'>
      <div
        style={{
          height: '90vh',
          background: `url('https://images.pexels.com/photos/292426/pexels-photo-292426.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')`,
          backgroundSize: 'cover',
          position: 'relative',
          top: 0,
          bottom: 0,
          zIndex: -10
        }}
      >
        <div
          style={{
            height: '90vh',
            backgroundColor: 'rgba(0,0,0,0.5)',
            position: 'relative',
            top: 0,
            bottom: 0,
            zIndex: -5
          }}
        >
          <div
            style={{
              height: '90vh',
              top: 0,
              bottom: 0,
              zIndex: 9
            }}
          >
            <Container className='footer-middle' style={{ color: '#fcf9ed' }}>
              <Row>
                <Col sm={6} md={3}>
                  <h4>Messages</h4>
                  <ul className='list-unstyled'>
                    <li>
                      <Image
                        src='assets/cropped-MFAB-final-art-cover.jpg'
                        style={{ height: 250, width: 250 }}
                      />
                    </li>
                    <li>
                      <p style={{ color: 'rgba(190, 190, 190, 0.5)' }}>
                        Messages From A Bottle, Conversations For Your Higher
                        Self
                      </p>
                    </li>
                    <li>
                      <a
                        href='https://podcasts.apple.com/us/podcast/messages-from-a-bottle-podcast/id1340730783'
                        target='_blank'
                      >
                        Listen Today
                      </a>
                    </li>
                  </ul>
                </Col>
                <Col sm={6} md={3}>
                  <h4>Messages From A Bottle</h4>
                  <ul className='list-unstyled'>
                    <a href='mailto:messagesfromabottle@outlook.com'>
                      <i class='fas fa-envelope-open'></i>
                      messagesfromabottle@outlook.com
                    </a>

                    <li>
                      <a href='http://www.converstionsforyourhigherself.com'>
                        <i class='fas fa-globe-americas'></i>
                        messagesfromabottle.com
                      </a>
                    </li>
                  </ul>
                </Col>
                <Col sm={6} md={3}>
                  <h4>Latest Podcast Episodes</h4>
                  <ul className='list-unstyled'>
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                  </ul>
                </Col>
                <Col sm={6} md={3}>
                  <h4>Latest Messages</h4>
                  <ul
                    className='list-unstyled'
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      flexWrap: 'wrap'
                    }}
                  >
                    <li style={{ flexBasis: '33%' }}>
                      <Image
                        src='assets/cropped-MFAB-final-art-cover.jpg'
                        style={{ height: 80, width: 80, marginBottom: 6 }}
                      />
                    </li>
                    <li style={{ flexBasis: '33%' }}>
                      <Image
                        src='assets/cropped-MFAB-final-art-cover.jpg'
                        style={{ height: 80, width: 80 }}
                      />
                    </li>
                    <li style={{ flexBasis: '33%' }}>
                      <Image
                        src='assets/cropped-MFAB-final-art-cover.jpg'
                        style={{ height: 80, width: 80 }}
                      />
                    </li>
                    <li style={{ flexBasis: '33%' }}>
                      <Image
                        src='assets/cropped-MFAB-final-art-cover.jpg'
                        style={{ height: 80, width: 80, marginBottom: 6 }}
                      />
                    </li>
                    <li style={{ flexBasis: '33%' }}>
                      <Image
                        src='assets/cropped-MFAB-final-art-cover.jpg'
                        style={{ height: 80, width: 80 }}
                      />
                    </li>
                    <li style={{ flexBasis: '33%' }}>
                      <Image
                        src='assets/cropped-MFAB-final-art-cover.jpg'
                        style={{ height: 80, width: 80 }}
                      />
                    </li>
                    <li style={{ flexBasis: '33%' }}>
                      <Image
                        src='assets/cropped-MFAB-final-art-cover.jpg'
                        style={{ height: 80, width: 80 }}
                      />
                    </li>
                    <li style={{ flexBasis: '33%' }}>
                      <Image
                        src='assets/cropped-MFAB-final-art-cover.jpg'
                        style={{ height: 80, width: 80 }}
                      />
                    </li>
                    <li style={{ flexBasis: '33%' }}>
                      <Image
                        src='assets/cropped-MFAB-final-art-cover.jpg'
                        style={{ height: 80, width: 80 }}
                      />
                    </li>
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
        </div>
      </div>
    </div> // main-footer

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
