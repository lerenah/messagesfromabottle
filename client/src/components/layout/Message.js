import React from 'react';
import axios from 'axios';

import SingleMessage from './SingleMessage';
import Spinner from './Spinner';

class Message extends React.Component {
  constructor() {
    super();
    this.state = { message_list: [], selectedMessage: {} };
    this.selectMessage = this.selectMessage.bind(this);
    this.deselectMessage = this.deselectMessage.bind(this);
  }

  async componentDidMount() {
    try {
      let { data } = await axios.get('/message');
      console.log(data, ' is DATA');
      this.setState({ message_list: data });
      console.log(this.state.message_list, ' is LIST');
    } catch (err) {
      console.log(err, ' is err');
    }
  }

  selectMessage(messageId) {
    return async () => {
      const { data } = await axios.get(`/message/${messageId}`);
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
      <div>
        {message_list.length === 0 || message_list.length === undefined ? (
          <Spinner></Spinner>
        ) : (
          <React.Fragment>
            <h2 className='text-center mb-4'>Latest Comments</h2>
            <div className='row'>
              {message_list.map(message => {
                return (
                  <SingleMessage
                    key={message.id}
                    message={message}
                  ></SingleMessage>
                );
              })}
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default Message;
