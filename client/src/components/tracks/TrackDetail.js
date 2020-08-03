import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

const TrackDetail = () => {
  const [selectedPodcast, setSelectedPodcast] = useState({});
  let { podcastId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`/api/podcast/${podcastId}`);
        setSelectedPodcast(data);
      } catch (err) {
        console.log(err, " is err");
      }
    };
    fetchData();
  }, [podcastId]);

  return (
    <div style={{ paddingTop: "100px" }}>
      <div className="container">
        <div className="col-md-6">
          <div className="card mb-5 shadow-sm">
            <div className="card-body">
              <p className="card-text">
                <span className="card-title">
                  <strong>{selectedPodcast.name}</strong>
                </span>
                <iframe
                  title="podcast"
                  style={{ border: "none" }}
                  src={`//html5-player.libsyn.com/embed/episode/id/${selectedPodcast.audioUrl}/height/360/theme/legacy/thumbnail/yes/direction/backward/`}
                  height="100"
                  width="100%"
                  scrolling="no"
                  allowFullScreen
                  webkitallowfullscreen="true"
                  mozallowfullscreen="true"
                  oallowfullscreen="true"
                  msallowfullscreen="true"
                ></iframe>
              </p>
              <img
                src={selectedPodcast.artworkUrl}
                className="card-img-bottom"
                alt="pic"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackDetail;
