import React from 'react';
import axios from 'axios';
import { Container, Col, Row, Image } from 'react-bootstrap';
import {Link} from 'react-router-dom';


class Footer extends React.Component {
  constructor() {
    super();

    this.state = { podcast_list: [] };
  }
  async componentDidMount() {
    try {
      let { data } = await axios.get('/api/podcast');
      console.log(data, ' is DATA');
      this.setState({ podcast_list: data });
    } catch (err) {
      console.log(err, ' is err');
    }
  }
  render() {
    return (
      <div className='main-footer'>
        <div
          style={{
            height: '90vh',
            background: `url("https://images.pexels.com/photos/292426/pexels-photo-292426.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")`,
            backgroundSize: 'cover',
            position: 'relative',
            top: 0,
            bottom: 0
          }}
        >
          <div
            style={{
              height: '90vh',
              backgroundColor: 'rgba(0,0,0,0.5)',
              position: 'relative',
              top: 0,
              bottom: 0
            }}
          >
            <div
              style={{
                height: '90vh',
                top: 0,
                bottom: 0
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
                          href="https://podcasts.apple.com/us/podcast/messages-from-a-bottle-podcast/id1340730783"
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
                        <i className='fas fa-envelope-open'></i>
                        &nbsp;messagesfromabottle@outlook.com
                      </a>

                      <li>
                        <a href='http://www.messagesfromabottle.herokuapp.com'>
                          <i className='fas fa-globe-americas'></i>
                          &nbsp;messagesfromabottle.com
                        </a>
                      </li>
                    </ul>
                  </Col>
                  <Col sm={6} md={3}>
                    <h4>Latest Podcast Episodes</h4>
                    <ul className='list-unstyled'>
                      {this.state.podcast_list.map(podcast => {
                        return (
                          <li key={podcast.id}>
                            <Link to={`/allPodcasts/${podcast.id}`}><small>{podcast.name}</small></Link>
                            <hr />
                          </li>
                        );
                      })}
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
                          src='assets/mixed.jpeg'
                          style={{ height: 80, width: 80, marginBottom: 6 }}
                        />
                        <a
                          href="https://podcasts.apple.com/us/podcast/messages-from-a-bottle-podcast/id1340730783"
                          target='_blank'
                        >
                        </a>
                      </li>
                      <li style={{ flexBasis: '33%' }}>
                        <Image
                          src='assets/blueorange.jpeg'
                          style={{ height: 80, width: 80 }}
                        />
                      </li>
                      <li style={{ flexBasis: '33%' }}>
                        <Image
                          src='assets/mirage.jpeg'
                          style={{ height: 80, width: 80 }}
                        />
                      </li>
                      <li style={{ flexBasis: '33%' }}>
                        <Image
                          src='assets/colors.jpeg'
                          style={{ height: 80, width: 80, marginBottom: 6 }}
                        />
                      </li>
                      <li style={{ flexBasis: '33%' }}>
                        <Image
                          src='assets/white_bubbles.jpeg'
                          style={{ height: 80, width: 80 }}
                        />
                      </li>
                      <li style={{ flexBasis: '33%' }}>
                        <Image
                          src='assets/pinkblue.jpeg'
                          style={{ height: 80, width: 80 }}
                        />
                      </li>
                      <li style={{ flexBasis: '33%' }}>
                        <Image
                          src='assets/pink.jpeg'
                          style={{ height: 80, width: 80 }}
                        />
                      </li>
                      <li style={{ flexBasis: '33%' }}>
                        <Image
                          src='assets/mixed2.jpeg'
                          style={{ height: 80, width: 80 }}
                        />
                      </li>
                      <li style={{ flexBasis: '33%' }}>
                        <Image
                          src='assets/purple.jpeg'
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
    );
  }
}

export default Footer;
