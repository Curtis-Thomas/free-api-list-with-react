import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import StylingIntroduction from "./StylingIntroduction";
import StylingFramework from "./StylingFramework";
import StylingTypography from "./StylingTypography";
import StylingColors from "./StylingColors";
import StylingIconsGraphics from "./StylingIconsGraphics";
import StylingThemingOptions from "./StylingThemingOptions";
import StylingCustomStyling from "./StylingCustomStyling";
import StylingBestPractices from "./StylingBestPractices";

const StylingTheming = () => {
  const [showIntroduction, setShowIntroduction] = useState(false);
  const [showFramework, setShowFramework] = useState(false);
  const [showTypography, setShowTypography] = useState(false);
  const [showColors, setShowColors] = useState(false);
  const [showIconsGraphics, setShowIconsGraphics] = useState(false);
  const [showThemingOptions, setShowThemingOptions] = useState(false);
  const [showCustomStyling, setShowCustomStyling] = useState(false);
  const [showBestPractices, setShowBestPractices] = useState(false);

  const toggleIntroduction = () => {
    setShowIntroduction(!showIntroduction);
  };

  const toggleFramework = () => {
    setShowFramework(!showFramework);
  };

  const toggleTypography = () => {
    setShowTypography(!showTypography);
  };

  const toggleColors = () => {
    setShowColors(!showColors);
  };

  const toggleIconsGraphics = () => {
    setShowIconsGraphics(!showIconsGraphics);
  };

  const toggleThemingOptions = () => {
    setShowThemingOptions(!showThemingOptions);
  };

  const toggleCustomStyling = () => {
    setShowCustomStyling(!showCustomStyling);
  };

  const toggleBestPractices = () => {
    setShowBestPractices(!showBestPractices);
  };

  const typographyStyle = {
    color: "#0077ba",
    cursor: "pointer",
  };

  return (
    <Box>
      <Typography onClick={toggleIntroduction} style={typographyStyle}>
        Introduction
      </Typography>
      {showIntroduction && <StylingIntroduction />}

      <Typography onClick={toggleFramework} style={typographyStyle}>
        Framework
      </Typography>
      {showFramework && <StylingFramework />}

      <Typography onClick={toggleTypography} style={typographyStyle}>
        Typography
      </Typography>
      {showTypography && <StylingTypography />}

      <Typography onClick={toggleColors} style={typographyStyle}>
        Colors
      </Typography>
      {showColors && <StylingColors />}

      <Typography onClick={toggleIconsGraphics} style={typographyStyle}>
        Icons and Graphics
      </Typography>
      {showIconsGraphics && <StylingIconsGraphics />}

      <Typography onClick={toggleThemingOptions} style={typographyStyle}>
        Theming Options
      </Typography>
      {showThemingOptions && <StylingThemingOptions />}

      <Typography onClick={toggleCustomStyling} style={typographyStyle}>
        Custom Styling
      </Typography>
      {showCustomStyling && <StylingCustomStyling />}

      <Typography onClick={toggleBestPractices} style={typographyStyle}>
        Best Practices
      </Typography>
      {showBestPractices && <StylingBestPractices />}
    </Box>
  );
};

export default StylingTheming;
