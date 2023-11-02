import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

/**
 * Component for a routing button that navigates to a specified route.
 *
 * @param {string} btnName - The name or label for the button.
 * @param {string} navigateTo - The path or route to navigate to when the button is clicked.
 * @param {string} backgroundColor - The background color of the button.
 * @param {string} textColor - The text color of the button.
 */
const BtnRouting = ({
  btnName,
  navigateTo,
  backgroundColor,
  textColor,
  amount,
}) => {
  const navigate = useNavigate();

  /**
   * Handles the click event of the button and navigates to the specified route.
   */
  const handleClick = () => {
    navigate(navigateTo);
  };

  return (
    <Box
      sx={{
        display: "flex",
        width: "95%",
        maxWidth: "100%",
        marginBottom: 2,
        borderRadius: "3px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Button
        fullWidth={true}
        onClick={handleClick}
        sx={{
          color: textColor,
          backgroundColor: backgroundColor,
          "&:hover": {
            backgroundColor: backgroundColor,
          },
        }}
      >
        {btnName}
        <Typography
          sx={{
            fontWeight: "bold",
            paddingLeft: 0.5,
          }}
        >
          {amount}
        </Typography>
      </Button>
    </Box>
  );
};

export default BtnRouting;
