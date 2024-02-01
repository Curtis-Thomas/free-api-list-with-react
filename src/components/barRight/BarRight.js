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
          <FormControlLabel
            value="light"
            control={
              <Radio
                sx={{
                  "&.Mui-checked": { color: theme.palette.text.primary },
                }}
              />
            }
            label="Light"
          />
          <FormControlLabel
            value="dark"
            control={
              <Radio
                sx={{
                  "&.Mui-checked": { color: theme.palette.text.primary },
                }}
              />
            }
            label="Dark"
          />
          <FormControlLabel
            value="dracula"
            control={
              <Radio
                sx={{
                  "&.Mui-checked": { color: theme.palette.text.primary },
                }}
              />
            }
            label="Dracula"
          />
          <FormControlLabel
            value="cobalt"
            control={
              <Radio
                sx={{
                  "&.Mui-checked": { color: theme.palette.text.primary },
                }}
              />
            }
            label="Cobalt"
          />
          <FormControlLabel
            value="gruvbox"
            control={
              <Radio
                sx={{
                  "&.Mui-checked": { color: theme.palette.text.primary },
                }}
              />
            }
            label="Gruvbox"
          />
          <FormControlLabel
            value="highcontrast"
            control={
              <Radio
                sx={{
                  "&.Mui-checked": { color: theme.palette.text.primary },
                }}
              />
            }
            label="High Contrast"
          />
          <FormControlLabel
            value="mero"
            control={
              <Radio
                sx={{
                  "&.Mui-checked": { color: theme.palette.text.primary },
                }}
              />
            }
            label="Mero"
          />
          <FormControlLabel
            value="onedark"
            control={
              <Radio
                sx={{
                  "&.Mui-checked": { color: theme.palette.text.primary },
                }}
              />
            }
            label="One Dark"
          />
          <FormControlLabel
            value="radical"
            control={
              <Radio
                sx={{
                  "&.Mui-checked": { color: theme.palette.text.primary },
                }}
              />
            }
            label="Radical"
          />
          <FormControlLabel
            value="synthwave"
            control={
              <Radio
                sx={{
                  "&.Mui-checked": { color: theme.palette.text.primary },
                }}
              />
            }
            label="Synth Wave"
          />
          <FormControlLabel
            value="tokyonight"
            control={
              <Radio
                sx={{
                  "&.Mui-checked": { color: theme.palette.text.primary },
                }}
              />
            }
            label="Tokyo Night"
          />
        </RadioGroup>
      </FormControl>
    </Box>
  );
}

export default BarRight;
