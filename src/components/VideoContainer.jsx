import React from "react";

const VideoContainer = ({ videoUrl, thumbnailUrl, title, subtitle, description }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <a href={videoUrl} target="_blank" rel="noopener noreferrer">
        <img src={thumbnailUrl} alt={title} />
      </a>
      <div className="mt-4">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-md text-gray-600">{subtitle}</p>
        <p className="text-md text-gray-800">{description}</p>
      </div>
    </div>
  );
};

export default VideoContainer;