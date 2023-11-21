import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Button } from "@mui/material";

const Link = ({ label, ...props }) => {
  const formattedLabel = label[0] === "/" ? label.slice(1) : label;

  return (
    <Button
      {...props}
      component={ReactRouterLink}
      variant="text"
      sx={{
        padding: "0 0.5rem",
        color: "black",
        backgroundColor: "#bbb",
        "&:hover": {
          backgroundColor: "#a1a1a1",
        },
        textDecoration: "none",
        border: "none",
      }}
      aria-label={`nav-${formattedLabel}`}
      onKeyPress={(e) => {
        if (e.key === " " || e.key === "Enter") {
          e.preventDefault();
          e.target.click();
        }
      }}
    >
      {formattedLabel}
    </Button>
  );
};

export default Link;
