import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import { SiFirebase, SiNextdotjs, SiPostgresql } from "react-icons/si";
import { FaRust } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";

function Techstack() {
  return (
    <div className="flex justify-center flex-wrap gap-4 py-12">
      <div className="lg:text-9xl text-8xl m-4 sm:m-2 p-3 opacity-90 border border-purple-400 rounded-md shadow-lg transition-transform duration-300 hover:scale-105 hover:border-purple-500">
        <DiReact />
      </div>
      <div className="lg:text-9xl text-8xl m-4 sm:m-2 p-3 opacity-90 border border-purple-400 rounded-md shadow-lg transition-transform duration-300 hover:scale-105 hover:border-purple-500">
        <SiNextdotjs />
      </div>
      <div className="lg:text-9xl text-8xl m-4 sm:m-2 p-3 opacity-90 border border-purple-400 rounded-md shadow-lg transition-transform duration-300 hover:scale-105 hover:border-purple-500">
        <DiJavascript1 />
      </div>
      <div className="lg:text-9xl text-8xl m-4 sm:m-2 p-3 opacity-90 border border-purple-400 rounded-md shadow-lg transition-transform duration-300 hover:scale-105 hover:border-purple-500">
        <TbBrandTypescript />
      </div>
      <div className="lg:text-9xl text-8xl m-4 sm:m-2 p-3 opacity-90 border border-purple-400 rounded-md shadow-lg transition-transform duration-300 hover:scale-105 hover:border-purple-500">
        <FaRust />
      </div>
      <div className="lg:text-9xl text-8xl m-4 sm:m-2 p-3 opacity-90 border border-purple-400 rounded-md shadow-lg transition-transform duration-300 hover:scale-105 hover:border-purple-500">
        <DiPython />
      </div>
      <div className="lg:text-9xl text-8xl m-4 sm:m-2 p-3 opacity-90 border border-purple-400 rounded-md shadow-lg transition-transform duration-300 hover:scale-105 hover:border-purple-500">
        <DiMongodb />
      </div>
      <div className="lg:text-9xl text-8xl m-4 sm:m-2 p-3 opacity-90 border border-purple-400 rounded-md shadow-lg transition-transform duration-300 hover:scale-105 hover:border-purple-500">
        <SiPostgresql />
      </div>
      <div className="lg:text-9xl text-8xl m-4 sm:m-2 p-3 opacity-90 border border-purple-400 rounded-md shadow-lg transition-transform duration-300 hover:scale-105 hover:border-purple-500">
        <SiFirebase />
      </div>
      <div className="lg:text-9xl text-8xl m-4 sm:m-2 p-3 opacity-90 border border-purple-400 rounded-md shadow-lg transition-transform duration-300 hover:scale-105 hover:border-purple-500">
        <DiGit />
      </div>
    </div>
  );
}

export default Techstack;
