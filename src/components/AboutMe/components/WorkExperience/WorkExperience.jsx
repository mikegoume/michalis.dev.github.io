import React from "react";
import CareerBreak from "../../../../assets/images/careerBreak.jpg";
import Proseed from "../../../../assets/images/proseed.jpg";
import Freelance from "../../../../assets/images/freelance.jpg";
import Ordereze from "../../../../assets/images/ordereze.png";
import Schoox from "../../../../assets/images/schoox.png";
import Reveal from "../../../Reveal";

const WorkExperience = () => {
  return (
    <div
      id="work-container"
      className="flex flex-col pt-20 justify-center w-4/5 lg:w-full mx-auto"
    >
      <Reveal>
        <p className="text-2xl text-left font-bold mb-8">Work Experience</p>
      </Reveal>
      <div className="flex flex-col transition-all duration-1000 mb-8">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-7 items-center">
          <img
            alt=""
            src={CareerBreak}
            className="w-1/2 lg:w-1/5 mb-3 lg:mb-0"
          />
          <div className="w-full">
            <div className="flex flex-row justify-between align-center mb-3">
              <Reveal>
                <p className="font-sans text-lg lg:text-xl font-bold">
                  Career Break
                </p>
              </Reveal>
              <Reveal>
                <p className="font-sans text-sm lg:text-base font-medium">
                  11/2022 - 11/2023
                </p>
              </Reveal>
            </div>
            <div className="flex flex-row justify-between align-center mb-5">
              <Reveal>
                <p className="font-sans text-sm lg:text-base font-semibold">
                  Military Obligation
                </p>
              </Reveal>
              <Reveal>
                <p className="font-sans text-sm lg:text-base">-</p>
              </Reveal>
            </div>
            <div className="pl-6 pt-5">
              <ul className="list-disc">
                <li className="text-sm font-normal">
                  <Reveal>
                    <p className="font-sans text-sm lg:text-base text-left">
                      Classified
                    </p>
                  </Reveal>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <div className="flex flex-col transition-all duration-1000 mb-8">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-7 items-center">
          <img alt="" src={Schoox} className="w-1/2 lg:w-1/5 mb-3 lg:mb-0" />
          <div className="w-full">
            <div className="flex flex-row justify-between align-center mb-3">
              <Reveal>
                <p className="font-sans text-lg lg:text-xl font-bold">Schoox</p>
              </Reveal>
              <Reveal>
                <p className="font-sans text-sm lg:text-base font-medium">
                  09/2022 - 10/2022
                </p>
              </Reveal>
            </div>
            <div className="flex flex-row justify-between align-center mb-5">
              <Reveal>
                <p className="font-sans text-sm lg:text-base font-semibold">
                  Front-End Angular Developer
                </p>
              </Reveal>
              <Reveal>
                <p className="font-sans text-sm lg:text-base">Thessaloniki</p>
              </Reveal>
            </div>
            <div className="pl-6 pt-5">
              <ul className="list-disc">
                <li className="text-sm font-normal">
                  <Reveal>
                    <p className="font-sans text-sm lg:text-base text-left">
                      Reimplementing and redesigning user interfaces based on
                      provided designs or requirements, ensuring a consistent
                      and visually appealing user experience.
                    </p>
                  </Reveal>
                </li>
                <li className="text-sm font-normal">
                  <Reveal>
                    <p className="font-sans text-sm lg:text-base text-left">
                      Developing Angular components (such as directives,
                      services, and templates) that align with design guidelines
                      and can be easily reused across the application.
                    </p>
                  </Reveal>
                </li>
                <li className="text-sm font-normal">
                  <Reveal>
                    <p className="font-sans text-sm lg:text-base text-left">
                      Documenting code, components, and design decisions for
                      future reference and team understanding.
                    </p>
                  </Reveal>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <div className="flex flex-col transition-all duration-1000 mb-8">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-7 items-center">
          <img alt="" src={Freelance} className="w-1/2 lg:w-1/5 mb-3 lg:mb-0" />
          <div className="w-full">
            <div className="flex flex-row justify-between align-center mb-3">
              <Reveal>
                <p className="font-sans text-lg lg:text-xl font-bold">
                  Freelancer
                </p>
              </Reveal>
              <Reveal>
                <p className="font-sans text-sm lg:text-base font-medium">
                  10/2021 - 03/2023
                </p>
              </Reveal>
            </div>
            <div className="flex flex-row justify-between align-center mb-5">
              <Reveal>
                <p className="font-sans text-sm lg:text-base font-semibold">
                  Front-End React Native Developer
                </p>
              </Reveal>
              <Reveal>
                <p className="font-sans text-sm lg:text-base">
                  Heraklion - Thessaloniki
                </p>
              </Reveal>
            </div>
            <div className="pl-6 pt-5">
              <ul className="list-disc">
                <li className="text-sm font-normal">
                  <Reveal>
                    <p className="font-sans text-sm lg:text-base text-left">
                      Developing and maintaining cross-platform mobile
                      applications using React Native, ensuring high performance
                      and a native-like user experience.
                    </p>
                  </Reveal>
                </li>
                <li className="text-sm font-normal">
                  <Reveal>
                    <p className="font-sans text-sm lg:text-base text-left">
                      Implementing user interfaces based on design
                      specifications, ensuring they are visually appealing,
                      responsive, and user-friendly.
                    </p>
                  </Reveal>
                </li>
                <li className="text-sm font-normal">
                  <Reveal>
                    <p className="font-sans text-sm lg:text-base text-left">
                      Integrating mobile apps with backend APIs, handling data
                      retrieval, storage, and synchronization.
                    </p>
                  </Reveal>
                </li>
                <li className="text-sm font-normal">
                  <Reveal>
                    <p className="font-sans text-sm lg:text-base text-left">
                      Ensuring that the mobile app functions consistently on
                      both iOS and Android platforms, addressing any
                      platform-specific differences.
                    </p>
                  </Reveal>
                </li>
                <li className="text-sm font-normal">
                  <Reveal>
                    <p className="font-sans text-sm lg:text-base text-left">
                      Optimizing app performance by minimizing unnecessary
                      rendering, improving load times, and reducing memory
                      usage.
                    </p>
                  </Reveal>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <div className="flex flex-col transition-all duration-1000 mb-8">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-7 items-center">
          <img alt="" src={Ordereze} className="w-1/2 lg:w-1/5 mb-3 lg:mb-0" />
          <div className="w-full">
            <div className="flex flex-row justify-between align-center mb-3">
              <Reveal>
                <p className="font-sans text-lg lg:text-xl font-bold">
                  Ordereze
                </p>
              </Reveal>
              <Reveal>
                <p className="font-sans text-sm lg:text-base font-medium">
                  04/2021 - 08/2022
                </p>
              </Reveal>
            </div>
            <div className="flex flex-row justify-between align-center mb-5">
              <Reveal>
                <p className="font-sans text-sm lg:text-base font-semibold">
                  Front-End React Developer
                </p>
              </Reveal>
              <Reveal>
                <p className="font-sans text-sm lg:text-base">Thessaloniki</p>
              </Reveal>
            </div>
            <div className="pl-6 pt-5">
              <ul className="list-disc">
                <li className="text-sm font-normal">
                  <Reveal>
                    <p className="font-sans text-sm lg:text-base text-left">
                      Assessed project requirements using Agile & Scrum
                      principles
                    </p>
                  </Reveal>
                </li>
                <li className="text-sm font-normal">
                  <Reveal>
                    <p className="font-sans text-sm lg:text-base text-left">
                      Used understanding of React fundamentals to promote better
                      component lifecycle practices
                    </p>
                  </Reveal>
                </li>
                <li className="text-sm font-normal">
                  <Reveal>
                    <p className="font-sans text-sm lg:text-base text-left">
                      Added hooks in the project and moved class-based
                      components to functional components
                    </p>
                  </Reveal>
                </li>
                <li className="text-sm font-normal">
                  <Reveal>
                    <p className="font-sans text-sm lg:text-base text-left">
                      Helped the implementation of payment processors for online
                      ordering (Clover, Square, Stripe).
                    </p>
                  </Reveal>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <div className="flex flex-col transition-all duration-1000 mb-8">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-7 items-center">
          <img
            alt=""
            src={Proseed}
            className="w-full h-[150px] lg:h-auto lg:w-1/5 mb-3 lg:mb-0"
          />
          <div className="w-full">
            <div className="flex flex-row justify-between align-center mb-3">
              <Reveal>
                <p className="font-sans text-lg lg:text-xl font-bold">
                  Proseed
                </p>
              </Reveal>
              <Reveal>
                <p className="font-sans text-sm lg:text-base font-medium">
                  09/2021 - 03/2021
                </p>
              </Reveal>
            </div>
            <div className="flex flex-row justify-between align-center mb-5">
              <Reveal>
                <p className="font-sans text-sm lg:text-base font-semibold">
                  Web-Developer (Internship)
                </p>
              </Reveal>
              <Reveal>
                <p className="font-sans text-sm lg:text-base">
                  Heraklion, Crete
                </p>
              </Reveal>
            </div>
            <div className="pl-6 pt-5">
              <ul className="list-disc">
                <li className="text-sm font-normal">
                  <Reveal>
                    <p className="font-sans text-sm lg:text-base text-left">
                      Designed mockups in Lo-Fi and Hi-Fi using Figma
                    </p>
                  </Reveal>
                </li>
                <li className="text-sm font-normal">
                  <Reveal>
                    <p className="font-sans text-sm lg:text-base text-left">
                      Designed the REST API of the application Built the
                      database routes and queries, using MongoDB, Mongoose and
                      Express technologies.
                    </p>
                  </Reveal>
                </li>
                <li className="text-sm font-normal">
                  <Reveal>
                    <p className="font-sans text-sm lg:text-base text-left">
                      Contributed to team projects in order to get valuable
                      experience and empower my teamwork skills
                    </p>
                  </Reveal>
                </li>
                <li className="text-sm font-normal">
                  <Reveal>
                    <p className="font-sans text-sm lg:text-base text-left">
                      Helped the implementation of mobile application using
                      React Native
                    </p>
                  </Reveal>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
