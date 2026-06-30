import React from "react";

const Progress = () => {
  return (
    <div className="flex items-start gap-8 bg-blue-800 p-4 rounded-2xl mx-2 mt-4">
      <div className="flex flex-col gap-5">
        <p className="text-white text-justify font-bold">Your today's task almost done!</p>
        <button className="bg-purple-200 text-blue-800 px-4 py-2 rounded-lg font-bold">
          View Task
        </button>
      </div>
      <div className="border rounded-full p-1 bg-blue-300 border-transparent ">
        <p className="font-bold border rounded-full p-6 bg-white border-transparent">
          70%
        </p>
      </div>
      <button className=" text-white font-extrabold text-xl">...</button>
    </div>
  );
};

export default Progress;
