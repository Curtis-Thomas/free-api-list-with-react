import { Box } from "@mui/material";
import BoxApiInfo from "../../core/main/BoxApiInfo";
import Endpoints from "../../components/Endpoints";
import NavBar from "../../navigation/NavBar";
import BoxTestCrud from "../../tools/components/BoxTestCrud";
import ApiPageInfo from "../../core/main/ApiPageInfo";

const ArtDesignEmojiHub = () => {
  return (
    <Box>
      <NavBar link="/ArtDesignDash" route2="/EmojiHub" />
      <ApiPageInfo
        title={"EmojiHub"}
        linkUrl={"https://github.com/cheatsnake/emojihub"}
        description={"A simple & free HTTP API with emojis for your cool apps"}
      />
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
