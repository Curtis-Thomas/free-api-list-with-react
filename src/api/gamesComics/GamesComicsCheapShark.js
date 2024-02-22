import { Box, useTheme } from "@mui/material";
import BoxApiInfo from "../../core/main/BoxApiInfo";
import Endpoints from "../../components/Endpoints";
import NavBar from "../../navigation/NavBar";
import BoxTestCrud from "../../tools/components/BoxTestCrud";
import ApiPageInfo from "../../core/main/ApiPageInfo";

const GamesComicsCheapShark = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        minHeight: "120vh",
      }}
    >
      <NavBar link="/GamesComicsDash" route2="/CheapShark" />
      <ApiPageInfo
        title={"CheapShark"}
        linkUrl={"https://apidocs.cheapshark.com/"}
        description={
          "Integrate the CheapShark API into your app or website for effortless price comparisons on digital PC games! With access to pricing data from major stores like Steam and GreenManGaming, the free API lets you offer users the best deals while supporting our hosting and development. No authorization needed—just start coding! Be sure to mention your use of CheapShark API and enjoy full CORS support for seamless integration. For details, check out the documentation and join our Discord for support and updates."
        }
      />
      <BoxTestCrud />
      <Box>
        <BoxApiInfo baseEndpoint="https://www.cheapshark.com/api/1.0" />
        <Endpoints
          header="GET"
          endpoint="/deals?storeID=1&upperPrice=15"
          description="Get a paged list of deals matching any number of criteria, all the following filtering parameters are optional."
        />
      </Box>
    </Box>
  );
};

export default GamesComicsCheapShark;
