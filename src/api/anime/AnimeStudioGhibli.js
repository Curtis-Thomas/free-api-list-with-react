import { Box, useTheme } from "@mui/material";
import BoxApiInfo from "../../core/main/BoxApiInfo";
import Endpoints from "../../components/Endpoints";
import NavBar from "../../navigation/NavBar";

import BoxTestCrud from "../../tools/components/BoxTestCrud";
import ApiPageInfo from "../../core/main/ApiPageInfo";

const AnimeStudioGhibli = () => {
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
      <NavBar link="/Animedash" route2="/StudioGhibli" />
      <ApiPageInfo
        title={"CStudio Ghibli"}
        linkUrl={"https://ghibliapi.vercel.app"}
        description={
          "The Studio Ghibli API catalogs the people, places, and things found in the worlds of Ghibli."
        }
      />

      <Box>
        <BoxTestCrud />

        {/* API information box */}
        <BoxApiInfo baseEndpoint="https://ghibliapi.vercel.app" />

        {/* Endpoints */}
        <Endpoints
          header="GET"
          endpoint="/films"
          description="The Films endpoint returns information about all of the Studio Ghibli films."
        />
      </Box>
    </Box>
  );
};

export default AnimeStudioGhibli;
