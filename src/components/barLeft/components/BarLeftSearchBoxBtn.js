import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button } from "@mui/material";

const BarLeftSearchBoxBtn = ({ btnName, navigateTo }) => {
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
          backgroundColor: "white",
        }}
      >
        {btnName}
      </Button>
    </Box>
  );
};

export default BarLeftSearchBoxBtn;
