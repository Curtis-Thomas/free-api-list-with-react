import React from "react";
import { Box, Typography } from "@mui/material";

const StylingCustomStyling = () => {
  return (
    <Box sx={{ border: "solid 1px #333333", padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        Overriding Component Styles
      </Typography>
      <Typography paragraph>
        Material UI allows for easy overriding of default component styles. This
        flexibility enables developers to tailor the appearance of components to
        meet specific design requirements, ensuring that each element aligns
        with the overall UI design.
      </Typography>

      <Typography variant="h6" gutterBottom>
        CSS-in-JS Styling
      </Typography>
      <Typography paragraph>
        CSS-in-JS is a powerful pattern for styling components in React.
        Material UI supports this approach, allowing developers to define styles
        directly within their JavaScript code, leading to more dynamic and
        context-aware styling decisions.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Global CSS Overrides
      </Typography>
      <Typography paragraph>
        For broader styling changes across the application, Material UI supports
        global CSS overrides. This feature is particularly useful for applying
        uniform styles, such as fonts or margins, across all components in the
        application.
      </Typography>
    </Box>
  );
};

export default StylingCustomStyling;
