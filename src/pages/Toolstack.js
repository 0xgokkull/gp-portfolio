import React from "react";
import { SiLinux, SiPostman, SiHeroku, SiCanva } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { IoLogoFigma } from "react-icons/io5";

function Toolstack() {
  return (
    <div className="flex justify-center flex-wrap gap-4 py-12">
      <div className="lg:text-8xl text-8xl m-4 sm:m-2 p-3 opacity-90 border border-purple-400 rounded-md shadow-lg transition-transform duration-300 hover:scale-105 hover:border-purple-500">
        <SiLinux />
      </div>
      <div className="lg:text-9xl text-8xl m-4 sm:m-2 p-3 opacity-90 border border-purple-400 rounded-md shadow-lg transition-transform duration-300 hover:scale-105 hover:border-purple-500">
        <SiPostman />
      </div>
      <div className="lg:text-9xl text-8xl m-4 sm:m-2 p-3 opacity-90 border border-purple-400 rounded-md shadow-lg transition-transform duration-300 hover:scale-105 hover:border-purple-500">
        <SiHeroku />
      </div>
      <div className="lg:text-9xl text-8xl m-4 sm:m-2 p-3 opacity-90 border border-purple-400 rounded-md shadow-lg transition-transform duration-300 hover:scale-105 hover:border-purple-500">
        <VscVscode />
      </div>
      <div className="lg:text-9xl text-8xl m-4 sm:m-2 p-3 opacity-90 border border-purple-400 rounded-md shadow-lg transition-transform duration-300 hover:scale-105 hover:border-purple-500">
        <IoLogoFigma />
      </div>
      <div className="lg:text-9xl text-8xl m-4 sm:m-2 p-3 opacity-90 border border-purple-400 rounded-md shadow-lg transition-transform duration-300 hover:scale-105 hover:border-purple-500">
        <SiCanva />
      </div>
    </div>
  );
}

export default Toolstack;
