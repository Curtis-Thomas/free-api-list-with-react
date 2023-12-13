import { Box } from "@mui/material";
import BoxApiInfo from "../../core/main/BoxApiInfo";
import Endpoints from "../../components/Endpoints";
import NavBar from "../../navigation/NavBar";
import BoxTestCrud from "../../tools/components/BoxTestCrud";
import ApiPageInfo from "../../core/main/ApiPageInfo";

const EntertainmentTechy = () => {
  return (
    <Box>
      <NavBar link="/EntertainmentDash" route2="/Techy" />
      <ApiPageInfo
        title={"Techy"}
        linkUrl={"https://techy-api.vercel.app/"}
        description={"Generate cool tech-savvy sounding phrases easily."}
      />
      <BoxTestCrud />
      <Box>
        <BoxApiInfo baseEndpoint="https://techy-api.vercel.app/api" />
        <Endpoints header="GET" endpoint="/json" description="" />
      </Box>
    </Box>
  );
};

export default EntertainmentTechy;
