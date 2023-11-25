import React, { } from 'react';
import { Link, useNavigate } from "react-router-dom";
import {
  AppBar,
  Switch,
  Toolbar,
  Typography,
  IconButton,
  Stack,
  Menu,
  MenuItem,
} from "@mui/material";

import BuildIcon from "@mui/icons-material/Build";
import DescriptionIcon from "@mui/icons-material/Description";
import MenuIcon from '@mui/icons-material/Menu';
import Hidden from "@mui/material/Hidden";
import useMediaQuery from '@mui/material/useMediaQuery';



/**
Component for the header of the application.
*/
const Header = ({ toggleDarkMode }) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [darkMode, setDarkMode] = React.useState(false);

  const isMobile = useMediaQuery('(max-width: 712px)');
  /**
Handles the click event of the "Tools" button and navigates to the "Tools" route.
*/

  const handleToolsClick = () => {
    navigate("Tools");
    handleMenuClose();
  };
  /**
Handles the click event of the "Docs" button and navigates to the "Docs" route.
*/
  const handleDocsClick = () => {
    navigate("Docs");
    handleMenuClose();
  };

  /**Handles the click event of the Menu button. Opens and closes the Menu*/
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSwitchToggle = () => {
    setDarkMode(!darkMode); //Toggle the state of the switch
    toggleDarkMode();
  };

  return (
    <AppBar position="fixed">
      <Toolbar>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div>
            <Typography variant="h6" component="div">
              <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                Free API List
              </Link>
            </Typography>
          </div>
          <div style={{ textAlign: "right" }}>
            {isMobile ? (
              <Hidden mdUp>
                <IconButton onClick={handleMenuClick} edge="start">
                  <MenuIcon />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                >
                  <MenuItem onClick={handleToolsClick}>
                    <BuildIcon sx={{ marginRight: 1 }} />
                    <Typography variant="body1">Tools</Typography>
                  </MenuItem>
                  <MenuItem onClick={handleDocsClick}>
                    <DescriptionIcon sx={{ marginRight: 1 }} />
                    <Typography variant="body1">Docs</Typography>
                  </MenuItem>
                  <MenuItem>
                    <Switch checked={darkMode} onChange={handleSwitchToggle} />
                  </MenuItem>
                </Menu>
              </Hidden>
            ) : (
              <Hidden smDown>
                <Stack direction="row" alignItems="center">
                  <IconButton onClick={handleToolsClick} edge="start">
                    <BuildIcon sx={{ margin: 1 }} />
                  </IconButton>
                  <IconButton onClick={handleDocsClick} edge="start">
                    <DescriptionIcon sx={{ margin: 1 }} />
                  </IconButton>
                  <Switch checked={darkMode} onChange={handleSwitchToggle} />
                </Stack>
              </Hidden>
            )}
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
