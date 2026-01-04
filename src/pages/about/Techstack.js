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
import IconGrid from "../../components/IconGrid";

function Techstack() {
  const icons = [
    <DiReact key="react" />,
    <SiNextdotjs key="next" />,
    <DiJavascript1 key="js" />,
    <TbBrandTypescript key="ts" />,
    <FaRust key="rust" />,
    <DiPython key="python" />,
    <DiMongodb key="mongo" />,
    <SiPostgresql key="postgres" />,
    <SiFirebase key="firebase" />,
    <DiGit key="git" />,
  ];

  return <IconGrid icons={icons} />;
}

export default Techstack;
