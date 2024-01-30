import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, useTheme } from "@mui/material";

const BarLeftSearchBoxBtn = ({ btnName, navigateTo }) => {
  const theme = useTheme();

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(navigateTo);
  };

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        maxWidth: "100%",
      }}
    >
      <Button
        onClick={handleClick}
        sx={{
          border: "none",
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.secondary,
          transition: "none",

          "&:hover": {
            opacity: 0.8,
          },
        }}
      >
        {btnName}
      </Button>
    </Box>
  );
};

export default BarLeftSearchBoxBtn;
