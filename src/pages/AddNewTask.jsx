import React from "react";
import TopHeader from "../components/TopHeader";
import Button from "../components/Button"
import { FaBagShopping } from "react-icons/fa6";
import {
  FaArrowAltCircleDown,
  FaArrowAltCircleRight,
  FaCalendar,
} from "react-icons/fa";

const AddNewTask = () => {
  return (
    <>
      <TopHeader />
      <div className="mx-2 space-y-4 mt-4">
        <div className="flex justify-between items-center p-5 bg-white rounded-2xl">
          <div className="flex items-center gap-2">
            <FaBagShopping className="text-4xl" />
            <p className="">
              <span className="font-light">Task Group</span>
              <strong className="font-semibold block">Work</strong>
            </p>
          </div>
          <FaArrowAltCircleDown className="text-xl" />
        </div>

        <div className="bg-white px-3 py-6 rounded-2xl ">
          <span className="font-light">Description</span>
          <p className="font-semibold mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi
            officia blanditiis provident ex ipsam in saepe voluptate harum optio
            veritatis.
          </p>
        </div>

        <div className="flex justify-between items-center px-3 bg-white py-3 rounded-2xl">
          <div className="flex items-center gap-3">
            <FaCalendar className="text-4xl text-purple-300" />
            <p className="flex flex-col">
              <span className="font-light">Start Date</span>
              <strong className="text-2xl font-semibold">01 May, 2022</strong>
            </p>
          </div>
          <FaArrowAltCircleDown className="text-3xl" />
        </div>

        <div className="flex justify-between items-center px-3 bg-white py-3 rounded-2xl">
          <div className="flex items-center gap-3">
            <FaCalendar className="text-4xl text-purple-300" />
            <p className="flex flex-col">
              <span className="font-light">End Date</span>
              <strong className="text-2xl font-semibold">01 May, 2022</strong>
            </p>
          </div>
          <FaArrowAltCircleDown className="text-3xl" />
        </div>

        <div className="text-center">
          <Button name="Add new Task"/>
        </div>
      </div>
    </>
  );
};

export default AddNewTask;
