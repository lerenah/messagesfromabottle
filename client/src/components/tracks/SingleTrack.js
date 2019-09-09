import React from 'react';

const SingleTrack = props => {
  const { name, artworkUrl, audioUrl } = props.podcast;
  return (
    <div className='col-md-6'>
      <div className='card mb-5 shadow-sm' style={{ width: '35vw' }}>
        <img src={artworkUrl} className='card-img-top' alt='pic' />
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
          <a
            href='https://podcasts.apple.com/us/podcast/messages-from-a-bottle-podcast/id1340730783'
            className='btn btn-primary'
          >
            Subscribe
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleTrack;
