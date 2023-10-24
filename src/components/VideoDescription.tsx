import React from "react";

interface Props {
  title: string;
  overview: string;
}

const VideoDescription: React.FC<Props> = (props) => {
  const { title, overview } = props;
  return (
    <div className=" text-white p-4 md:p-8 rounded-lg h-screen md:h-auto pt-72">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="mt-4 text-lg md:text-base text-gray-300">{overview}</p>
    </div>
  );
};

export default VideoDescription;
