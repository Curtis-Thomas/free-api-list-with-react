import { Box, useTheme } from "@mui/material";
import BoxApiInfo from "../../core/main/BoxApiInfo";
import Endpoints from "../../components/Endpoints";
import NavBar from "../../navigation/NavBar";

import BoxTestCrud from "../../tools/components/BoxTestCrud";
import ApiPageInfo from "../../core/main/ApiPageInfo";

const AnimeNekos = () => {
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
      <NavBar link="/Animedash" route2="/Nekos" />
      <ApiPageInfo
        title={"NEKOS.BEST"}
        linkUrl={"https://docs.nekos.best/"}
        description={
          "nekos.best is a RESTful API serving fully SFW and high quality anime images and GIFs."
        }
      />

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
