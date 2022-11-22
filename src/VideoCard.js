import { Avatar } from "@mui/material";
import React from "react";

function VideoCard({ image, title, channel, views, timestamp }) {
  return (
    <div className="videoCard">
      <img src={image} alt=""></img>
      <div className="videoCard__info">
        <Avatar className="videoCard__avatar" alt={channel} src={channel} />
        <div className="video__text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
