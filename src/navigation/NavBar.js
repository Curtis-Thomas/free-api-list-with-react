import React from "react";
import { AppBar, Toolbar, Box, Typography, useTheme } from "@mui/material";
import Link from "./Link";

const NavBar = ({ link, route2 }) => {
  const theme = useTheme();

  return (
    <AppBar
      position="static"
      sx={{
        marginBottom: 4,
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: "flex" }}>
          <Link label="Home" to={"/"} />
        </Box>
        <Box
          sx={{
            overflow: "hidden",
            whiteSpace: "nowrap",
            display: "flex",
            alignItems: "center",
          }}
        >
          {link && <Link label={link.slice(0, -4)} to={link} />}
          {route2 && (
            <>
              <Typography variant="subtitle1" sx={{ mx: 1 }}>
                ▶
              </Typography>
              <Link label={route2} to="#" />
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
