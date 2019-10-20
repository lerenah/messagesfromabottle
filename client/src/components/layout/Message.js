import React from 'react';
import axios from 'axios';

import SingleMessage from './SingleMessage';
import Spinner from './Spinner';
import { Row, Button, Container, Jumbotron } from 'react-bootstrap';

class Message extends React.Component {
  constructor() {
    super();
    this.state = { message_list: [], selectedMessage: {} };
    this.selectMessage = this.selectMessage.bind(this);
    this.deselectMessage = this.deselectMessage.bind(this);
  }

  async componentDidMount() {
    try {
      let { data } = await axios.get('/api/message');
      console.log(data, ' is DATA');
      this.setState({ message_list: data });
      console.log(this.state.message_list, ' is LIST');
    } catch (err) {
      console.log(err, ' is err');
    }
  }

  selectMessage(messageId) {
    return async () => {
      const { data } = await axios.get(`/api/message/${messageId}`);
      this.setState({
        selectedMessage: data
      });
    };
  }
  deselectMessage() {
    this.setState({
      selectedMessage: {}
    });
  }

  render() {
    const { message_list } = this.state;
    return (
      <div className='container'>
        {message_list.length === 0 || message_list.length === undefined ? (
          <Spinner></Spinner>
        ) : (
          <React.Fragment>
            <Container>
              <Jumbotron>
                <h2>What's Your Message for the Bottle</h2>
                <p>Leave us a message, share your thoughts here!</p>
                <Button bsStyle='primary'>Share Your Message</Button>
              </Jumbotron>
              <Row className='show-grid text-center'>
                {message_list.map(message => {
                  return (
                    <SingleMessage
                      key={message.id}
                      message={message}
                    ></SingleMessage>
                  );
                })}
              </Row>
            </Container>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default Message;
