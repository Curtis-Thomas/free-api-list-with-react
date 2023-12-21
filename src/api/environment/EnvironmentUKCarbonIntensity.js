import { Box } from "@mui/material";
import BoxApiInfo from "../../core/main/BoxApiInfo";
import Endpoints from "../../components/Endpoints";
import NavBar from "../../navigation/NavBar";
import BoxTestCrud from "../../tools/components/BoxTestCrud";
import ApiPageInfo from "../../core/main/ApiPageInfo";

const EnvironmentUKCarbonIntensity = () => {
  return (
    <Box>
      {/* Navigation bar */}
      <NavBar link="/EnvironmentDash" route2="/UKCarbonIntensity" />

      <ApiPageInfo
        title={"Carbon Intensity API"}
        linkUrl={"https://api.carbonintensity.org.uk/"}
        description={
          "This is the Official Carbon Intensity API for Great Britain developed by National Grid."
        }
      />

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
