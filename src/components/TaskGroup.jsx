import React from "react";
import { GiHandBag } from "react-icons/gi";

const TaskGroup = () => {
  return (
    <>
      <div className="m-4 p-4 bg-white rounded-lg">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-6">
            <p className="bg-blue-100 p-3 rounded-2xl">
              <GiHandBag className="text-3xl " />
            </p>
            <div>
              <h3 className="text-black font-bold">Office Project</h3>
              <span className="text-gray-600">23 Tasks</span>
            </div>
          </div>
          <div className="border rounded-full p-1 bg-amber-300 border-transparent ">
            <p className="font-bold border rounded-full p-4 bg-white border-transparent">
              70%
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskGroup;
