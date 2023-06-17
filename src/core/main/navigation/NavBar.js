import React from "react";

import { AppBar, Toolbar, Box } from "@mui/material";

import Link from "./Link";

/**
 * Component for a navigation bar that displays links.
 *
 * @param {string} link - The URL for the link.
 * @param {string} route2 - The route for the second link.
 */
const NavBar = ({ link, route2 }) => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Link label="Home" to={"/"} />
          </Box>
          <Box sx={{ overflow: "hidden", whiteSpace: "nowrap" }}>
            {/* since each 'category' link has dash at the end, 
              remove it before passing to Link component
              for clarity */}
            {link && <Link label={link.slice(0, -4)} to={link} />}
            {route2 && (
              <>
                <span
                  style={{
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
