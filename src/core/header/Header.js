import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

const Header = () => {
  const navigate = useNavigate();
  const handleToolsClick = () => {
    navigate("Tools");
  };
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
      <Typography>Free API List with React</Typography>
      <Box>
        <Button onClick={handleToolsClick}>Tools</Button>
        <Button onClick={handleDocsClick}>Docs</Button>
      </Box>
    </Box>
  );
};

export default Header;
