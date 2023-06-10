import { Typography, Box, Button } from "@mui/material";

const BoxApiInfo = ({ baseEndpoint }) => {
  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(baseEndpoint)
      .then(() => {
        console.log("Copied to clipboard:", baseEndpoint);
      })
      .catch((error) => {
        console.error("Failed to copy to clipboard:", error);
      });
  };

  return (
    <Box sx={{ height: "5vh", marginTop: "5vh", marginBottom: "10vh" }}>
      <Typography>Base URL:</Typography>
      <Typography>{baseEndpoint}</Typography>
      <Button variant="outlined" onClick={handleCopyClick}>
        Copy
      </Button>
    </Box>
  );
};

export default BoxApiInfo;
