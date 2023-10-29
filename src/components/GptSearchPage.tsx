import React, { useRef } from "react";

const GptSearchPage: React.FC = () => {
  const textInput = useRef<HTMLInputElement>(null);

  return (
    <div className="bg-[#060604] h-screen flex flex-col items-center justify-center">
      <form
        className="px-2 sm:px-0 flex items-center space-x-2 w-full sm:w-5/6 md:w-1/2 mb-40 h-1/3"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={textInput}
          type="text"
          className="bg-gray-800 text-white rounded-lg p-3 focus:outline-none w-full"
          placeholder="Search for movies or shows"
        />
        <button
          type="submit"
          className="bg-red-600 text-white px-5 py-3 rounded-lg hover:bg-red-700 transition duration-300 ease-in-out"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchPage;
