import { Typography, Box } from "@mui/material";

const BoxApiInfo = ({ baseEndpoint }) => {
  return (
    <Box sx={{ height: "5vh", marginTop: "5vh", marginBottom: "5vh" }}>
      <Typography>Base URL: {baseEndpoint}</Typography>
    </Box>
  );
};

export default BoxApiInfo;
