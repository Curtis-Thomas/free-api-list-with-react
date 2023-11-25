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
import Divider from '@mui/material/Divider';



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
                  PaperProps={{
                    style: {
                      width: '100%',
                    },
                  }}
                  fullWidth={true}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                >
                  <MenuItem onClick={handleToolsClick} style={{ alignItems: 'center' }}>
                    <BuildIcon sx={{ transform: 'scale(1.5)', marginRight: 2, marginLeft: 1 }} />
                    <Typography variant="body1">Tools</Typography>
                  </MenuItem>
                  <MenuItem onClick={handleDocsClick} style={{ alignItems: 'center' }}>
                    <DescriptionIcon sx={{ transform: 'scale(1.5)', marginRight: 2, marginLeft: 1 }} />
                    <Typography variant="body1">Docs</Typography>
                  </MenuItem>
                  <MenuItem style={{ alignItems: 'center' }}>
                    <Switch sx={{ transform: 'scale(1.3)', marginRight: 1, marginLeft: -1 }} checked={darkMode} onChange={handleSwitchToggle} />
                    <Typography variant="body1">Theme</Typography>
                  </MenuItem>
                </Menu>
              </Hidden>
            ) : (
              <Hidden smDown>
                <Stack direction="row" alignItems="center">
                  <IconButton onClick={handleToolsClick} edge="start">
                    <BuildIcon sx={{ margin: 1 }} />
                    <Typography variant="body1">Tools</Typography>
                  </IconButton>
                  <IconButton onClick={handleDocsClick} edge="start">
                    <DescriptionIcon sx={{ margin: 1 }} />
                    <Typography variant="body1">Docs</Typography>
                  </IconButton>
                  <Divider orientation="vertical" flexItem sx={{ margin: 1 }} />
                  <Switch checked={darkMode} onChange={handleSwitchToggle} />
                  <Typography variant="body1">Theme</Typography>
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
