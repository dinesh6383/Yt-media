import React from "react";
import { GoVerified } from "react-icons/go";
import { Link } from "react-router-dom";
import {
  demoThumbnailUrl,
  demoChannelTitle,
  demoVideoTitle,
} from "../../MenubarData";

const VideoCard = ({ data }) => {
  console.log(data);
  let { id } = data;

  return (
    <Link to={`/video/${id.videoId}`} style={{ textDecoration: "none" }}>
      <div className="vid-card">
        <div
          className="vid-card-img"
          style={{
            backgroundImage: `url(${
              data?.snippet?.thumbnails?.high?.url || demoThumbnailUrl
            })`,
          }}
        ></div>
        <div className="vid-card-description">
          <p className="top">{`${
            data?.snippet?.title.slice(0, 60) || demoVideoTitle
          } ...`}</p>
          <p className="below">
            {data?.snippet?.channelTitle
              ? data?.snippet?.channelTitle
              : demoChannelTitle}
            <GoVerified style={{ fontSize: "13px", marginLeft: "5px" }} />
          </p>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
