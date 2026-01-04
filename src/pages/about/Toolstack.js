import React from "react";
import { SiLinux, SiPostman, SiHeroku, SiCanva } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { IoLogoFigma } from "react-icons/io5";
import IconGrid from "../../components/IconGrid";

function Toolstack() {
  const icons = [
    <SiLinux key="linux" />,
    <SiPostman key="postman" />,
    <SiHeroku key="heroku" />,
    <VscVscode key="vscode" />,
    <IoLogoFigma key="figma" />,
    <SiCanva key="canva" />,
  ];

  return <IconGrid icons={icons} />;
}

export default Toolstack;
