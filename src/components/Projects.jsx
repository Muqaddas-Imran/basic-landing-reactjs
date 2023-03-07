import React from "react";
import computer from "../images/computer1.jpg";

const Projects = () => {
  return (
    <div>
      <div className="">
        <h1 className="text-center text-3xl font-bold underline decoration-green-300">
          Our <span className="text-blue-800">Recent</span> Projects
        </h1>
      </div>
      <div className="grid min-w-full grid-cols-4 gap-4 pt-10">
        <div className="border-spacing-2 bg-slate-50">
          <img src={computer} alt="proj1" />
          <h1 className="text-center text-xl">This is First Project</h1>
          <p>
            This is most commonly used to remove a border radius that was
            applied at a smaller breakpoint.
          </p>
        </div>
        <div className="border-spacing-2 bg-slate-50">
          <img src={computer} alt="proj1" />
          <h1 className="text-center text-xl">This is First Project</h1>
          <p>
            This is most commonly used to remove a border radius that was
            applied at a smaller breakpoint.
          </p>
        </div>
        <div className="border-spacing-2 bg-slate-50">
          <img src={computer} alt="proj1" />
          <h1 className="text-center text-xl">This is First Project</h1>
          <p>
            This is most commonly used to remove a border radius that was
            applied at a smaller breakpoint.
          </p>
        </div>
        <div className="border-spacing-2 bg-slate-50">
          <img src={computer} alt="proj1" />
          <h1 className="text-center text-xl">This is First Project</h1>
          <p>
            This is most commonly used to remove a border radius that was
            applied at a smaller breakpoint.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
