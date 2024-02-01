import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Button, useTheme } from "@mui/material";

const Link = ({ label, ...props }) => {
  const theme = useTheme();

  const formattedLabel = label[0] === "/" ? label.slice(1) : label;

  return (
    <Button
      {...props}
      component={ReactRouterLink}
      sx={{
        padding: "0 0.5rem",
        color: theme.palette.text.secondary,
        backgroundColor: theme.palette.background.default,
        border: "solid 1px",
        "&:hover": {
          opacity: 0.7,
        },
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
