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
    <Box
      sx={{
        height: "5vh",
        marginTop: "5vh",
        marginBottom: "10vh",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <Box>
        <Typography>Base URL:</Typography>
      </Box>
      <Box>
        <Typography>{baseEndpoint}</Typography>
      </Box>
      <Box>
        <Button variant="outlined" onClick={handleCopyClick}>
          Copy
        </Button>
      </Box>
    </Box>
  );
};

export default BoxApiInfo;
