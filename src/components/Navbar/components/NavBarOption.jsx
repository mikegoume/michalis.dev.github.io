import React from "react";
import { Button } from "@mui/material";
import { memo } from "react";

const NavBarOption = ({ id, title, componentToScrollId, clickAction }) => {
  const handleScreenScroll = () => {
    const element = document.getElementById(componentToScrollId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      clickAction();
    }
  };

  return (
    <Button onClick={handleScreenScroll}>
      <p className="font-sans text-sm text-black font-semibold">
        <span className="font-sans text-xs text-orange">{id}.</span>
        {title}
      </p>
    </Button>
  );
};

export default memo(NavBarOption);
