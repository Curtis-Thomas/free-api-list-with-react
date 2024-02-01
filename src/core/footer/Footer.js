import React from "react";
import { AppBar, Typography, Toolbar, useTheme } from "@mui/material";

const Footer = () => {
  const theme = useTheme();

  return (
    <AppBar
      position="fixed"
      component="footer"
      sx={{
        top: "auto",
        bottom: 0,
        height: "5vh",
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Toolbar sx={{ justifyContent: "center" }}>
        <Typography variant="body2" sx={{ color: theme.palette.text.primary }}>
          Copyright © {new Date().getFullYear()} Free API List Contributors
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
