import { Link, useNavigate } from "react-router-dom";
import {
  AppBar,
  Switch,
  Toolbar,
  Typography,
  Grid,
  IconButton,
  Stack,
} from "@mui/material";

import BuildIcon from "@mui/icons-material/Build";
import DescriptionIcon from "@mui/icons-material/Description";

/**
 * Component for the header of the application.
 */
const Header = ({ toggleDarkMode }) => {
  const navigate = useNavigate();

  /**
   * Handles the click event of the "Tools" button and navigates to the "Tools" route.
   */
  const handleToolsClick = () => {
    navigate("Tools");
  };

  /**
   * Handles the click event of the "Docs" button and navigates to the "Docs" route.
   */
  const handleDocsClick = () => {
    navigate("Docs");
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item xs={8}>
            <Typography variant="h6" component="div">
              <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                Free API List with React
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={4} sx={{ textAlign: "right" }}>
            <Stack direction="row" spacing={1}>
              <IconButton onClick={handleToolsClick} edge="end">
                <BuildIcon />
              </IconButton>
              <IconButton onClick={handleDocsClick} edge="end">
                <DescriptionIcon />
              </IconButton>
              <Switch onChange={toggleDarkMode} />
            </Stack>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
