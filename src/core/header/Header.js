import { Link, useNavigate } from "react-router-dom";
import {
  AppBar,
  Switch,
  Toolbar,
  Typography,
  IconButton,
  Stack,
} from "@mui/material";

import BuildIcon from "@mui/icons-material/Build";
import DescriptionIcon from "@mui/icons-material/Description";

/**
 * Header Component for the application.
 * 
 * @param {Object} props - Component properties.
 * @param {Function} props.toggleDarkMode - Function to toggle dark mode.
 */
const Header = ({ toggleDarkMode }) => {
  // Get navigation function from React Router
  const navigate = useNavigate();

  /**
   * Handles the click event of the "Tools" button and navigates to the "Tools" route.
   */
  const handleToolsClick = () => {
    navigate("Tools");
  };

  /**
   * Handles the click event of the "Docs" button and navigates to the "Docs" route.
   */
  const handleDocsClick = () => {
    navigate("Docs");
  };

  return (
    <AppBar position="static">
      <Toolbar>
        {/* Main container with flex layout */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          {/* Left side of the header */}
          <div>
            {/* Logo and link to home */}
            <Typography variant="h6" component="div">
              <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                Free API List
              </Link>
            </Typography>
          </div>

          {/* Right side of the header */}
          <div style={{ textAlign: "right" }}>
            {/* Tool icons and Dark mode switch */}
            <Stack direction="row" spacing={1}>
              {/* Tools button */}
              <IconButton onClick={handleToolsClick} edge="end">
                <BuildIcon />
              </IconButton>
              {/* Docs button */}
              <IconButton onClick={handleDocsClick} edge="end">
                <DescriptionIcon />
              </IconButton>
              {/* Dark mode switch */}
              <Switch onChange={toggleDarkMode} />
            </Stack>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
