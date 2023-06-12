import { Box } from "@mui/material";
import BoxApiInfo from "../../core/main/BoxApiInfo";
import Endpoints from "../../core/main/Endpoints";
import NavBar from "../../core/main/navigation/NavBar";
import BoxTestCrud from "../../tools/BoxTestCrud";

const AnimalsMeowFacts = () => {
  return (
    <Box>
      <NavBar link="/AnimalsDash" route2="/MeowFacts" />
      <BoxTestCrud />
      <Box>
        <BoxApiInfo baseEndpoint="https://meowfacts.herokuapp.com" />
        <Endpoints header="GET" endpoint="/" description="" />
        <Endpoints header="GET" endpoint="/?count=3" description="" />
        <Endpoints header="GET" endpoint="/?id=3" description="" />
        <Endpoints header="GET" endpoint="/?lang=ukr" description="" />
      </Box>
    </Box>
  );
};

export default AnimalsMeowFacts;
