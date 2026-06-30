import React from "react";
import Button from "./Button";

const CategoryTitle = () => {
  const btnNameList = ["ALL", "TODOS", "INPROGRESS", "COMPLETED"];
  return (
    <div className="flex gap-4 items-center justify-between overflow-scroll p-2 scrollbar-thumb-blue-500">
      {btnNameList.map((title,index) => (
        <div key={index} >
          <Button name= {title} />
        </div>
      ))}
    </div>
  );
};

export default CategoryTitle;
