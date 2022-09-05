import React from "react";
import { GoVerified } from "react-icons/go";
import { Link } from "react-router-dom";
import { demoProfilePicture, demoChannelUrl } from "../../MenubarData";

const ChannelCard = ({ data, background }) => {
  let {
    id,
    snippet: { thumbnails, channelTitle, title },
  } = data;
  return (
    <Link
      to={`/channel/${id?.channelId || demoChannelUrl}`}
      style={{ textDecoration: "none" }}
    >
      <div className="channel-card" style={{ background }}>
        <div
          className="channel-card-img"
          style={{
            backgroundImage: `url(${
              thumbnails?.high?.url || demoProfilePicture
            })`,
          }}
        ></div>
        <div className="channel-name">
          {channelTitle || title}
          <GoVerified style={{ fontSize: "13px", marginLeft: "5px" }} />
        </div>
        {data?.statistics?.subscriberCount && (
          <div className="sub-count">
            {parseInt(data?.statistics?.subscriberCount).toLocaleString()}{" "}
            Subscribers
          </div>
        )}
      </div>
    </Link>
  );
};

export default ChannelCard;
