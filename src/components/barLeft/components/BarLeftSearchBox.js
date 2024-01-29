import React from "react";
import { Box, Input, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function BarLeftSearchBox() {
  return (
    <Box>
      <Input
        placeholder="Search (NOT IN USE)"
        startAdornment={
          <InputAdornment position="start">
            <IconButton>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        }
      />
    </Box>
  );
}

export default BarLeftSearchBox;
