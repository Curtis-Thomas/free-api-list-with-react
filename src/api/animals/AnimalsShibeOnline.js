import { Box, useTheme } from "@mui/material";
import BoxApiInfo from "../../core/main/BoxApiInfo";
import Endpoints from "../../components/Endpoints";
import NavBar from "../../navigation/NavBar";
import BoxTestCrud from "../../tools/components/BoxTestCrud";
import ApiPageInfo from "../../core/main/ApiPageInfo";

const AnimalsShibeOnline = () => {
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
      <NavBar link="/AnimalsDash" route2="/MeowFacts" />

      <ApiPageInfo
        title={"Dog API"}
        linkUrl={"https://shibe.online/"}
        description={"shibes as a service"}
      />

      {/* CRUD test box */}
      <BoxTestCrud />

      <Box>
        {/* API information box */}
        <BoxApiInfo baseEndpoint="https://shibe.online" />

        {/* Endpoints */}
        <Endpoints
          header="GET"
          endpoint="/api/shibes?count=1&urls=true&httpsUrls=true"
          description="Retrieve a random shibe image"
        />
      </Box>
    </Box>
  );
};

export default AnimalsShibeOnline;
