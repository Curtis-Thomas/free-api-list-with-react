import { Box } from "@mui/material";
import BoxApiInfo from "../../core/main/BoxApiInfo";
import Endpoints from "../../core/main/Endpoints";
import BoxTest from "../../core/main/BoxTestCrud";
import NavBar from "../../core/main/navigation/NavBar";

const ArtDesignEmojiHub = () => {
  return (
    <Box>
      <NavBar link="/ArtDesignDash" route2="/EmojiHub" />
      <Box>
        <BoxTest />
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
