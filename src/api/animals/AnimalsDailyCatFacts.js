import { Box } from "@mui/material";
import BoxApiInfo from "../../core/main/BoxApiInfo";
import Endpoints from "../../core/main/Endpoints";
import BoxTest from "../../core/main/BoxTestCrud";
import NavBar from "../../core/main/navigation/NavBar";

const AnimalsDailyCatFacts = () => {
  return (
    <Box>
      <NavBar link="/AnimalsDash" route2="/AnimalsDash" />
      <Box>
        <BoxTest />
        <BoxApiInfo baseEndpoint="https://cat-fact.herokuapp.com" />
        <Endpoints header="GET" endpoint="/facts/random" />
      </Box>
    </Box>
  );
};

export default AnimalsDailyCatFacts;
