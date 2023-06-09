import { Box } from "@mui/material";
import BoxApiInfo from "../../core/main/BoxApiInfo";
import Endpoints from "../../core/main/Endpoints";
import BoxTest from "../../core/main/BoxTestCrud";

const AnimalsDailyCatFacts = () => {
  return (
    <Box>
      <BoxTest />
      <BoxApiInfo baseEndpoint="https://cat-fact.herokuapp.com" />
      <Endpoints
        header="GET"
        endpoint="/facts/random"
        description="animal_type,amount"
        example="GET /facts/random?animal_type=cat&amount=2"
      />
    </Box>
  );
};

export default AnimalsDailyCatFacts;
