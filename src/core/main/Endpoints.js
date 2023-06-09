import { Box, Typography } from "@mui/material";

const Endpoints = ({ header, endpoint, description, example }) => {
  return (
    <Box>
      <Typography>Endpoint</Typography>
      <br></br>

      <Typography>
        {header} {endpoint}
      </Typography>
      <Box display="block"></Box>

      <Typography>{description}</Typography>
      <br></br>

      <Typography>Example Request</Typography>
      <br></br>

      <Typography>{example}</Typography>
    </Box>
  );
};

export default Endpoints;
