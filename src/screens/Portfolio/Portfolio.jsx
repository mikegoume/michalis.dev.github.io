import React from "react";
import GoldenShell from "../../assets/portfolioImages/GoldenShell.png";
import Eneleo from "../../assets/portfolioImages/Eneleo.png";

const PortfolioSites = [
  {
    id: 0,
    title: "GoldenShell",
    image: GoldenShell,
    skills: ["Wordpress"],
    link: "https://www.eneleo.com/",
  },
  {
    id: 1,
    title: "Eneleo",
    image: Eneleo,
    skills: ["Wordpress"],
    link: "https://goldenshellapt.com/",
  },
];

function Portfolio() {
  const openNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      id="work-container"
      className="flex flex-col min-h-screen  w-4/5 lg:w-full lg:mx-0 mx-auto overflow-hidden"
    >
      <p className="font-mono text-5xl text-left font-extrabold lg:text-5xl text-black mb-8">
        Portfolio
      </p>
      <div className="flex flex-col lg:flex-row lg:justify-between gap-10 shadow-xl">
        {PortfolioSites.map((site) => (
          <div
            key={site.id}
            className="w-full mx-auto shadow-lg flex-column overflow-hidden justify-content:space-between align-items:center lg:w-/5 lg:mx-0"
            onClick={openNewTab(site.link)}
          >
            <img
              alt=""
              src={site.image}
              className="hover:scale-125 transition duration-500 cursor-pointer"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
