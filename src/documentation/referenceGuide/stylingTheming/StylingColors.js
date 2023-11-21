import React from "react";
import { Box, Typography } from "@mui/material";

const StylingColors = () => {
  return (
    <Box sx={{ border: "solid 1px #333333", padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        Color Palette
      </Typography>
      <Typography paragraph>
        A well-thought-out color palette is essential for creating a visually
        harmonious interface. Material UI provides a versatile palette system
        that can be customized to fit the branding and design needs of your
        application.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Primary Color
      </Typography>
      <Typography paragraph>
        The primary color represents the most dominant visual element in your
        UI, often used for navigation bars, buttons, and links. It's important
        to choose a primary color that stands out and aligns with your brand
        identity.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Secondary Color
      </Typography>
      <Typography paragraph>
        The secondary color provides a complementary contrast to the primary
        color. It is used for less prominent elements but still plays a key role
        in the overall color scheme.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Background Colors
      </Typography>
      <Typography paragraph>
        Background colors set the tone of different sections of the UI. Material
        UI allows for subtle variations in background colors to delineate
        different areas while maintaining a cohesive look.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Text Colors
      </Typography>
      <Typography paragraph>
        Text colors need to ensure sufficient contrast for readability. Material
        UI's color system includes options for high contrast text colors that
        are legible against various background shades.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Accent Colors
      </Typography>
      <Typography paragraph>
        Accent colors are used to highlight key elements and actions in the UI.
        These colors should be used sparingly to draw attention to important
        features or notifications.
      </Typography>
    </Box>
  );
};

export default StylingColors;
