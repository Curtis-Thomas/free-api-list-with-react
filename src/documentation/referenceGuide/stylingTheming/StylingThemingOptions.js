import React from "react";
import { Box, Typography } from "@mui/material";

const StylingThemingOptions = () => {
  return (
    <Box sx={{ border: "solid 1px #333333", padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        Custom Theming
      </Typography>
      <Typography paragraph>
        Custom theming in Material UI allows for extensive personalization of
        the UI. Developers can create unique themes that align with their brand
        identity, providing a distinct look and feel for their applications.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Theming Variables
      </Typography>
      <Typography paragraph>
        Theming variables are key to building a consistent and maintainable UI.
        Material UI's theming system includes variables for colors, typography,
        spacing, and more, enabling developers to define and apply a cohesive
        design across the application.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Dark Mode and Light Mode
      </Typography>
      <Typography paragraph>
        Material UI supports both dark mode and light mode, catering to user
        preferences and accessibility needs. This feature enhances user
        experience by providing options for different viewing conditions and
        personal preferences.
      </Typography>
    </Box>
  );
};

export default StylingThemingOptions;
