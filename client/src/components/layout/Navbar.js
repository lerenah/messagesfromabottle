import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const NavBar = () => (
  <Navbar
    activeKey='/'
    onSelect={selectedKey => console.log(`selected ${selectedKey}`)}
    className='justify-content-between position-absolute position-fixed'
    style={{
      backgroundColor: 'rgb(79, 73, 137)',
      marginBottom: 0,
      zIndex: 9,
      width: '100vw'
    }}
  >
    <Nav.Item>
      <a
        className='navbar-brand mb-4'
        href='https://podcasts.apple.com/us/podcast/messages-from-a-bottle-podcast/id1340730783'
        target='_blank'
      >
        <img
          src='assets/cropped-MFAB-final-art-cover.jpg'
          width='40'
          height='40'
          className='d-inline-block align-top'
          alt='logo'
        />
      </a>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey='/' href='/'>
        Home
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey='/allpodcasts' href='/allpodcasts'>
        Podcast Episodes
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey='/hosts' href='/hosts'>
        Meet Your Hosts
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey='/message' href='/message'>
        Share Your Message
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey='/contact' href='/contact'>
        Contact Us
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link
        href='https://podcasts.apple.com/us/podcast/messages-from-a-bottle-podcast/id1340730783'
        target='_blank'
        className='btn btn-info'
      >
        Subscribe
      </Nav.Link>
    </Nav.Item>
  </Navbar>
);

export default NavBar;
