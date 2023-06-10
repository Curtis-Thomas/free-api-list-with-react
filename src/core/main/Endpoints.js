import { Box, Typography, Button } from "@mui/material";

const Endpoints = ({ header, endpoint, description }) => {
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
    <Box sx={{ border: "solid 1px #3333", padding: 2, marginBottom: 2 }}>
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
        <Typography>Description :{description}</Typography>
      </Box>
    </Box>
  );
};

export default Endpoints;
