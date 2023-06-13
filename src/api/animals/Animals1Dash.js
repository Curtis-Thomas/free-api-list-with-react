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
        />

        {/* Button for Cat as a service */}
        <BtnRouting btnName="Cat as a service" navigateTo="AnimalsCataas" />

        {/* Button for Dog API */}
        <BtnRouting btnName="Dog API" navigateTo="AnimalsDogApi" />

        {/* Button for Dog */}
        <BtnRouting btnName="Dog" navigateTo="AnimalsDog" />

        {/* Button for Meow Facts */}
        <BtnRouting btnName="Meow Facts" navigateTo="AnimalsMeowFacts" />
      </Box>
    </Box>
  );
};

export default AnimalDash;
