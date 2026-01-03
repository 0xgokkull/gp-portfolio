import React from "react";
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
    <div className="flex justify-center flex-wrap gap-4 p-6">
      {[
        <DiReact />,
        <SiNextdotjs />,
        <DiJavascript1 />,
        <TbBrandTypescript />,
        <FaRust />,
        <DiPython />,
        <DiMongodb />,
        <SiPostgresql />,
        <SiFirebase />,
        <DiGit />,
      ].map((icon, index) => (
        <div
          key={index}
          className="text-5xl lg:text-6xl p-3 text-cyan-200/90 hover:text-cyan-100 transition-colors"
        >
          {icon}
        </div>
      ))}
    </div>
  );
}

export default Techstack;
