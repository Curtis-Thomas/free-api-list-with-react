import { Box } from "@mui/material";
import BoxApiInfo from "../../core/main/BoxApiInfo";
import Endpoints from "../../core/main/Endpoints";
import NavBar from "../../navigation/NavBar";
import BoxTestCrud from "../../tools/BoxTestCrud";

const EntertainmentChuckNorris = () => {
  return (
    <Box>
      <NavBar link="/EntertainmentDash" route2="/ChuckNorris" />
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
