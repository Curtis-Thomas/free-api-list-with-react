import { Box } from "@mui/material";
import BoxApiInfo from "../../core/main/BoxApiInfo";
import Endpoints from "../../core/main/Endpoints";
import NavBar from "../../core/main/navigation/NavBar";
import BoxTestCrud from "../../tools/BoxTestCrud";

const PersonalityQuoteClear = () => {
  return (
    <Box>
      {/* Navigation bar */}
      <NavBar link="/PersonalityDash" route2="/QuoteClear" />

      {/* CRUD test box */}
      <BoxTestCrud />

      <Box>
        {/* API information box */}
        <BoxApiInfo baseEndpoint="https://www.jcquotes.com/api/quotes" />

        {/* Endpoint */}
        <Endpoints header="GET" endpoint="/random" />
      </Box>
    </Box>
  );
};

export default PersonalityQuoteClear;
