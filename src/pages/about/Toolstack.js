import React from "react";
import { SiLinux, SiPostman, SiHeroku, SiCanva } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { IoLogoFigma } from "react-icons/io5";

function Toolstack() {
  return (
    <div className="flex justify-center flex-wrap gap-4 p-6">
      {[
        <SiLinux />,
        <SiPostman />,
        <SiHeroku />,
        <VscVscode />,
        <IoLogoFigma />,
        <SiCanva />,
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

export default Toolstack;
