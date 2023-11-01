import React from "react";
import Experience from "./Experience";
import CareerBreak from "../../../assets/images/careerBreak.jpg";
import Proseed from "../../../assets/images/proseed.jpg";
import Freelance from "../../../assets/images/freelance.jpg";
import Ordereze from "../../../assets/images/ordereze.png";
import Schoox from "../../../assets/images/schoox.png";

const Experiences = [
  {
    img: CareerBreak,
    title: "Career Break",
    time: "11/2022 - 11/2023",
    exprertise: "Military Obligation",
    tasks: [{ id: 0, description: "Classified" }],
  },
  {
    img: Schoox,
    title: "Schoox",
    time: "09/2022 - 10/2022",
    exprertise: "Front-End Angular Developer",
    location: "Thessaloniki",
    tasks: [
      {
        id: 0,
        description: `Reimplementing and redesigning user interfaces based on
    provided designs or requirements, ensuring a consistent and
    visually appealing user experience.`,
      },
      {
        id: 1,
        description: `Developing Angular components (such as directives, services,
      and templates) that align with design guidelines and can be
      easily reused across the application.`,
      },
      {
        id: 2,
        description: `Documenting code, components, and design decisions for
      future reference and team understanding.`,
      },
    ],
  },
  {
    img: Freelance,
    title: "Freelancer",
    time: "10/2021 - 03/2023",
    exprertise: "Front-End React Native Developer",
    location: "Heraklion - Thessaloniki",
    tasks: [
      {
        id: 0,
        description: `Developing and maintaining cross-platform mobile
        applications using React Native, ensuring high performance
        and a native-like user experience.`,
      },
      {
        id: 1,
        description: `Implementing user interfaces based on design specifications,
        ensuring they are visually appealing, responsive, and
        user-friendly.`,
      },
      {
        id: 2,
        description: `Integrating mobile apps with backend APIs, handling data
        retrieval, storage, and synchronization.`,
      },
      {
        id: 3,
        description: `Ensuring that the mobile app functions consistently on both
        iOS and Android platforms, addressing any platform-specific
        differences.`,
      },
      {
        id: 4,
        description: `Optimizing app performance by minimizing unnecessary
        rendering, improving load times, and reducing memory usage.`,
      },
    ],
  },
  {
    img: Ordereze,
    title: "Ordereze",
    time: "04/2021 - 08/2022",
    exprertise: "Front-End React Developer",
    location: "Thessaloniki",
    tasks: [
      {
        id: 0,
        description: `Assessed project requirements using Agile & Scrum principles.`,
      },
      {
        id: 1,
        description: `Used understanding of React fundamentals to promote better
      component lifecycle practices.`,
      },
      {
        id: 2,
        description: `Added hooks in the project and moved class-based components
      to functional components.`,
      },
      {
        id: 3,
        description: `Helped the implementation of payment processors for online
      ordering (Clover, Square, Stripe).`,
      },
    ],
  },
  {
    img: Proseed,
    title: "Proseed",
    time: "09/2021 - 03/2021",
    exprertise: "Web-Developer (Internship)",
    location: "Heraklion, Crete",
    tasks: [
      {
        id: 0,
        description: `Designed mockups in Lo-Fi and Hi-Fi using Figma.`,
      },
      {
        id: 1,
        description: `Designed the REST API of the application Built the database
        routes and queries, using MongoDB, Mongoose and Express
        technologies.`,
      },
      {
        id: 2,
        description: `Contributed to team projects in order to get valuable
        experience and empower my teamwork skills.`,
      },
      {
        id: 3,
        description: `Helped the implementation of mobile application using React
        Native.`,
      },
    ],
  },
];

const WorkExperience = () => {
  return (
    <div
      id="work-container"
      className="flex flex-col justify-center w-4/5 lg:w-full lg:mx-0 mx-auto overflow-hidden"
    >
      <p className="font-mono text-5xl text-left font-extrabold lg:text-5xl text-black mb-8">
        Work Experience
      </p>
      {Experiences.map((experience) => (
        <>
          <Experience
            img={experience.img}
            title={experience.title}
            time={experience.time}
            expertise={experience.exprertise}
            location={experience.location}
            tasks={experience.tasks}
          />
          <br></br>
        </>
      ))}
    </div>
  );
};

export default WorkExperience;
