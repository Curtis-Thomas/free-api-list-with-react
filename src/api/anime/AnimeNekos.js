import { Box } from "@mui/material";
import BoxApiInfo from "../../core/main/BoxApiInfo";
import Endpoints from "../../core/main/Endpoints";
import NavBar from "../../navigation/NavBar";

import BoxTestCrud from "../../tools/BoxTestCrud";

const AnimeNekos = () => {
  return (
    <Box>
      {/* Navigation bar */}
      <NavBar link="/Animedash" route2="/Nekos" />

      <Box>
        <BoxTestCrud />

        {/* API information box */}
        <BoxApiInfo baseEndpoint="https://nekos.best/api/v2" />

        {/* Endpoints */}
        <Endpoints
          header="GET"
          endpoint="/neko"
          description="Gets random Img or Gif along with metadata."
        />
      </Box>
    </Box>
  );
};

export default AnimeNekos;
