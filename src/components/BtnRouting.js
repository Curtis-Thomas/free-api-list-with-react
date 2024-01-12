import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography, useTheme } from "@mui/material";



const BtnRouting = ({
  btnName,
  navigateTo,
  backgroundColor,
  textColor,
  amount = 0
}) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const hoverShadow = function () {
    return "0px 4px 10px rgba(0, 119, 186, 1)" // Dark mode shadow
  };
  const handleClick = () => {
    navigate(navigateTo);
  }
  const hoverColorChange = () => {
    if(amount > 0){
      return "black"
    }
    else{
      return "white"
    }
  }

  return (
    <Box
      sx={{
        display: "flex",
        width: "80%",
        maxWidth: "100%",
        marginBottom: 2,
        marginLeft: "auto",
        marginRight: "auto",
      }
      }
    >
      <Button
        fullWidth
        onClick={handleClick}
        sx={{
          color: textColor || theme.components.MuiButton.styleOverrides.root.color,
          backgroundColor: backgroundColor || theme.components.MuiButton.styleOverrides.root.backgroundColor,
          padding: "12px 24px",
          borderRadius: "8px",
          transition: "background-color 0.3s ease, opacity 0.3s ease",
          "&:hover": {
            color: hoverColorChange(),
            backgroundColor: backgroundColor || theme.components.MuiButton.styleOverrides.root.backgroundColor,
            opacity: 1,
            boxShadow: hoverShadow(),
          },
        }}
      >
        <Typography
          variant="button"
          sx={{ fontWeight: "bold", textTransform: "none", fontSize: "16px" }}
        >
          {btnName}{" "}
          {amount && <span style={{ paddingLeft: 0.5 }}>{amount}</span>}
        </Typography>
      </Button>
    </Box >
  );
}

export default BtnRouting;
