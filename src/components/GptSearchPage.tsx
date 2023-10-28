import React from "react";

const GptSearchPage: React.FC = () => {
  return (
    <div className="bg-gray-900 h-screen flex flex-col justify-center items-center">
      <form className="flex items-center space-x-2 w-1/2 ">
        <input
          type="text"
          className="bg-gray-800 text-white rounded-full p-3 focus:outline-none w-full"
          placeholder="Search for movies or shows"
        />
        <button
          type="submit"
          className="bg-red-600 text-white px-5 py-3 rounded-full hover:bg-red-700 transition duration-300 ease-in-out"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchPage;
