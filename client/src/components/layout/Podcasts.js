import React from 'react';
import axios from 'axios';

import Tracks from '../tracks/Tracks';
import SingleTrack from '../tracks/SingleTrack';
import Quotes from './Quotes';

class Podcasts extends React.Component {
  constructor() {
    super();
    this.state = { podcast_list: [], selectedPodcast: {} };
    this.selectPodcast = this.selectPodcast.bind(this);
    this.deselectPodcast = this.deselectPodcast.bind(this);
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

  selectPodcast(podcastId) {
    return async () => {
      const { data } = await axios.get(`/api/podcast/${podcastId}`);
      this.setState({
        selectedPodcast: data
      });
    };
  }
  deselectPodcast() {
    this.setState({
      selectedPodcast: {}
    });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.selectedPodcast.id ? (
          <SingleTrack podcast={this.state.selectedPodcast}></SingleTrack>
        ) : (
          <React.Fragment>
            <Tracks podcast_list={this.state.podcast_list}></Tracks>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

export default Podcasts;
