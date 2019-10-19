import React, { Component } from 'react';
import Spinner from '../layout/Spinner';
import SingleTrack from './SingleTrack';

const Tracks = props => {
  const { podcast_list } = props;
  return (
    <div>
      {podcast_list.length === 0 || podcast_list.length === undefined ? (
        <Spinner></Spinner>
      ) : (
        <div className='container'>
          <h2 className='text-center mb-4'>Latest Podcast Episodes</h2>
          <div className='row'>
            {podcast_list.map(podcast => {
              return (
                <SingleTrack key={podcast.id} podcast={podcast}></SingleTrack>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Tracks;
