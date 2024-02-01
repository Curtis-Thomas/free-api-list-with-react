import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

const StylingFramework = () => {
  const theme = useTheme();

  return (
    <Box sx={{ border: "solid 1px #333333", padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        Overview of Material UI
      </Typography>
      <Typography paragraph sx={{ color: theme.palette.text.secondary }}>
        Material UI is a popular UI framework for React applications, offering a
        comprehensive suite of pre-designed components. It follows Material
        Design principles, ensuring an aesthetically pleasing and functional
        design that enhances user interfaces with a modern look and feel.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Integration with React
      </Typography>
      <Typography paragraph sx={{ color: theme.palette.text.secondary }}>
        Material UI seamlessly integrates with React, providing a robust set of
        tools and components that are easy to customize and extend. This
        integration allows developers to quickly build elegant and responsive
        UIs while maintaining a consistent design language across the
        application.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Material UI Documentation
      </Typography>
      <Typography paragraph sx={{ color: theme.palette.text.secondary }}>
        The Material UI documentation is a comprehensive guide covering all
        aspects of the framework, from basic usage to advanced customization.
        It's an invaluable resource for developers looking to understand the
        full potential of Material UI and how to effectively apply its
        components and design principles in their React projects.
      </Typography>
    </Box>
  );
};

export default StylingFramework;
