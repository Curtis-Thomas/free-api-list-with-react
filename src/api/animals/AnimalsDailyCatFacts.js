import { Box } from "@mui/material";
import BoxApiInfo from "../../core/main/BoxApiInfo";
import Endpoints from "../../core/main/Endpoints";
import NavBar from "../../core/main/navigation/NavBar";
import BoxTestCrud from "../../tools/BoxTestCrud";
import ApiPageInfo from "../../core/main/ApiPageInfo";

const AnimalsDailyCatFacts = () => {
  return (
    <Box>
      {/* Navigation bar */}
      <NavBar link="/AnimalsDash" route2="/DailyCatFacts" />
      <ApiPageInfo
        title={"Daily Cat Facts"}
        linkUrl={"https://alexwohlbruck.github.io/cat-facts/docs/"}
        description={"Daily cat facts!"}
      />

      {/* CRUD test box */}
      <BoxTestCrud />

      <Box>
        {/* API information box */}
        <BoxApiInfo baseEndpoint="https://cat-fact.herokuapp.com" />

        {/* Endpoint */}
        <Endpoints
          header="GET"
          endpoint="/facts/random"
          description="Retrieve a random cat fact"
        />
      </Box>
    </Box>
  );
};

export default AnimalsDailyCatFacts;
