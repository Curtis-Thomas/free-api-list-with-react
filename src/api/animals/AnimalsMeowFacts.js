import { Box } from "@mui/material";
import BoxApiInfo from "../../core/main/BoxApiInfo";
import Endpoints from "../../components/Endpoints";
import NavBar from "../../navigation/NavBar";
import BoxTestCrud from "../../tools/components/BoxTestCrud";
import ApiPageInfo from "../../core/main/ApiPageInfo";

const AnimalsMeowFacts = () => {
  return (
    <Box>
      {/* Navigation bar */}
      <NavBar link="/AnimalsDash" route2="/MeowFacts" />

      <ApiPageInfo
        title={"Dog API"}
        linkUrl={"https://github.com/wh-iterabb-it/meowfacts"}
        description={
          "A simple api that returns a random fact about cats on a GET request"
        }
      />

      {/* CRUD test box */}
      <BoxTestCrud />

      <Box>
        {/* API information box */}
        <BoxApiInfo baseEndpoint="https://meowfacts.herokuapp.com" />

        {/* Endpoints */}
        <Endpoints
          header="GET"
          endpoint="/"
          description="Retrieve a random cat fact"
        />
        <Endpoints
          header="GET"
          endpoint="/?count=3"
          description="Retrieve multiple cat facts"
        />
        <Endpoints
          header="GET"
          endpoint="/?id=3"
          description="Retrieve a specific cat fact by ID"
        />
        <Endpoints
          header="GET"
          endpoint="/?lang=ukr"
          description="Retrieve a cat fact in Ukrainian"
        />
      </Box>
    </Box>
  );
};

export default AnimalsMeowFacts;
