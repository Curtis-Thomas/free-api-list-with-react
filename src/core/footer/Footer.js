import React from "react";
import { AppBar, Typography, Toolbar } from "@mui/material";

const Footer = () => {
  return (
    <AppBar position="fixed" component="footer" sx={{ top: "auto", bottom: 0 }}>
      <Toolbar sx={{ justifyContent: "center" }}>
        <Typography variant="body2">
          Copyright © {new Date().getFullYear()} Curtis Thomas and the Free API
          List with React contributors
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
