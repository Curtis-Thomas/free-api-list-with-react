import { Box, Typography } from "@mui/material";

const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        minHeight: "5vh",
        justifyContent: "center",
      }}
    >
      <Typography>
        Free API List with React, a collection of free APIs across different
        categories. Btn White = Empty
      </Typography>
    </Box>
  );
};

export default Header;
