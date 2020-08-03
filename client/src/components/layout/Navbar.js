import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const NavBar = () => (
  <Navbar
    activekey="/"
    onSelect={(selectedKey) => console.log(`selected ${selectedKey}`)}
    collapseOnSelect
    expand="lg"
    className="navigation navbar navbar-expand-md navbar-header"
  >
    <Navbar.Brand
      className="navbar-brand mb-4 nav-link"
      href="https://podcasts.apple.com/us/podcast/messages-from-a-bottle-podcast/id1340730783"
      target="_blank"
    >
      <img
        src="assets/cropped-MFAB-final-art-cover.jpg"
        width="40"
        height="40"
        className="d-inline-block align-top logo"
        alt="logo"
      />
    </Navbar.Brand>
    <Navbar.Toggle
      aria-controls="responsive-navbar-nav"
      className="navbar-header__toggle-button"
    />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto navbar-header__list">
        <Nav.Link eventKey="/" href="/" className="navbar-header__link">
          Home
        </Nav.Link>
        <Nav.Link
          eventKey="/allpodcasts"
          href="/allpodcasts"
          className="navbar-header__link"
        >
          Podcast Episodes
        </Nav.Link>
        <Nav.Link
          eventKey="/hosts"
          href="/hosts"
          className="navbar-header__link"
        >
          Meet Your Hosts
        </Nav.Link>
        <Nav.Link
          eventKey="/message"
          href="/message"
          className="navbar-header__link"
        >
          Share Your Message
        </Nav.Link>
        <Nav.Link
          eventKey="/contact"
          href="/contact"
          className="navbar-header__link"
        >
          Contact Us
        </Nav.Link>
        <Nav.Link
          id="subscribe"
          className="btn btn-info subscribe-link"
          href="https://podcasts.apple.com/us/podcast/messages-from-a-bottle-podcast/id1340730783"
          target="_blank"
        >
          Subscribe
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavBar;
