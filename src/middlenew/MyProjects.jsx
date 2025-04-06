import React from "react";
import Card from "./Card";
import Imageholder from './Imageholder'
import '../middlenew/style1.css'



const MyProjects = () => {
  return (
    <div
    // style={{ fontFamily: "'Geist Sans', sans-serif" }}  
    className=" bg-black text-white py-12 max-w-full">
      <div className="container mx-auto w-4/5">
        <h1 className="text-5xl font-bold text-center text-white mb-4">
          My Projects
        </h1>
        <div id="goog">s</div>
        <div className="goog"></div>
        <p className="text-center text-gray-400 mt-4">
          Explore my recent work and personal projects. Each project represents
          my passion for creating innovative solutions and my commitment to
          clean, efficient code.
        </p>
        <div className="">
          <div className="mt-10 flex flex-col lg:grid lg:grid-cols-2">
            <Imageholder/>
            <Card/>
          </div>
        </div>    
      </div>
    </div>
  );
};

export default MyProjects;
