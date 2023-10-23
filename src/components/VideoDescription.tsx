import React from "react";

interface Props {
  title: string;
  overview: string;
}

const VideoDescription: React.FC<Props> = (props) => {
  const { title, overview } = props;
  return (
    <div>
      <div>{title}</div>
      <div>{overview}</div>
    </div>
  );
};

export default VideoDescription;
