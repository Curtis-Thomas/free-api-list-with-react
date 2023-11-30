import { Box } from "@mui/material";
import BoxApiInfo from "../../core/main/BoxApiInfo";
import Endpoints from "../../components/Endpoints";
import NavBar from "../../navigation/NavBar";
import BoxTestCrud from "../../tools/components/BoxTestCrud";
import ApiPageInfo from "../../core/main/ApiPageInfo";

const EntertainmentCorpBuzzWords = () => {
  return (
    <Box>
      <NavBar link="/EntertainmentDash" route2="/CorpBuzzWords" />
      <ApiPageInfo
        title={"Corporate BuzzWord Generator"}
        linkUrl={"https://github.com/sameerkumar18/corporate-bs-generator-api"}
        description={
          "Corporate buzzword generator to randomly pick out phrases, which can help your application get ahead in an industry where spin."
        }
      />
      <BoxTestCrud />
      <Box>
        <BoxApiInfo baseEndpoint="https://corporatebs-generator.sameerkumar.website" />
        <Endpoints header="GET" endpoint="/" description="" />
      </Box>
    </Box>
  );
};

export default EntertainmentCorpBuzzWords;
