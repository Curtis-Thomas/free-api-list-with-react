import { useNavigate } from "react-router-dom";
import { Box, Button } from "@mui/material";

/**
 * Component for a routing button that navigates to a specified route.
 *
 * @param {string} btnName - The name or label for the button.
 * @param {string} navigateTo - The path or route to navigate to when the button is clicked.
 * @param {string} backgroundColor - The background color of the button.
 * @param {string} textColor - The text color of the button.
 */
const BtnRouting = ({ btnName, navigateTo, backgroundColor, textColor }) => {
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
        width: "95%",
        maxWidth: "100%",
        marginBottom: 2,
        backgroundColor: `${backgroundColor}`,
        border: "solid 1px #8d6cab",
        borderRadius: "3px",
      }}
    >
      <Button
        fullWidth={true}
        onClick={handleClick}
        style={{ color: `${textColor}` }}
        sx={{ border: "solid 1px #0077ba" }}
      >
        {btnName}
      </Button>
    </Box>
  );
};

export default BtnRouting;
