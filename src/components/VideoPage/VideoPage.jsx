import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { fetchFromAPI } from "../fetchFromAPI";
import { GoVerified } from "react-icons/go";
import VideoCard from "../Home/VideoCard";

const VideoPage = () => {
  const { id } = useParams();
  const [userVideo, setUserVideo] = useState([]);
  const [relatedVideo, setRelatedVideo] = useState([]);

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setUserVideo(data.items[0])
    );

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setRelatedVideo(data.items)
    );
  }, [id]);

  return (
    <div className="vid-page">
      <div className="vid-player">
        <div className="video">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            className="react-player"
            controls={true}
            width="100%"
            height="100%"
          />
        </div>
        <div className="other-stuff">
          <div className="vid-title">
            <h2>{userVideo.snippet && userVideo.snippet.title}...</h2>
            <p>
              {userVideo.statistics && userVideo.statistics.likeCount} likes{" "}
              <span style={{ marginLeft: "5px" }}>
                {userVideo.statistics && userVideo.statistics.viewCount} views
              </span>
            </p>
          </div>
          <div className="vid-description">
            <p>
              {userVideo.snippet && userVideo.snippet.channelTitle}
              <GoVerified
                style={{ marginLeft: "5px", fontSize: "14px", color: "gray" }}
              />
            </p>
            <button>SUBSCRIBE</button>
          </div>
        </div>
      </div>
      <div className="suggested-column">
        <div className="suggested-heading">
          <h2>
            <span>Suggested</span> Videos
          </h2>
        </div>
        <div className="suggested-videos">
          {relatedVideo &&
            relatedVideo.map((data) => {
              return <VideoCard data={data} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
/**{relatedVideo &&
          relatedVideo.map((data) => {
            return <VideoCard data={data} />;
          })} */
