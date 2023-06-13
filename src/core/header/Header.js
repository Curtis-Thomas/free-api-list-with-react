import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

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
    <Box
      sx={{
        alignItems: "center",
        minHeight: "5vh",
        backgroundColor: "#313335",
        color: "white",
        textAlign: "center",
        padding: 2,
      }}
    >
      <Typography variant="h1" fontSize={20}>
        Free API List with React
      </Typography>
      <Box>
        <Button onClick={handleToolsClick}>Tools</Button>
        <Button onClick={handleDocsClick}>Docs</Button>
        <Button onClick={toggleDarkMode}>Dark Mode</Button>
      </Box>
    </Box>
  );
};

export default Header;
