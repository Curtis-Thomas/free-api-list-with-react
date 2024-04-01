import { Box,Grid, useTheme } from "@mui/material";
import NavBar from "../../navigation/NavBar";
import CardRouting from "../../components/CardRouting";

const DevelopmentDash = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        minHeight: "110vh",
      }}
    >
      <NavBar link="/DevelopmentDash" />
      
      {/* Cards in a responsive grid layout */}
      <Grid container spacing={2} sx={{ p: 3 }}>
        {/* Card for Development */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CardRouting
            cardName="Cloudflare Trace"
            navigateTo="DevelopmentCloudFlareTrace"
            tags="Development"
            description="Get IP Address, TimeStamp, User Agent,"
            difficulty="Easy"
          />
        </Grid>
        </Grid>
      <Box>
      </Box>
    </Box>
  );
};

export default DevelopmentDash;
