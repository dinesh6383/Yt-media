import React, { useEffect, useState } from "react";
import { fetchFromAPI } from "../fetchFromAPI";
import ChannelCard from "./ChannelCard";
import VideoCard from "./VideoCard";

const Thumbnails = ({ activeMenu }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${activeMenu}`).then((data) =>
      setVideos(data.items)
    );
  }, [activeMenu]);

  return (
    <div className="thumbnails">
      <div className="user-selection">
        <h2>
          <span> {activeMenu} </span>videos
        </h2>
      </div>
      <div className="thumbs-holder">
        {videos.map((data) => {
          return data.id.videoId ? (
            <VideoCard data={data} />
          ) : (
            <ChannelCard data={data} />
          );
        })}
      </div>
    </div>
  );
};

export default Thumbnails;
