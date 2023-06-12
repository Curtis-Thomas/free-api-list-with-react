import React from "react";

import { AppBar, Toolbar, Box } from "@mui/material";

import Link from "./Link";

const NavBar = ({ link, route2 }) => {
  return (
    <>
      <AppBar position="static" style={{ backgroundColor: "#bbb" }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Link label="Home" to={"/"} />
          </Box>
          <Box>
            {/* since each 'category' link has dash at the end, 
              remove it before passing to Link component
              for clarity */}
            {link && <Link label={link.slice(0, -4)} to={link} />}
            {route2 && (
              <>
                <span
                  style={{
                    color: "black",
                    pointerEvents: "none",
                    tabIndex: "-1",
                  }}
                >
                  {" ▶ "}
                </span>
                <Link label={route2} to="#" />
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <br />
    </>
  );
};

export default NavBar;
