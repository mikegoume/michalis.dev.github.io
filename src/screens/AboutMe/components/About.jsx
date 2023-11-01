import React, { useEffect, useRef, useState } from "react";
import AboutMe from "../../../assets/images/AboutMe.jpg";

const About = () => {
  const [offsetY, setOffsetY] = useState(null);
  const infoRef = useRef();

  const consoleScrollAttrs = () => {
    if (infoRef.current) {
      if (infoRef.current.style) {
        setOffsetY(infoRef.current.offsetTop - window.scrollY);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => consoleScrollAttrs());
    return () => {
      window.removeEventListener("scroll", consoleScrollAttrs());
    };
  }, []);

  return (
    <div
      id="about-container"
      className="flex flex-col lg:flex-row w-4/5 pt-20 justify-center min-h-screen lg:w-full lg:mx-0 mx-auto"
    >
      <img src={AboutMe} alt="" className="w-1/2 h-auto object-contain" />
      <div
        className="flex flex-col justify-center w-full lg:w-1/2 lg:pl-20"
        ref={infoRef}
        style={{ transform: `translate3d(0px, ${offsetY}px, 0px)` }}
      >
        <p className="font-mono text-5xl text-left font-extrabold mb-2 lg:text-5xl text-black mb-8">
          About Me
        </p>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-7 items-center">
          <div className="flex flex-col align-center">
            <p className="font-sans text-black text-sm lg:text-xl text-left">
              During my studies as a computer science student, I delved into
              back-end development and realized my natural{" "}
              <span>flair for UI/UX design</span>. Motivated by this
              realization, I began learning front-end development alongside my
              studies.
            </p>
            <br></br>
            <p className="font-sans text-black text-sm lg:text-xl text-left">
              As a Front-End Developer,I have a strong passion for building
              beautiful and user-friendly websites and mobile applications. I
              possess an impresive arsenal of skills in HTHL, CSS, Javascript,
              React, React Native and Tailwind using modern libraries and
              cutting-edge development tools and techniques. I am a quick
              learner and a team player with good interpersonal skills to build
              good working relationships.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
