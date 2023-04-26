import React from "react";
import "./home.css";

export default function Home() {
  return (
    <div className="home shadow-2xl" id="home">
      <div className="overlay flex justify-center items-center flex-col p-5">
        <div className="max-w-6xl w-full space-y-4 text-center">
          <div className="text-4xl md:text-7xl text-gray-300 pb-2 text-center border-b border-gray-600 w-full">
            <span className="font-semibold">Mos</span> <span className="font-thin">Sukjaroenkraisri</span>
          </div>
          <div className="flex flex-col md:flex-row space-x-4 text-lg md:text-2xl justify-center items-center">
            <div className="text-slate-200 font-normal">Photographer</div>
            <div className="flex space-x-4 items-center">
              <div className="text-gray-300 font-extralight">from</div>
              <div className="text-slate-200 font-normal">Thailand</div>
            </div>
          </div>
        </div>

        <div className="glass-card1"></div>
        <div className="glass-card2"></div>
        <div className="glass-card3"></div>
        <div className="glass-card4"></div>
      </div>
    </div>
  );
}
