import React, { useState } from "react";

const App = () => {
  return (
    <main>
      <div className="relative">
        <img
          src="./images/bg.png"
          alt=""
          className="`bg-[rgba(0,0,0,0.4)] min-w-full h-screen"
        />
      </div>
      <div className="absolute left-[30%] top-[50%]  flex flex-col">
        <h3>Task Management & To-Do List</h3>
        <p>
          This Productive tool is developed to help you better manage your task
          Project-wise Conveniently
        </p>
        <button className="bg-blue-600 text-white font-bold">Let's Start</button>
      </div>
    </main>
  );
};

export default App;
