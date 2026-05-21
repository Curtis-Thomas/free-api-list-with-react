import {
  Box,
  FormControl,
  InputLabel,
  Link,
  MenuItem,
  Select,
  type SelectChangeEvent,
  Typography,
  useTheme,
} from "@mui/material";
import { useThemeId } from "../theme/ThemeContext.js";
import { THEME_IDS, THEME_LABELS, isThemeId } from "../theme/themes.js";

export function BarRight() {
  const theme = useTheme();
  const { themeId, setThemeId } = useThemeId();

  const onChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value;
    if (isThemeId(value)) {
      setThemeId(value);
    }
  };

  return (
    <Box sx={{ padding: 2, color: theme.palette.text.primary }}>
      <Typography variant="overline">Theme</Typography>
      <FormControl fullWidth size="small" sx={{ mt: 1 }}>
        <InputLabel id="theme-select-label">Theme</InputLabel>
        <Select labelId="theme-select-label" value={themeId} label="Theme" onChange={onChange}>
          {THEME_IDS.map((id) => (
            <MenuItem key={id} value={id}>
              {THEME_LABELS[id]}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Box sx={{ mt: 4 }}>
        <Typography variant="overline" sx={{ color: theme.palette.text.primary }}>
          Project
        </Typography>
        <Box sx={{ mt: 1 }}>
          <Link
            href="https://github.com/curtis-thomas/free-api-list-with-react"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: theme.palette.text.secondary }}
          >
            ★ Star on GitHub
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
