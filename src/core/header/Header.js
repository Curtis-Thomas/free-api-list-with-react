import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  AppBar,
  Switch,
  Toolbar,
  Typography,
  IconButton,
  Stack,
  Menu,
  MenuItem,
  Tooltip,
  Hidden,
  useMediaQuery,
  Divider,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import BuildIcon from '@mui/icons-material/Build';
import DescriptionIcon from '@mui/icons-material/Description';

/* The Header component represents the application's navigation bar.
   It includes a title "Free API List" with a link to the home page.
   The component adapts its layout based on the screen size, rendering
   either a mobile or desktop menu. The mobile menu is hidden on larger screens.
   The menu includes buttons to navigate to "Tools" and "Docs," and a switch to
   toggle between light and dark themes. The state of the dark mode is controlled
   by the parent component through the `toggleDarkMode` prop. */

/**
 * Header component for the application.
 */
const Header = ({ toggleDarkMode }) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  // Check if the device width is mobile
  const isMobile = useMediaQuery('(max-width: 712px)');

  /**
   * Handles the click event of the "Tools" button and navigates to the "Tools" route.
   */
  const handleToolsClick = () => {
    navigate('Tools');
    handleMenuClose();
  };

  /**
   * Handles the click event of the "Docs" button and navigates to the "Docs" route.
   */
  const handleDocsClick = () => {
    navigate('Docs');
    handleMenuClose();
  };

  /**
   * Handles the click event of the Menu button. Opens and closes the Menu.
  
   */
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  /**
   * Closes the Menu.
   */
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  /**
   * Handles the toggle event of the dark mode switch.
   */
  const handleSwitchToggle = () => {
    setDarkMode(!darkMode); // Toggle the state of the switch
    toggleDarkMode();
  };

  return (
    <AppBar position="fixed">
      <Toolbar>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <div>
            <Typography role="heading" aria-level="1"
             variant="h6" component="div">
              <Link
                to="/"
                style={{ textDecoration: 'none', color: 'inherit' }}>
                Free API List
              </Link>
            </Typography>
          </div>


          <div style={{ textAlign: 'right' }}>

            {/* Render different components based on screen size */}
            {isMobile ? (
              <Hidden mdUp>

                {/* Mobile Menu */}
                <IconButton 
                  onClick={handleMenuClick} 
                  edge="start"
                  aria-label="Open Menu">
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
                  {/* Menu Items for Tools, Docs, and Theme Switch */}

                  {/* Menu item 1 */}
                  <MenuItem 
                    onClick={handleToolsClick}
                    style={{ alignItems: 'center' }}
                    aria-label="Go to Tools">
                    <BuildIcon sx={{ transform: 'scale(1.5)', marginRight: 2, marginLeft: 1 }} />
                    <Typography variant="body1">Tools</Typography>
                  </MenuItem>
                    
                  {/* Menu item 2 */}
                  <MenuItem 
                    onClick={handleDocsClick}
                    style={{ alignItems: 'center' }}
                    aria-label="View Documentation">
                    <DescriptionIcon 
                      sx={{ transform: 'scale(1.5)', marginRight: 2, marginLeft: 1 }} />
                    <Typography variant="body1">Docs</Typography>
                  </MenuItem>

                  {/* Menu item 3 */}
                  <MenuItem style={{ alignItems: 'center' }}>
                    <Switch 
                      sx={{ transform: 'scale(1.3)', marginRight: 1, marginLeft: -1 }}
                      checked={darkMode} 
                      onChange={handleSwitchToggle}
                      aria-label={`Toggle ${darkMode ? 'light' : 'dark'} mode`} />
                    <Typography variant="body1">Theme</Typography>
                  </MenuItem>

                </Menu>
              </Hidden>
            ) : (
              <Hidden smDown>

                {/* Desktop Menu */}
                <Stack
                  direction="row"
                  alignItems="center">

                  {/* Tooltip for Tools */}
                  <Tooltip
                    title="Go to Tools"
                    placement="bottom">
                    <IconButton 
                      onClick={handleToolsClick} 
                      edge="start"
                      aria-label="Go to Tools">
                      <BuildIcon sx={{ margin: 1 }} />
                      <Typography variant="body1">Tools</Typography>
                    </IconButton>
                  </Tooltip>

                  {/* Tooltip for Docs */}
                  <Tooltip 
                    title="View Documentation"
                    placement="bottom">
                    <IconButton 
                      onClick={handleDocsClick} 
                      edge="start"
                      aria-label="View Documentation">
                      <DescriptionIcon sx={{ margin: 1 }} />
                      <Typography variant="body1">Docs</Typography>
                    </IconButton>
                  </Tooltip>

                  {/* Divider */}
                  <Divider 
                  orientation="vertical" 
                  flexItem sx={{ margin: 1 }}/>


                  {/* Tooltip for Theme Switch */}
                  <Tooltip title={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
                    placement="bottom">
                    <Switch 
                    checked={darkMode} 
                    onChange={handleSwitchToggle}
                    aria-label={`Toggle ${darkMode ? 'light' : 'dark'} mode`}  />
                  </Tooltip>
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

Header.propTypes = {
  toggleDarkMode: PropTypes.func.isRequired,
};

export default Header;
