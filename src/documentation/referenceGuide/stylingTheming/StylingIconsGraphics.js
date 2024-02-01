import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

const StylingIconsGraphics = () => {
  const theme = useTheme();

  return (
    <Box sx={{ border: "solid 1px #333333", padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        Icon Libraries
      </Typography>
      <Typography paragraph sx={{ color: theme.palette.text.secondary }}>
        Icon libraries provide a vast array of symbols to enhance user interface
        design. Material UI integrates seamlessly with popular icon libraries,
        offering a wide range of icons for various UI elements and actions.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Icon Usage Guidelines
      </Typography>
      <Typography paragraph sx={{ color: theme.palette.text.secondary }}>
        Proper usage of icons is key to intuitive UI design. Icons should be
        used consistently and be easily recognizable. Material UI guidelines
        suggest best practices for size, spacing, and alignment to ensure icons
        contribute positively to the user experience.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Graphics and Illustrations
      </Typography>
      <Typography paragraph sx={{ color: theme.palette.text.secondary }}>
        Graphics and illustrations add a visual appeal to the application,
        making it more engaging and user-friendly. Material UI supports the
        integration of various graphic elements, allowing for creative and
        visually appealing designs that complement the UI’s overall theme.
      </Typography>
    </Box>
  );
};

export default StylingIconsGraphics;
