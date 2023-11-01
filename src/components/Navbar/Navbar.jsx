import { useEffect, useState } from "react";
import classNames from "classnames";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { IconButton } from "@mui/material";
import NavBarOption from "./components/NavBarOption";
import "./Navbar.css";

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

  const openNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  useEffect(() => {}, []);

  const burgerButtonClassnames = classNames({
    "block hamburger lg:hidden focus:outline-none": true,
    open: isMenuOpen === true,
  });

  return (
    <nav className="fixed w-screen top-0 z-50 bg-black border-b border-graylight">
      <div className="w-screen h-20 container mx-auto flex justify-between ">
        <p className="font-sans italic text-xl flex items-center text-white">
          <span className="font-sans italic text-lg flex items-center text-darkorange">
            {"< "}
          </span>
          {"MICHALIS.DEV"}
          <span className="font-sans italic text-lg flex items-center text-darkorange">
            {" />"}
          </span>
        </p>
        <div className="flex flex-row">
          <div className="hidden space-x-6 lg:flex mr-4">
            {navBarOptions.map((option) => (
              <NavBarOption
                key={option.id}
                id={option.id}
                componentToScrollId={option.componentToScrollId}
                title={option.title}
              />
            ))}
          </div>
          <div className="h-full flex flex-row gap-2 border-l border-white pl-4">
            <IconButton
              size="large"
              color="white"
              sx={{ padding: 0, borderRadius: 0 }}
              onClick={() =>
                openNewTab(
                  "https://www.linkedin.com/in/michalis-goumenakis-1701191b9/"
                )
              }
            >
              <LinkedInIcon fontSize="large" sx={{ color: "white" }} />
            </IconButton>
            <IconButton
              size="large"
              color="white"
              sx={{ padding: 0, borderRadius: 0 }}
              onClick={() => openNewTab("https://www.facebook.com/mike.goume")}
            >
              <FacebookIcon fontSize="large" sx={{ color: "white" }} />
            </IconButton>
            <IconButton
              size="large"
              color="white"
              sx={{ padding: 0, borderRadius: 0 }}
              onClick={() =>
                openNewTab("https://www.instagram.com/mike_goume_/")
              }
            >
              <InstagramIcon fontSize="large" sx={{ color: "white" }} />
            </IconButton>
          </div>
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
