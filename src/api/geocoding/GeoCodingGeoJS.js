import { Box, useTheme } from "@mui/material";
import BoxApiInfo from "../../core/main/BoxApiInfo";
import Endpoints from "../../components/Endpoints";
import NavBar from "../../navigation/NavBar";
import ApiPageInfo from "../../core/main/ApiPageInfo";
import BoxTestCrud from "../../tools/components/BoxTestCrud";

const GeoCodingGeoJS = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        minHeight: "120vh",
      }}
    >
      <NavBar link="/GeoCodingDash" route2="/GeoJS" />
      <ApiPageInfo
        title={"GeoJS"}
        linkUrl={"https://www.geojs.io/docs/v1/endpoints/"}
        description={
          "A REST/JSON/JSONP IP Geolocation lookup API without any rate limits"
        }
      />
      <BoxTestCrud />
      <Box>
        <BoxApiInfo baseEndpoint="https://get.geojs.io/v1" />
        <Endpoints
          header="GET"
          endpoint="/ip.json"
          description="This endpoint provides the requester's IP address. Please note that multiple IP lookups are not supported on this endpoint. If you prefer the response in plain text, you may remove the '.json' from the endpoint."
        />
        <Endpoints
          header="GET"
          endpoint="/ip/country.json"
          description="This endpoint provides information about the country associated with the requesting IP. There are multiple plain text endpoints available, allowing you to specify whether you prefer the full country name or just the country code. If you wish to receive only the country code, you can simply remove the '.json' from the endpoint."
        />
        <Endpoints
          header="GET"
          endpoint="/ip/geo.json"
          description="This endpoint contains geographical information about an IP, such as its latitude and longitude, along with the owning (ASN) organisiation."
        />
      </Box>
    </Box>
  );
};

export default GeoCodingGeoJS;
