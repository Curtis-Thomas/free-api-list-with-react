import { Box } from "@mui/material";
import BoxApiInfo from "../../core/main/BoxApiInfo";
import Endpoints from "../../components/Endpoints";
import NavBar from "../../navigation/NavBar";
import ApiPageInfo from "../../core/main/ApiPageInfo";
import BoxTestCrud from "../../tools/components/BoxTestCrud";

const GeoCodingAdministrativeDivisionsDb = () => {
  return (
    <Box>
        <NavBar link="/GeoCodingDash" route2="/administrativeDivisionsDb" />
        <ApiPageInfo
        title={"Administrative-Divisions-Db"}
        linkUrl={"https://github.com/kamikazechaser/administrative-divisions-db"}
        description={
          "This repo automagically serves an 'API' over Rawgit (Cloudflare network). No limits and uptime is guranteed."
        }
        />
        <BoxTestCrud />
        <Box>
            <BoxApiInfo baseEndpoint="https://rawcdn.githack.com/kamikazechaser/administrative-divisions-db/master/api"/>
            <Endpoints header="GET" endpoint="/US.json" description="As an example, To get the administrative division of a particular country, simply make a GET request to the above endpoint and enter the country code in the endpoints as shown in above example " />
        </Box>
    </Box>
  )
}

export default GeoCodingAdministrativeDivisionsDb