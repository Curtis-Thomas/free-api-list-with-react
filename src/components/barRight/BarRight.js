import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
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
        <FormLabel id="demo-radio-buttons-group-label">
          Color Theme(Work In Progress)
        </FormLabel>
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
            label="gruvbox"
          />
          <FormControlLabel
            value="highcontrast"
            control={<Radio />}
            label="highcontrast"
          />
          <FormControlLabel value="mero" control={<Radio />} label="mero" />
          <FormControlLabel
            value="onedark"
            control={<Radio />}
            label="onedark"
          />
          <FormControlLabel
            value="radical"
            control={<Radio />}
            label="radical"
          />
          <FormControlLabel
            value="synthwave"
            control={<Radio />}
            label="synthwave"
          />
          <FormControlLabel
            value="tokyonight"
            control={<Radio />}
            label="tokyonight"
          />
        </RadioGroup>
      </FormControl>
    </Box>
  );
}

export default BarRight;
