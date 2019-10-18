import React from 'react';

const Navbar = () => {
  return (
    <nav className='navbar navbar-light navbar-expand-sm'>
      <div className='container d-flex-justify-content-center'>
        <div
          className='collapse navbar-collapse d-flex-justify-content-center'
          id='navbarSupportedContent'
        >
          <a
            className='navbar-brand mb-4'
            href='https://podcasts.apple.com/us/podcast/messages-from-a-bottle-podcast/id1340730783'
          >
            <img
              src='assets/cropped-MFAB-final-art-cover.jpg'
              width='40'
              height='40'
              className='d-inline-block align-top'
              alt='logo'
            />
          </a>
          <ul className='navbar-nav'>
            <li className='nav-item active ml-5'>
              <a className='nav-link' href='#'>
                Home <span className='sr-only'>(current)</span>
              </a>
            </li>
            <li className='nav-item active ml-5'>
              <a className='nav-link' href='#'>
                Meet Your Hosts
              </a>
            </li>
            <li className='nav-item active ml-5'>
              <a className='nav-link' href='#'>
                Share Your Message
              </a>
            </li>
            <li className='nav-item active ml-5'>
              <a className='nav-link' href='#'>
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
