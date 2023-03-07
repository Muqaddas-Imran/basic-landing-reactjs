import React from "react";
import designerimg from "../images/designer3.png";

const Hero = () => {
  return (
    <div className="container h-screen min-w-full items-center">
      <div className="mx-10 flex justify-between pt-28">
        <div className="mt-20 w-1/2">
          <h1 className="text-4xl font-bold text-blue-800">
            <span className="text-slate-900">Demand From Expert</span>
            <br /> <span className="">Frontend Developer</span>
          </h1>
          <p>
            Frontend engineering is built on extensive foundations in HTML, CSS,
            JavaScript, frameworks like React, and general web development.
          </p>
          <button className="mt-4 h-16 w-60  rounded-full bg-gradient-to-bl from-cyan-200 to-green-200 text-xl font-bold text-blue-800 ">
            Explore Our Projects
          </button>
        </div>
        <div className="h-16 w-1/2">
          <img src={designerimg} alt="Designer image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
