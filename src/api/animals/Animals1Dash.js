import { Box } from "@mui/material";
import BtnRouting from "../../core/main/BtnRouting";
import NavBar from "../../core/main/navigation/NavBar";
import CardRouting from "../../core/main/CardRouting";

const AnimalDash = () => {
  return (
    <Box>
      {/* Navigation bar */}
      <NavBar link="/AnimalsDash" />

      <Box>
        {/* Button for Daily Cat Facts */}
        <CardRouting
          cardName="Daily Cat Facts"
          navigateTo="AnimalsDailyCatFacts"
          tags="Animals"
          description="Daily cat facts!"
          difficulty="Beginner"
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
