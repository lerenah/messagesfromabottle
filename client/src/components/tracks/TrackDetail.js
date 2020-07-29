import React from 'react';
import axios from 'axios';

class TrackDetail extends React.Component {
  constructor() {
    super();
    this.state = { selectedPodcast: {} };
  }

  async componentDidMount(props) {
    try {
      const { data } = await axios.get(`/api/podcast/${this.props.match.params.podcastId}`);
      console.log(data, ' DATA')
      this.setState({
        selectedPodcast: data
      });
    } catch (err) {
      console.log(err, ' is err');
    }
  }

  render(){
    console.log('STATE:', this.state.selectedPodcast)
    let {name, audioUrl, artworkUrl} = this.state.selectedPodcast;
    return (
    <div className='col-md-6'>
      <div className='card mb-5 shadow-sm' style={{ width: '35vw' }}>
        <div className='card-body'>
          <p className='card-text'>
            <h5 className='card-title'>
              <strong>{name}</strong>
            </h5>
            <iframe
              style={{ border: 'none' }}
              src={`//html5-player.libsyn.com/embed/episode/id/${audioUrl}/height/360/theme/legacy/thumbnail/yes/direction/backward/`}
              height='100'
              width='100%'
              scrolling='no'
              allowfullscreen
              webkitallowfullscreen
              mozallowfullscreen
              oallowfullscreen
              msallowfullscreen
            ></iframe>
          </p>
          <img src={artworkUrl} className='card-img-bottom' alt='pic' />
        </div>
      </div>
    </div>
    );
  };
  }

export default TrackDetail;
