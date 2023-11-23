import { Box } from "@mui/material";
import BoxApiInfo from "../../core/main/BoxApiInfo";
import Endpoints from "../../core/main/Endpoints";
import NavBar from "../../navigation/NavBar";
import BoxTestCrud from "../../tools/components/BoxTestCrud";

const HealthMakeupApi = () => {
  return (
    <Box>
      {/* Navigation bar */}
      <NavBar link="/HealthDash" route2="/MakeupApi" />

      {/* CRUD test box */}
      <BoxTestCrud />

      <Box>
        {/* API information box */}
        <BoxApiInfo baseEndpoint="http://makeup-api.herokuapp.com/api/v1/" />

        {/* Endpoint */}
        <Endpoints
          header="GET"
          endpoint="/products.json"
          description=" Search makeup products"
        />
      </Box>
    </Box>
  );
};

export default HealthMakeupApi;
