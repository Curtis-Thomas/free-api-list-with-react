import { Box, Button, Typography } from "@mui/material";

const Header = () => {
  return (
    <Box
      sx={{
        alignItems: "center",
        minHeight: "5vh",
        backgroundColor: "#313335",
        color: "white",
        textAlign: "center",
        padding: 2,
      }}
    >
      <Typography>Free API List with React</Typography>
      <Box>
        <Button>Tools</Button>
        <Button>Docs</Button>
      </Box>
    </Box>
  );
};

export default Header;
