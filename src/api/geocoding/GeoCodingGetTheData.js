import { Box, useTheme } from "@mui/material";
import BoxApiInfo from "../../core/main/BoxApiInfo";
import Endpoints from "../../components/Endpoints";
import NavBar from "../../navigation/NavBar";
import ApiPageInfo from "../../core/main/ApiPageInfo";
import BoxTestCrud from "../../tools/components/BoxTestCrud";

const GeoCodingGetTheData = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        minHeight: "120vh",
      }}
    >
      <NavBar link="/GeoCodingDash" route2="/GetTheData" />
      <ApiPageInfo
        title={"GetTheData"}
        linkUrl={"https://www.getthedata.com/bng2latlong"}
        description={
          "Discover the power of geospatial data transformation with GetTheData. The API provides seamless conversion of easting and northing coordinates to latitude and longitude, offering invaluable insights for location-based applications. Easily integrate the services into your platform using the comprehensive API documentation. Whether you're mapping territories or analyzing spatial patterns, GetTheData empowers you to harness the full potential of geographic data. Embrace the precision of location-based intelligence and elevate your applications with GetTheData API today!"
        }
      />
      <BoxTestCrud />
      <Box>
        <BoxApiInfo baseEndpoint="https://api.getthedata.com/bng2latlong" />
        <Endpoints
          header="GET"
          endpoint="/529090/179645"
          description="Convert an OSGB36 easting and northing (British National Grid) to WGS84 latitude and longitude. Syntax
          https://api.getthedata.com/bng2latlong/[easting]/[northing]"
        />
      </Box>
    </Box>
  );
};

export default GeoCodingGetTheData;
