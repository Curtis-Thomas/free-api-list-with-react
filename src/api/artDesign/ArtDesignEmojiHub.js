import { Box } from "@mui/material";
import BoxApiInfo from "../../core/main/BoxApiInfo";
import Endpoints from "../../core/main/Endpoints";
import NavBar from "../../navigation/NavBar";
import BoxTestCrud from "../../tools/BoxTestCrud";

const ArtDesignEmojiHub = () => {
  return (
    <Box>
      <NavBar link="/ArtDesignDash" route2="/EmojiHub" />
      <BoxTestCrud />
      <Box>
        <BoxApiInfo baseEndpoint="https://emojihub.yurace.pro/api" />
        <Endpoints header="GET" endpoint="/all" />
        <Endpoints header="GET" endpoint="/random" />
        <Endpoints
          header="GET"
          endpoint="/random/group/face-positive"
          description="/group/{group-name}"
        />
        <Endpoints
          header="GET"
          endpoint="/random/category/food-and-drink"
          description="/category/{category-name}"
        />
      </Box>
    </Box>
  );
};

export default ArtDesignEmojiHub;
