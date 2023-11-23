import { Box } from "@mui/material";
import BoxApiInfo from "../../core/main/BoxApiInfo";
import Endpoints from "../../core/main/Endpoints";
import NavBar from "../../navigation/NavBar";
import BoxTestCrud from "../../tools/components/BoxTestCrud";

const EntertainmentCorpBuzzWords = () => {
  return (
    <Box>
      <NavBar link="/EntertainmentDash" route2="/CorpBuzzWords" />
      <BoxTestCrud />
      <Box>
        <BoxApiInfo baseEndpoint="https://corporatebs-generator.sameerkumar.website" />
        <Endpoints header="GET" endpoint="/" description="" />
      </Box>
    </Box>
  );
};

export default EntertainmentCorpBuzzWords;
