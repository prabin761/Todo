import React from "react";
import { FaBagShopping } from "react-icons/fa6";

const Task = () => {
  return (
    <>
      <div className="m-2 bg-white p-4 rounded-lg">
        <div className="flex justify-between">
          <p className="flex flex-col font-extralight space-y-2">
            Grocery shopping app design
            <strong className="">Market Research</strong>
            <span className="text-blue-500 font-light">Time - complete-on</span>
          </p>
          <div className="flex flex-col justify-between items-end">
            <FaBagShopping className="text-2xl" />
            <strong className="text-blue-500 font-bold">status:</strong>
          </div>
        </div>
      </div>
    </>
  );
};

export default Task;
