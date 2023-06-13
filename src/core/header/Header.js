import { useNavigate } from "react-router-dom";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

/**
 * Component for the header of the application.
 */
const Header = ({ toggleDarkMode }) => {
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
        <Box>
          <Typography variant="h1" fontSize={20} component="div">
            Free API List with React
          </Typography>
        </Box>

        <Box sx={{ marginLeft: "auto" }}>
          <Button onClick={handleToolsClick}>Tools</Button>
          <Button onClick={handleDocsClick}>Docs</Button>
        </Box>
        <Box>
          <Button onClick={toggleDarkMode}>Dark Mode</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
