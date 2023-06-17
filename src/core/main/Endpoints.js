import { Box, Typography, Button } from "@mui/material";

/**
 * Component for displaying an endpoint with a header, endpoint URL, and description.
 *
 * @param {string} header - The header text for the endpoint.
 * @param {string} endpoint - The URL of the endpoint.
 * @param {string} description - The description of the endpoint.
 */
const Endpoints = ({ header, endpoint, description }) => {
  /**
   * Handles copying the endpoint URL to the clipboard.
   */
  const handleCopyEndpoint = () => {
    clearClipboard()
      .then(() => {
        return navigator.clipboard.writeText(endpoint);
      })
      .then(() => {
        console.log("Copied endpoint to clipboard:", endpoint);
      })
      .catch((error) => {
        console.error("Failed to copy endpoint to clipboard:", error);
      });
  };

  /**
   * Clears the clipboard by creating a temporary textarea element and simulating a cut command.
   *
   * @returns {Promise} - A promise that resolves when the clipboard is cleared successfully.
   */
  const clearClipboard = () => {
    return new Promise((resolve, reject) => {
      const textarea = document.createElement("textarea");
      textarea.value = "";
      document.body.appendChild(textarea);
      textarea.select();

      try {
        const successful = document.execCommand("cut");
        if (!successful) {
          throw new Error("Clearing clipboard failed");
        }
        resolve();
      } catch (error) {
        reject(error);
      } finally {
        document.body.removeChild(textarea);
      }
    });
  };

  return (
    <Box sx={{ border: "solid 1px #bbb", padding: 2, marginBottom: 2 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography>{header}</Typography>
        </Box>
        <Box>
          <Typography>{endpoint}</Typography>
        </Box>
        <Box>
          <Button variant="outlined" onClick={handleCopyEndpoint}>
            Copy Endpoint
          </Button>
        </Box>
      </Box>
      <Box>
        <Typography>Description: {description}</Typography>
      </Box>
    </Box>
  );
};

export default Endpoints;
