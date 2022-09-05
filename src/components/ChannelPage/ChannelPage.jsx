import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../fetchFromAPI";
import ChannelCard from "../Home/ChannelCard";
import VideoCard from "../Home/VideoCard";

const ChannelPage = () => {
  const [channelInfo, setChannelInfo] = useState(null);
  const [channelVids, setChannelVids] = useState([]);
  const { id } = useParams();
  console.log(channelVids);

  useEffect(() => {
    //This is for getting the channel details like sub counts etc....
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => {
      setChannelInfo(data?.items[0]);
    });

    //This is for getting the videos belongs to the channel...
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => {
        setChannelVids(data?.items);
      }
    );
  }, [id]);

  return (
    <div className="channel-page">
      <div className="title-card"></div>
      <div className="channel-image">
        {channelInfo && <ChannelCard data={channelInfo} background="none" />}
      </div>
      <div className="channel-videos">
        {channelVids &&
          channelVids.map((data) => {
            return <VideoCard data={data} />;
          })}
      </div>
    </div>
  );
};

export default ChannelPage;
