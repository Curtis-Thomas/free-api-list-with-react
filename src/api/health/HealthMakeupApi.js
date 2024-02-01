import { Box, useTheme } from "@mui/material";
import BoxApiInfo from "../../core/main/BoxApiInfo";
import Endpoints from "../../components/Endpoints";
import NavBar from "../../navigation/NavBar";
import BoxTestCrud from "../../tools/components/BoxTestCrud";
import ApiPageInfo from "../../core/main/ApiPageInfo";

const HealthMakeupApi = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        minHeight: "120vh",
      }}
    >
      {/* Navigation bar */}
      <NavBar link="/HealthDash" route2="/MakeupApi" />
      <ApiPageInfo
        title={"Makeup API"}
        linkUrl={"http://makeup-api.herokuapp.com/"}
        description={"There is currently one API call: Search makeup products"}
      />

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
