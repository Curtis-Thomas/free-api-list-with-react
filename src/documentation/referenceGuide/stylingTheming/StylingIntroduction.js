import React from "react";
import { Box, Typography } from "@mui/material";

const StylingIntroduction = () => {
  return (
    <Box sx={{ border: "solid 1px #333333", padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        Purpose of Styling and Theming Guidelines
      </Typography>
      <Typography paragraph>
        The styling and theming guidelines serve as a roadmap for creating a
        cohesive and visually appealing user interface. They ensure that all
        components within the application maintain a uniform look and feel,
        enhancing the overall user experience.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Importance of Consistent Design
      </Typography>
      <Typography paragraph>
        Consistent design is crucial in building intuitive and accessible
        interfaces. It aids in creating a predictable and easy-to-navigate
        environment, which helps users quickly become familiar with the
        application's functionality and aesthetics. This consistency also
        streamlines the development process, making it easier to implement and
        maintain a unified design language across the project.
      </Typography>
    </Box>
  );
};

export default StylingIntroduction;
