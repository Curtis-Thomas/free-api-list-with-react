import React from "react";
import { AppBar, Typography, Toolbar } from "@mui/material";

const Footer = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: "center" }}>
        <Typography>
          Copyright 2023 - 2023, Curtis Thomas and the Free API List with React
          contributors.
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
