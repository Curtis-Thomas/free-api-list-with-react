import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
  useTheme,
} from "@mui/material";

function BarRight({ onThemeChange, currentTheme }) {
  const theme = useTheme();

  const handleChange = (event) => {
    const selectedTheme = event.target.value;
    onThemeChange(selectedTheme); // Call the parent callback with the selected theme
  };

  return (
    <Box
      sx={{
        paddingTop: "5vh",
        height: "90vh",
        backgroundColor: theme.palette.background.default,
        pl: 5,
      }}
    >
      <Typography variant="h6" sx={{ color: theme.palette.text.primary }}>
        Choose Color Theme{" "}
      </Typography>

      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          value={currentTheme}
          onChange={handleChange}
          name="radio-buttons-group"
          sx={{ color: theme.palette.text.secondary }}
        >
          <FormControlLabel value="light" control={<Radio />} label="Light" />
          <FormControlLabel value="dark" control={<Radio />} label="Dark" />
          <FormControlLabel
            value="dracula"
            control={<Radio />}
            label="Dracula"
          />
          <FormControlLabel value="cobalt" control={<Radio />} label="Cobalt" />
          <FormControlLabel
            value="gruvbox"
            control={<Radio />}
            label="Gruvbox"
          />
          <FormControlLabel
            value="highcontrast"
            control={<Radio />}
            label="High Contrast"
          />
          <FormControlLabel value="mero" control={<Radio />} label="Mero" />
          <FormControlLabel
            value="onedark"
            control={<Radio />}
            label="One Dark"
          />
          <FormControlLabel
            value="radical"
            control={<Radio />}
            label="Radical"
          />
          <FormControlLabel
            value="synthwave"
            control={<Radio />}
            label="Synth Wave"
          />
          <FormControlLabel
            value="tokyonight"
            control={<Radio />}
            label="Tokyo Night"
          />
        </RadioGroup>
      </FormControl>
    </Box>
  );
}

export default BarRight;
