import { Box, useTheme } from "@mui/material";
import BoxApiInfo from "../../core/main/BoxApiInfo";
import Endpoints from "../../components/Endpoints";
import NavBar from "../../navigation/NavBar";
import BoxTestCrud from "../../tools/components/BoxTestCrud";
import ApiPageInfo from "../../core/main/ApiPageInfo";

const GamesComicsAmiibo = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        minHeight: "120vh",
      }}
    >
      <NavBar link="/GamesComicsDash" route2="/Amiibo" />
      <ApiPageInfo
        title={"Amiibo"}
        linkUrl={"https://amiiboapi.com/docs/"}
        description={
          "AmiiboAPI offers a comprehensive collection of amiibo information, tailored primarily for educational purposes. As a read-only API, it facilitates seamless retrieval of amiibo data exclusively through HTTP GET requests. Authentication is unnecessary, ensuring unrestricted access to all resources.To optimize performance, it's recommended to implement caching mechanisms, especially for frequent API calls. However, please note that AmiiboAPI operates independently and is not affiliated with Nintendo or any other rights-holding entities. Consequently, any reports or data owned by these entities remain their sole responsibility.By accessing this API, users agree to comply with all applicable laws, regulations, and the provided Terms and Conditions. These Terms are subject to occasional updates at the discretion of AmiiboAPI. The Amiibo endpoint offers versatile querying options, enabling users to retrieve information on all available amiibos or specific ones based on name, ID, or type. Filters can be combined for refined searches, facilitating precise data retrieval.Explore AmiiboAPI to delve into the world of amiibos, whether for educational purposes or to enrich your applications with valuable amiibo data effortlessly."
        }
      />
      <BoxTestCrud />
      <Box>
        <BoxApiInfo baseEndpoint="https://amiiboapi.com/api/amiibo" />
        <Endpoints
          header="GET"
          endpoint="/"
          description="Return a list of amiibo available in the API."
        />
      </Box>
    </Box>
  );
};

export default GamesComicsAmiibo;
