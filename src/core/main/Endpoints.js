import { Box, Typography, Button } from "@mui/material";

const Endpoints = ({ header, endpoint, description, example }) => {
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

  const handleCopyExample = () => {
    clearClipboard()
      .then(() => {
        return navigator.clipboard.writeText(example);
      })
      .then(() => {
        console.log("Copied example to clipboard:", example);
      })
      .catch((error) => {
        console.error("Failed to copy example to clipboard:", error);
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
    <Box
      sx={{
        border: "solid 1px #3333",
        padding: 1,
      }}
    >
      <Typography>Endpoint</Typography>
      <br />

      <Typography>{header}</Typography>
      <br />
      <Typography>{endpoint}</Typography>
      <Button variant="outlined" onClick={handleCopyEndpoint}>
        Copy Endpoint
      </Button>
      <br />
      <br />

      <Typography>{description}</Typography>
      <br />

      <Typography>Example Request</Typography>
      <br />

      <Typography>{example}</Typography>
      <Button variant="outlined" onClick={handleCopyExample}>
        Copy Example
      </Button>
    </Box>
  );
};

export default Endpoints;
