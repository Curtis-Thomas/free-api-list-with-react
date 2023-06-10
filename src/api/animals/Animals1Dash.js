import { Box } from "@mui/material";
import BtnRouting from "../../core/main/BtnRouting";
import NavBar from "../../core/main/navigation/NavBar";

const AnimalDash = () => {
  return (
    <Box>
      <NavBar link="/AnimalsDash" />
      <Box>
        <BtnRouting
          btnName="Daily Cat Facts"
          navigateTo="AnimalsDailyCatFacts"
        />
        <BtnRouting btnName="Cat as a service" navigateTo="AnimalsCataas" />
        <BtnRouting btnName="Dog Api" navigateTo="AnimalsDogApi" />
        <BtnRouting btnName="Dog" navigateTo="AnimalsDog" />
        <BtnRouting btnName="Meow Facts" navigateTo="AnimalsMeowFacts" />
      </Box>
    </Box>
  );
};

export default AnimalDash;
