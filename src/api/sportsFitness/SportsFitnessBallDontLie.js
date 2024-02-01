import { Box, useTheme } from "@mui/material";
import BoxApiInfo from "../../core/main/BoxApiInfo";
import Endpoints from "../../components/Endpoints";
import NavBar from "../../navigation/NavBar";
import BoxTestCrud from "../../tools/components/BoxTestCrud";
import ApiPageInfo from "../../core/main/ApiPageInfo";

const SportsFitnessBallDontLie = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        minHeight: "120vh",
      }}
    >
      {/* Navigation bar */}
      <NavBar link="/SportsFitnessDash" route2="/BallDontLie" />
      <ApiPageInfo
        title={"BALLDONTLIE"}
        linkUrl={"https://www.balldontlie.io/home.html#introduction"}
        description={
          "You can use our free API to access NBA related data. No email required. No API key required."
        }
      />

      {/* CRUD test box */}
      <BoxTestCrud />

      <Box>
        {/* API information box */}
        <BoxApiInfo baseEndpoint="https://www.balldontlie.io/api/v1" />

        {/* Endpoint */}
        <Endpoints
          header="GET"
          endpoint="/players"
          description="This endpoint retrieves all players from all seasons."
        />
      </Box>
    </Box>
  );
};

export default SportsFitnessBallDontLie;
