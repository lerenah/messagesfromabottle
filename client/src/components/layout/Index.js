import React from 'react';
import axios from 'axios';

import Tracks from '../tracks/Tracks';
import SingleTrack from '../tracks/SingleTrack';
import Slider from '../Slider';
import Quotes from './Quotes';
import Spinner from './Spinner'

class Index extends React.Component {
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
       <Slider/>
       <div>
       <div className='container'>
       {this.state.podcast_list.length ? (
         <React.Fragment>
       <h3>Newest Episode</h3>
       <SingleTrack podcast={this.state.podcast_list[0]}></SingleTrack></React.Fragment>) : <Spinner/>
       }
       </div>

<Quotes/>
       </div>
      </React.Fragment>
    );
  }
}

export default Index;
