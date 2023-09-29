import { useEffect, useState } from "react";
import classNames from "classnames";
import NavBarOption from "./components/NavBarOption";

const Navbar = () => {
  const navBarOptions = [
    { id: "01", componentToScrollId: "about-container", title: "About" },
    {
      id: "02",
      componentToScrollId: "work-container",
      title: "Work Experience",
    },
    { id: "03", componentToScrollId: "skills-container", title: "Skills" },
    { id: "04", componentToScrollId: "contact-container", title: "Contact" },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  isMenuOpen
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "scroll");

  const handleButtonClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const burgerButtonClassnames = classNames({
    "block hamburger lg:hidden focus:outline-none": true,
    open: isMenuOpen === true,
  });

  return (
    <nav className="relative w-full">
      <div className="container max-w-5xl mx-auto p-6 flex justify-between">
        <span className="font-sans italic text-xl flex items-center text-orange">
          {"<MICHALIS.DEV />"}
        </span>
        <div className="flex items-center"></div>
        <div className="hidden space-x-6 lg:flex">
          {navBarOptions.map((option) => (
            <NavBarOption
              key={option.id}
              id={option.id}
              componentToScrollId={option.componentToScrollId}
              title={option.title}
            />
          ))}
        </div>
        <button
          id="menu-btn"
          className={burgerButtonClassnames}
          onClick={() => handleButtonClick()}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      {isMenuOpen && (
        <div
          id="menu"
          className="absolute flex flex-col items-center self-end h-screen space-y-6 font-bold bg-black bg-opacity-50 w-full sm:self-center  drop-shadow z-50"
          onClick={() => setIsMenuOpen(false)}
        >
          <div className="flex flex-col self-end py-8 px-8 h-screen bg-white space-y-6 items-start">
            {navBarOptions.map((option) => (
              <NavBarOption
                key={option.id}
                id={option.id}
                componentToScrollId={option.componentToScrollId}
                title={option.title}
                clickAction={() => setIsMenuOpen(false)}
              />
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
