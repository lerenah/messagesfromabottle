import React from "react";
import axios from "axios";
import { Container, Col, Row, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  constructor() {
    super();
    this.state = { podcast_list: [] };
  }

  async componentDidMount() {
    try {
      let { data } = await axios.get("/api/podcast");
      this.setState({ podcast_list: data });
    } catch (err) {
      console.log(err, " is err");
    }
  }
  render() {
    return (
      <div className="main-footer">
        <div className="footer-overlay">
          <Container className="footer-middle" style={{ color: "#fcf9ed" }}>
            <Row>
              <Col sm={6} md={3}>
                <h4>Messages</h4>
                <ul className="list-unstyled">
                  <li>
                    <Image
                      className="footer-img"
                      src="assets/cropped-MFAB-final-art-cover.jpg"
                      alt="footer image"
                    />
                  </li>
                  <li>
                    <p style={{ color: "rgba(190, 190, 190, 0.5)" }}>
                      Messages From A Bottle, Conversations For Your Higher Self
                    </p>
                  </li>
                  <li>
                    <a
                      href="https://podcasts.apple.com/us/podcast/messages-from-a-bottle-podcast/id1340730783"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Listen Today
                    </a>
                  </li>
                </ul>
              </Col>
              <Col sm={6} md={3}>
                <h4>Messages From A Bottle</h4>
                <ul className="list-unstyled">
                  <li className="list-item">
                    <a href="mailto:messagesfromabottle@outlook.com">
                      <i className="fas fa-envelope-open"></i>
                      <span className="icon-text">
                        messagesfromabottle@outlook.com
                      </span>
                    </a>
                  </li>

                  <li className="list-item">
                    <a href="http://www.messagesfromabottle.herokuapp.com">
                      <i className="fas fa-globe-americas"></i>
                      <span className="icon-text">messagesfromabottle.com</span>
                    </a>
                  </li>
                </ul>
              </Col>
              <Col sm={6} md={3}>
                <h4>Latest Podcast Episodes</h4>
                <ul className="list-unstyled">
                  {this.state.podcast_list.map((podcast) => {
                    return (
                      <li key={podcast.id}>
                        <Link to={`/allPodcasts/${podcast.id}`}>
                          <small>{podcast.name}</small>
                        </Link>
                        <hr />
                      </li>
                    );
                  })}
                </ul>
              </Col>
              <Col sm={6} md={3}>
                <h4>Latest Messages</h4>
                <ul className="list-unstyled latest-message">
                  <li className="flex-basis">
                    <Image
                      src="assets/mixed.jpeg"
                      className="latest-message__img margin-bottom"
                    />
                    {/* <a
                      href="https://podcasts.apple.com/us/podcast/messages-from-a-bottle-podcast/id1340730783"
                      target="_blank"
                    ></a> */}
                  </li>
                  <li className="flex-basis">
                    <Image
                      src="assets/blueorange.jpeg"
                      className="latest-message__img"
                    />
                  </li>
                  <li className="flex-basis">
                    <Image
                      src="assets/mirage.jpeg"
                      className="latest-message__img"
                    />
                  </li>
                  <li className="flex-basis">
                    <Image
                      src="assets/colors.jpeg"
                      className="latest-message__img margin-bottom"
                    />
                  </li>
                  <li className="flex-basis">
                    <Image
                      src="assets/white_bubbles.jpeg"
                      className="latest-message__img"
                    />
                  </li>
                  <li className="flex-basis">
                    <Image
                      src="assets/pinkblue.jpeg"
                      className="latest-message__img"
                    />
                  </li>
                  <li className="flex-basis">
                    <Image
                      src="assets/pink.jpeg"
                      className="latest-message__img"
                    />
                  </li>
                  <li className="flex-basis">
                    <Image
                      src="assets/mixed2.jpeg"
                      className="latest-message__img"
                    />
                  </li>
                  <li className="flex-basis">
                    <Image
                      src="assets/purple.jpeg"
                      className="latest-message__img"
                    />
                  </li>
                </ul>
              </Col>
            </Row>
            <div className="footer-bottom">
              <p className="text-xs-center">
                &copy;{new Date().getFullYear()} Messages From A Bottle
              </p>
            </div>
          </Container>
        </div>
      </div> // main-footer
    );
  }
}

export default Footer;
