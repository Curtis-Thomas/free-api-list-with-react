import React from "react";
import {
  Box,
  Input,
  InputAdornment,
  IconButton,
  useTheme,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function BarLeftSearchBox() {
  const theme = useTheme();

  return (
    <Box>
      <Input
        placeholder="Search (NOT IN USE)"
        startAdornment={
          <InputAdornment position="start">
            <IconButton sx={{ color: theme.palette.text.primary }}>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        }
      />
    </Box>
  );
}

export default BarLeftSearchBox;
