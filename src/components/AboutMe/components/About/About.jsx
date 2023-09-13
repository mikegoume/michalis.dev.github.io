import React from "react";
import AboutSvg from "../../../../assets/images/About.svg";
import "./About.css";
import Reveal from "../../../Reveal";

const About = () => {
  return (
    <div
      id="about-container"
      className="flex flex-col pt-20 justify-center w-4/5 lg:w-full mx-auto"
    >
      <Reveal>
        <p className="text-2xl text-left font-bold mb-8">About Me</p>
      </Reveal>
      <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-7 items-center">
        <div className="flex flex-col align-center">
          <Reveal>
            <p className="font-sans text-sm lg:text-lg text-left">
              During my studies as a computer science student, I delved into
              back-end development and realized my natural{" "}
              <span>flair for UI/UX design</span>. Motivated by this
              realization, I began learning front-end development alongside my
              studies.
            </p>
          </Reveal>
          <br></br>
          <Reveal>
            <p className="font-sans text-sm lg:text-lg text-left">
              As a Front-End Developer,I have a strong passion for building
              beautiful and user-friendly websites and mobile applications. I
              possess an impresive arsenal of skills in HTHL, CSS, Javascript,
              React, React Native and Tailwind using modern libraries and
              cutting-edge development tools and techniques. I am a quick
              learner and a team player with good interpersonal skills to build
              good working relationships.
            </p>
          </Reveal>
        </div>
        <img
          alt="svg"
          src={AboutSvg}
          className="pt-8 about-image-container lg:w-2/5 lg:pt-0"
        />
      </div>
    </div>
  );
};

export default About;
