import React from "react";
import SkillCard from "./components/SkillCard";
import Reveal from "../Reveal";

const Skills = () => {
  const skillList = [
    [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "React Native",
      "Expo",
      "Redux",
      "TailwindCSS",
    ],
    [
      "NodeJS",
      "ExpressJS",
      "MySQL",
      "MongoDB",
      "Mongoose",
      "Restful APIs",
      "GraphQL",
      "Java",
    ],
    [
      "Git",
      "Github",
      "Webpack",
      "Typescript",
      "Scrum Board",
      "Vs Code",
      "Figma",
      "Spline",
    ],
  ];

  return (
    <div
      id="skills-container"
      className="flex flex-col pt-20 justify-center w-4/5 lg:w-full mx-auto"
    >
      <Reveal>
        <p className="text-2xl text-left font-bold mb-8">My Skills</p>
      </Reveal>
      <div className="flex flex-col gap-y-4 lg:flex-row lg:justify-between lg:w-full">
        <SkillCard skillTitle="Front End" skillList={skillList[0]} index={0} />
        <SkillCard skillTitle="Back End" skillList={skillList[1]} index={1} />
        <SkillCard skillTitle="Other" skillList={skillList[2]} index={2} />
      </div>
    </div>
  );
};

export default Skills;
