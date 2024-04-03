import BoxApiInfo from "../../core/main/BoxApiInfo";
import Endpoints from "../../components/Endpoints";
import NavBar from "../../navigation/NavBar";
import BoxTestCrud from "../../tools/components/BoxTestCrud";
import ApiPageInfo from "../../core/main/ApiPageInfo";
import { Box, useTheme } from "@mui/material";

const DevelopmentCloudFlareTrace = () => {
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
        <NavBar link="/DevelopmentDash"  />
  
        <ApiPageInfo
          title={"Cloudflare trace"}
          linkUrl={"https://developers.cloudflare.com/fundamentals/basic-tasks/trace-request/"}
          description={"Get IP Address, TimeStamp, User Agent, Country Code, IATA, HTTP Version, TLS/SSL Version & more by Cloudflare"}
        />
  
        {/* CRUD test box */}
        <BoxTestCrud />
  
        <Box>
          {/* API information box */}
          <BoxApiInfo baseEndpoint="https://1.1.1.1/cdn-cgi" />
  
          {/* Endpoints */}
          <Endpoints
            header="GET"
            endpoint="/trace"
            description="get ip address,Http versionn ,geolocation etc"
          />
        </Box>
      </Box>
    );
  };
  
 export default DevelopmentCloudFlareTrace;