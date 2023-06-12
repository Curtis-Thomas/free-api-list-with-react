import { Typography, Box, Button } from "@mui/material";

/**
 * Component for displaying API information, including a base URL and a copy button.
 *
 * @param {string} baseEndpoint - The base URL of the API.
 */
const BoxApiInfo = ({ baseEndpoint }) => {
  /**
   * Handles the click event of the copy button and copies the base URL to the clipboard.
   */
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
