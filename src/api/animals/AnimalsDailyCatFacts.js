import { Box } from "@mui/material";
import BoxApiInfo from "../../core/main/BoxApiInfo";
import Endpoints from "../../core/main/Endpoints";
import NavBar from "../../core/main/navigation/NavBar";
import BoxTestCrud from "../../tools/BoxTestCrud";

const AnimalsDailyCatFacts = () => {
  return (
    <Box>
      <NavBar link="/AnimalsDash" route2="/DailyCatFacts" />
      <BoxTestCrud />
      <Box>
        <BoxApiInfo baseEndpoint="https://cat-fact.herokuapp.com" />
        <Endpoints header="GET" endpoint="/facts/random" />
      </Box>
    </Box>
  );
};

export default AnimalsDailyCatFacts;
