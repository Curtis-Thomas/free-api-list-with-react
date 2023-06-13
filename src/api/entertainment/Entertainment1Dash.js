import { Box } from "@mui/material";
import BtnRouting from "../../core/main/BtnRouting";
import NavBar from "../../core/main/navigation/NavBar";

const EntertainmentDash = () => {
  return (
    <Box>
      <NavBar link="/EntertainmentDash" />
      <Box>
        <BtnRouting
          btnName="Chuck Norris"
          navigateTo="EntertainmentChuckNorris"
        />
        <BtnRouting
          btnName="Corp Buzz Words"
          navigateTo="EntertainmentCorpBuzzWords"
        />
        <BtnRouting btnName="Techy" navigateTo="EntertainmentTechy" />
      </Box>
    </Box>
  );
};

export default EntertainmentDash;
