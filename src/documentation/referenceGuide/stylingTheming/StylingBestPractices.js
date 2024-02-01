import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

const StylingBestPractices = () => {
  const theme = useTheme();

  return (
    <Box sx={{ border: "solid 1px #333333", padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        Consistency in Styling
      </Typography>
      <Typography paragraph sx={{ color: theme.palette.text.secondary }}>
        Consistency in styling is key to creating a coherent and user-friendly
        interface. It involves maintaining a uniform look and feel throughout
        the application by using a consistent color scheme, typography, and
        spacing, which enhances the overall user experience.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Accessibility Considerations
      </Typography>
      <Typography paragraph sx={{ color: theme.palette.text.secondary }}>
        Accessibility in styling ensures that your application is usable by
        people with varying abilities. This includes considering color contrast,
        text sizes, and keyboard navigation. Following accessibility guidelines
        is crucial for creating an inclusive and user-centric design.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Responsive Design
      </Typography>
      <Typography paragraph sx={{ color: theme.palette.text.secondary }}>
        Responsive design is essential in modern web development. It ensures
        that your application looks and functions well on various devices and
        screen sizes. This involves using flexible layouts, media queries, and
        adaptive images.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Performance Optimization
      </Typography>
      <Typography paragraph sx={{ color: theme.palette.text.secondary }}>
        Optimizing the performance of your styling is vital for a fast and
        smooth user experience. This includes minimizing CSS size, reducing
        re-renders, and efficiently managing resources. Performance optimization
        contributes to quicker load times and a more responsive application.
      </Typography>
    </Box>
  );
};

export default StylingBestPractices;
