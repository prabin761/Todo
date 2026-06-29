import React, { useState } from "react";

const App = () => {
  return (
    <main>
      <div className="relative">
        <img src="./images/bg.png" alt="" className="` min-w-full h-screen" />
      </div>
      <div className="absolute left-0 top-0 flex flex-col justify-end  items-center  text-white min-h-screen min-w-screen pb-20  bg-[rgba(0,0,0,0.6)]">
        <div className="px-10 space-y-4 text-center">
          <h3 className="font-bold text-4xl text-jus">Task Management & To-Do List</h3>
          <p>
            This Productive tool is developed to help you better manage your
            task Project-wise Conveniently
          </p>
          <button className="bg-blue-600 text-white text-xl font-bold px-6 py-2 rounded-2xl">
            Let's Start
          </button>
        </div>
      </div>
    </main>
  );
};

export default App;
