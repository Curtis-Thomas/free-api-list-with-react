import { Box, Typography, Button } from "@mui/material";

const Endpoints = ({ header, endpoint, description, example }) => {
  const handleCopyEndpoint = () => {
    navigator.clipboard
      .writeText(endpoint)
      .then(() => {
        console.log("Copied endpoint to clipboard:", endpoint);
      })
      .catch((error) => {
        console.error("Failed to copy endpoint to clipboard:", error);
      });
  };

  const handleCopyExample = () => {
    navigator.clipboard
      .writeText(example)
      .then(() => {
        console.log("Copied example to clipboard:", example);
      })
      .catch((error) => {
        console.error("Failed to copy example to clipboard:", error);
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
