import {Box,useTheme} from "@mui/material";
import BoxApiInfo from "../../core/main/BoxApiInfo";
import Endpoints from "../../components/Endpoints";
import NavBar from "../../navigation/NavBar";
import ApiPageInfo from "../../core/main/ApiPageInfo";
import BoxTestImg from "../../tools/components/BoxTestImg";

const BusinessTrendsApi = () => {
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
      <NavBar link="/BusinessDash" route2="/MarketTrends" /> 

      <ApiPageInfo
        title={"Market Trends & Business Signals (Glimpse API)"}
        linkUrl={"https://meetglimpse.com/api/"}
        description={
          "Unlock the next big business opportunity with the MarketTrends API from Glimpse."
        }
      />
      {/* Visual representation of data trends */}
      <BoxTestImg />  
      <Box>
        {/* Base API information for the Business Services  */}
        <BoxApiInfo baseEndpoint="https://api.meetglimpse.com/v1/" />

        {/* Business intelligence Endpoints */} 
        <Endpoints
          header="GET"
          endpoint="/trends/exploding"
          description="Retrieve current market trends,a list of hyper-growth business niches and insights"
        />

        <Endpoints
          header="GET"
          endpoint="/trends/:category"
          description="Filter business ideas by industry (eg.,'Saas','Health','Sustainability')"
        />

        <Endpoints
          header="GET"
          endpoint="/trends/forecast/:topic"
          description="Get future trend predictions for a specific business topic, technology and 12-month trajectory for a specific business keyword "
          />

        <Endpoints
          header="GET"
          endpoint="/trends/compare?topics=topic1,topic2"
          description="Compare market demand between two different business models or niches and see the growth trajectories of multiple business topics side by side"
        />

        <Endpoints
          header="GET"
          endpoint="signals/emerging?min_growth=:percentage"
          description="Identify 'Under-the-Radar' opportunities with a specific minimum growth threshold (e.g ,500%+)."
        />

        <Endpoints
          header="GET"
          endpoint="/metadata/tags"
          description="Retrieve all available industry tags to narrow down your market research. "
        />
      </Box>
    </Box>
  );
};

export default BusinessTrendsApi;