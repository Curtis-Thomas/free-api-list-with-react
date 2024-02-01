import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import StylingIntroduction from "./StylingIntroduction";
import StylingFramework from "./StylingFramework";
import StylingTypography from "./StylingTypography";
import StylingColors from "./StylingColors";
import StylingIconsGraphics from "./StylingIconsGraphics";
import StylingThemingOptions from "./StylingThemingOptions";
import StylingCustomStyling from "./StylingCustomStyling";
import StylingBestPractices from "./StylingBestPractices";

const StylingTheming = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        padding: 2,
        color: theme.palette.text.primary,
      }}
    >
      <Accordion sx={{ backgroundColor: theme.palette.background.default }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Introduction</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <StylingIntroduction />
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ backgroundColor: theme.palette.background.default }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Framework</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <StylingFramework />
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ backgroundColor: theme.palette.background.default }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Typography</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <StylingTypography />
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ backgroundColor: theme.palette.background.default }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Colors</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <StylingColors />
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ backgroundColor: theme.palette.background.default }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Icons and Graphics</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <StylingIconsGraphics />
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ backgroundColor: theme.palette.background.default }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Theming Options</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <StylingThemingOptions />
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ backgroundColor: theme.palette.background.default }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Custom Styling</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <StylingCustomStyling />
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ backgroundColor: theme.palette.background.default }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Best Practices</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <StylingBestPractices />
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default StylingTheming;
