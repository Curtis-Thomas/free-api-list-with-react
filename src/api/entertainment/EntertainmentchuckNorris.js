import { Box } from "@mui/material";
import BoxApiInfo from "../../core/main/BoxApiInfo";
import Endpoints from "../../components/Endpoints";
import NavBar from "../../navigation/NavBar";
import BoxTestCrud from "../../tools/components/BoxTestCrud";
import ApiPageInfo from "../../core/main/ApiPageInfo";

const EntertainmentChuckNorris = () => {
  return (
    <Box>
      <NavBar link="/EntertainmentDash" route2="/ChuckNorris" />
      <ApiPageInfo
        title={"chucknorris.io"}
        linkUrl={"https://api.chucknorris.io/"}
        description={
          "Chuck Norris facts are satirical factoids about martial artist and actor Chuck Norris."
        }
      />
      <BoxTestCrud />
      <Box>
        <BoxApiInfo baseEndpoint="https://api.chucknorris.io/jokes" />
        <Endpoints header="GET" endpoint="/random" description="" />
        <Endpoints header="GET" endpoint="/categories" description="" />
        <Endpoints
          header="GET"
          endpoint="/random?category={category}"
          description=""
        />
        <Endpoints
          header="GET"
          endpoint="/search?query={query}"
          description=""
        />
      </Box>
    </Box>
  );
};

export default EntertainmentChuckNorris;
