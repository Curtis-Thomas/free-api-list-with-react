import { Box, useTheme } from "@mui/material";
import BoxApiInfo from "../../core/main/BoxApiInfo";
import Endpoints from "../../components/Endpoints";
import NavBar from "../../navigation/NavBar";
import ApiPageInfo from "../../core/main/ApiPageInfo";
import BoxTestCrud from "../../tools/components/BoxTestCrud";

const GeoCodingCountry = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        minHeight: "120vh",
      }}
    >
      <NavBar link="/GeoCodingDash" route2="/Country" />
      <ApiPageInfo
        title={"Country"}
        linkUrl={"https://country.is/"}
        description={
          "Country API is your go-to tool for pinpointing users' countries based on their IP addresses, offering seamless compatibility with both IPv4 and IPv6. The open-source platform, available at api.country.is, provides free access without the need for API keys or usage quotas. With simplicity and efficiency at its core, Country API delivers precise country identification, making it perfect for a wide range of applications. Start leveraging the power of geolocation effortlessly with Country API today!"
        }
      />
      <BoxTestCrud />
      <Box>
        <BoxApiInfo baseEndpoint="https://api.country.is" />
        <Endpoints
          header="GET"
          endpoint="/"
          description="Have your browser or app query its own IP address."
        />
      </Box>
    </Box>
  );
};

export default GeoCodingCountry;
