import { Box } from "@mui/material";
import BoxApiInfo from "../../core/main/BoxApiInfo";
import Endpoints from "../../core/main/Endpoints";
import NavBar from "../../core/main/navigation/NavBar";
import BoxTestCrud from "../../tools/BoxTestCrud";

const EnvironmentUKCarbonIntensity = () => {
  return (
    <Box>
      {/* Navigation bar */}
      <NavBar link="/EnvironmentDash" route2="/UKCarbonIntensity" />

      {/* CRUD test box */}
      <BoxTestCrud />

      <Box>
        {/* API information box */}
        <BoxApiInfo baseEndpoint="https://api.carbonintensity.org.uk" />

        {/* Endpoint */}
        <Endpoints
          header="GET"
          endpoint="/intensity"
          description="Get Carbon Intensity data for current half hour"
        />
      </Box>
    </Box>
  );
};

export default EnvironmentUKCarbonIntensity;
