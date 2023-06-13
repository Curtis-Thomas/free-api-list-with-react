// https://stackoverflow.com/questions/63216730/can-you-use-material-ui-link-with-react-router-dom-link

import React from "react";

import { Link as ReactRouterLink } from "react-router-dom";

import { Button } from "@mui/material";

const onMouseOver = (e) => {
  e.target.style.backgroundColor = "#a1a1a1";
};

const onMouseOut = (e) => {
  e.target.style.backgroundColor = "#bbb";
};

const linkStyle = {
  padding: "0 0.5rem",
  textDecoration: "none",
  color: "black",
  border: "none",
  backgroundColor: "#bbb",
};

const Link = (props) => {
  let label = props.label;

  if (label[0] === "/") {
    label = label.slice(1);
  }

  return (
    <Button
      {...props}
      component={ReactRouterLink}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      aria-label={`nav-${label}`}
      onKeyPress={(e) => {
        /* add spacebar for accessibility
        this is on by default for buttons,
        but since ReactRouterLink is being used,
        it needs to be added manually */
        if (e.key === " ") {
          e.preventDefault();
          e.target.click();
        }
      }}
      style={linkStyle}
    >
      {label}
    </Button>
  );
};

export default Link;
