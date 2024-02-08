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
          "Introducing the Studio Ghibli API, your ultimate guide to the enchanting worlds crafted by Ghibli. Dive into a treasure trove of information cataloging the people, places, and things that populate these captivating universes. Whether you're a die-hard fan or a curious explorer, our API offers a seamless experience to discover the essence of Studio Ghibli's creations. Embrace the magic and embark on an unforgettable journey through Ghibli's imaginative realms with ease. Start exploring today with the Studio Ghibli API!"
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
