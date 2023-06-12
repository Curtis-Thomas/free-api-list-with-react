import { Box } from "@mui/material";
import BtnRouting from "../../core/main/BtnRouting";
import NavBar from "../../core/main/navigation/NavBar";

const AnimalDash = () => {
  return (
    <Box>
      {/* Navigation bar */}
      <NavBar link="/AnimalsDash" />

      <Box>
        {/* Button for Daily Cat Facts */}
        <BtnRouting
          btnName="Daily Cat Facts"
          navigateTo="AnimalsDailyCatFacts"
          backgroundColor="#0077ba"
          textColor="white"
        />

        {/* Button for Cat as a service */}
        <BtnRouting
          btnName="Cat as a service"
          navigateTo="AnimalsCataas"
          backgroundColor="#0077ba"
          textColor="white"
        />

        {/* Button for Dog API */}
        <BtnRouting
          btnName="Dog API"
          navigateTo="AnimalsDogApi"
          backgroundColor="#0077ba"
          textColor="white"
        />

        {/* Button for Dog */}
        <BtnRouting
          btnName="Dog"
          navigateTo="AnimalsDog"
          backgroundColor="#0077ba"
          textColor="white"
        />

        {/* Button for Meow Facts */}
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
