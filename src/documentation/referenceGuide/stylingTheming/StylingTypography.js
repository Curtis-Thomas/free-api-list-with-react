import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

const StylingTypography = () => {
  const theme = useTheme();

  return (
    <Box sx={{ border: "solid 1px #333333", padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        Font Families
      </Typography>
      <Typography paragraph sx={{ color: theme.palette.text.secondary }}>
        The choice of font families in a UI is crucial for readability and brand
        representation. Material UI allows for easy customization of font
        families to match the aesthetic and tone of your application.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Font Sizes
      </Typography>
      <Typography paragraph sx={{ color: theme.palette.text.secondary }}>
        Font sizes play a key role in hierarchy and legibility. Material UI
        provides a scale of font sizes that can be adjusted to ensure text is
        clear and easily readable across various devices and screen sizes.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Font Weights
      </Typography>
      <Typography paragraph sx={{ color: theme.palette.text.secondary }}>
        Font weight variations are essential for emphasizing and differentiating
        sections of text. Material UI supports multiple font weight options to
        enhance the typographic layout of your application.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Text Alignment
      </Typography>
      <Typography paragraph sx={{ color: theme.palette.text.secondary }}>
        Proper text alignment is crucial for a balanced and coherent layout.
        Material UI offers flexibility in aligning text to match the flow and
        structure of the content, ensuring a professional and accessible
        interface.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Line Heights
      </Typography>
      <Typography paragraph sx={{ color: theme.palette.text.secondary }}>
        Line height affects the readability and overall appearance of text
        blocks. Material UI's typography system includes adjustable line heights
        to optimize text for better readability and visual appeal.
      </Typography>
    </Box>
  );
};

export default StylingTypography;
