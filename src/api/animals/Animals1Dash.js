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
          backgroundColor="#0077ba"
          textColor="white"
        />
        <BtnRouting
          btnName="Cat as a service"
          navigateTo="AnimalsCataas"
          backgroundColor="#0077ba"
          textColor="white"
        />
        <BtnRouting
          btnName="Dog Api"
          navigateTo="AnimalsDogApi"
          backgroundColor="#0077ba"
          textColor="white"
        />
        <BtnRouting
          btnName="Dog"
          navigateTo="AnimalsDog"
          backgroundColor="#0077ba"
          textColor="white"
        />
        <BtnRouting
          btnName="Meow Facts"
          navigateTo="AnimalsMeowFacts"
          backgroundColor="#0077ba"
          textColor="white"
        />
      </Box>
    </Box>
  );
};

export default AnimalDash;
