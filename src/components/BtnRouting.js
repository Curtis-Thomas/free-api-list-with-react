import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography, useTheme } from "@mui/material";

const BtnRouting = ({
  btnName,
  navigateTo,
  backgroundColor,
  textColor,
  amount = 0,
}) => {
  const navigate = useNavigate();
  const theme = useTheme();

  const handleClick = () => {
    navigate(navigateTo);
  };
  return (
    <Box
      sx={{
        display: "flex",
        width: "80%",
        maxWidth: "100%",
        marginBottom: 2,
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Button
        fullWidth
        onClick={handleClick}
        sx={{
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.background.default,
          padding: "12px 24px",
          borderRadius: "8px",
          border: "1px solid",
          "&:hover": {
            borderColor: theme.palette.text.secondary,
            opacity: 0.8,
            border: "1px dashed",
          },
        }}
      >
        <Box sx={{ height: "100%", width: "90%" }}>
          <Typography
            variant="button"
            sx={{ fontWeight: "bold", textTransform: "none", fontSize: "16px" }}
          >
            {btnName}
          </Typography>
        </Box>
        <Box sx={{ height: "100%", width: "10%" }}>
          <Typography
            variant="button"
            sx={{
              fontWeight: "bold",
              textTransform: "none",
              fontSize: "16px",
              color: theme.palette.text.secondary,
            }}
          >
            {amount}
          </Typography>
        </Box>
      </Button>
    </Box>
  );
};

export default BtnRouting;
