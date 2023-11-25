import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

const BtnRouting = ({
  btnName,
  navigateTo,
  backgroundColor,
  textColor,
  amount,
}) => {
  const navigate = useNavigate();

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
      }
      }
    >
      <Button
        fullWidth
        onClick={handleClick}
        sx={{
          color: textColor,
          backgroundColor: backgroundColor,
          padding: "12px 24px",
          borderRadius: "8px",
          transition: "background-color 0.3s ease, opacity 0.3s ease",
          "&:hover": {
            backgroundColor: backgroundColor,
            opacity: 0.70,
          },
          borderRadius: "8px",
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
};

export default BtnRouting;
