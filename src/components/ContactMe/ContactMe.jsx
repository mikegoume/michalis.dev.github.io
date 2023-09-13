import React from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { IconButton } from "@mui/material";

function ContactMe() {
  const openNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      id="contact-container"
      className="flex flex-col my-10 text-white lg:flex-row pt-20 justify-center lg:w-full mx-auto"
    >
      <div className="px-6 py-24 bg-orange lg:w-1/3 lg:rounded-l-xl lg:rounded-tr-none">
        <p className="text-2xl text-left font-bold mb-5">Get in touch</p>
        <p className="text-lg text-left font-semibold">
          Don't be shy! Hit me up
        </p>
        <p className="text-left text-lg mb-5">
          You can contact me on my social media either send me an email.
        </p>
        <div className="flex flex-row gap-2">
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
            onClick={() => openNewTab("https://www.instagram.com/mike_goume_/")}
          >
            <InstagramIcon fontSize="large" sx={{ color: "white" }} />
          </IconButton>
        </div>
      </div>
      <div className="px-3 py-9 lg:w-2/3">
        <ContactForm />
      </div>
    </div>
  );
}

export default ContactMe;
