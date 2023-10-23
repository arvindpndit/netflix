import React from "react";

interface Props {
  title: string;
  overview: string;
}

const VideoDescription: React.FC<Props> = (props) => {
  const { title, overview } = props;
  return (
    <div className="bg-black bg-opacity-40  text-white p-4 rounded-lg h-screen pt-72">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="mt-2 text-sm w-2/5">{overview}</p>
    </div>
  );
};

export default VideoDescription;
