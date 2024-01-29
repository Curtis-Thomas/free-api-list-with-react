import React, { useState } from "react";

import { Box, Typography, useTheme } from "@mui/material";
import BarLeftSearchBox from "./components/BarLeftSearchBox";
import BarLeftSearchBoxBtn from "./components/BarLeftSearchBoxBtn";

function BarLeft() {
  const theme = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        pl: 5,
        paddingTop: "5vh",
        height: "90vh",
      }}
    >
      <Typography>Left bar search box</Typography>
      <Box sx={{ position: "fixed" }}>
        <BarLeftSearchBox />

        <Typography>Overview</Typography>

        <BarLeftSearchBoxBtn btnName="Home" navigateTo="/" />
        <BarLeftSearchBoxBtn btnName="Tools" navigateTo="/Tools" />
        <BarLeftSearchBoxBtn btnName="Docs" navigateTo="/Docs" />
      </Box>
      <Box
        sx={{
          mt: 25,
          overflowY: isHovered ? "auto" : "hidden",
          maxHeight: "60vh",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Typography>Getting Started</Typography>
        <Typography>API Categories</Typography>
        <BarLeftSearchBoxBtn
          btnName="Animals"
          navigateTo="/AnimalsDash"
          backgroundColor="#0077ba"
          textColor="white"
          amount="5"
        />
        <BarLeftSearchBoxBtn
          btnName="Anime"
          navigateTo="/AnimeDash"
          backgroundColor="#0077ba"
          textColor="white"
          amount="2"
        />
        <BarLeftSearchBoxBtn
          btnName="Anti-Malware"
          navigateTo="/AntiMalwareDash"
          amount="0"
        />
        <BarLeftSearchBoxBtn
          btnName="Art & Design"
          navigateTo="/ArtDesignDash"
          backgroundColor="#0077ba"
          textColor="white"
          amount="3"
        />
        <BarLeftSearchBoxBtn
          btnName="Authentication"
          navigateTo="/AuthenticationDash"
        />
        <BarLeftSearchBoxBtn
          btnName="Blockchain"
          navigateTo="/BlockchainDash"
        />
        <BarLeftSearchBoxBtn
          btnName="Books"
          navigateTo="/BooksDash"
          backgroundColor="#0077ba"
          textColor="white"
          amount="5"
        />
        <BarLeftSearchBoxBtn btnName="Business" navigateTo="/BusinessDash" />
        <BarLeftSearchBoxBtn btnName="Calendar" navigateTo="/CalendarDash" />
        <BarLeftSearchBoxBtn btnName="Cloud" navigateTo="/CloudDash" />
        <BarLeftSearchBoxBtn btnName="ContInt" navigateTo="/ContIntDash" />
        <BarLeftSearchBoxBtn
          btnName="Cryptocurrency"
          navigateTo="/CryptocurrencyDash"
        />
        <BarLeftSearchBoxBtn
          btnName="CurrencyExchange"
          navigateTo="/CurrencyExchangeDash"
        />
        <BarLeftSearchBoxBtn
          btnName="Data Validation"
          navigateTo="/DataValidationDash"
        />
        <BarLeftSearchBoxBtn
          btnName="Development"
          navigateTo="/DevelopmentDash"
        />
        <BarLeftSearchBoxBtn
          btnName="Dictionary"
          navigateTo="/DictionaryDash"
          backgroundColor="#0077ba"
          textColor="white"
          amount="1"
        />{" "}
        <BarLeftSearchBoxBtn
          btnName="Documents Production"
          navigateTo="/DocsProdDash"
        />
        <BarLeftSearchBoxBtn btnName="Email" navigateTo="/EmailDash" />{" "}
        <BarLeftSearchBoxBtn
          btnName="Entertainment"
          navigateTo="/EntertainmentDash"
          backgroundColor="#0077ba"
          textColor="white"
          amount="3"
        />{" "}
        <BarLeftSearchBoxBtn
          btnName="Environment"
          navigateTo="/EnvironmentDash"
          backgroundColor="#0077ba"
          textColor="white"
          amount="1"
        />{" "}
        <BarLeftSearchBoxBtn btnName="Events" navigateTo="/EventsDash" />{" "}
        <BarLeftSearchBoxBtn btnName="Finance" navigateTo="/FinanceDash" />{" "}
        <BarLeftSearchBoxBtn btnName="Food Drink" navigateTo="/FoodDrinkDash" />{" "}
        <BarLeftSearchBoxBtn
          btnName="Games Comics"
          navigateTo="/GamesComicsDash"
        />{" "}
        <BarLeftSearchBoxBtn
          btnName="Geocoding"
          navigateTo="/GeocodingDash"
          backgroundColor="#0077ba"
          textColor="white"
          amount="2"
        />{" "}
        <BarLeftSearchBoxBtn
          btnName="Government"
          navigateTo="/GovernmentDash"
        />{" "}
        <BarLeftSearchBoxBtn
          btnName="Health"
          navigateTo="/HealthDash"
          backgroundColor="#0077ba"
          textColor="white"
          amount="1"
        />{" "}
        <BarLeftSearchBoxBtn btnName="Jobs" navigateTo="/JobsDash" />{" "}
        <BarLeftSearchBoxBtn
          btnName="Machine Learning"
          navigateTo="/MachineLearningDash"
        />{" "}
        <BarLeftSearchBoxBtn btnName="Music" navigateTo="/MusicDash" />{" "}
        <BarLeftSearchBoxBtn btnName="News" navigateTo="/NewsDash" />{" "}
        <BarLeftSearchBoxBtn btnName="Open Data" navigateTo="/OpenDataDash" />{" "}
        <BarLeftSearchBoxBtn
          btnName="Open Source"
          navigateTo="/OpenSourceDash"
        />{" "}
        <BarLeftSearchBoxBtn btnName="Patent" navigateTo="/PatentDash" />
        <BarLeftSearchBoxBtn
          btnName="Personality"
          navigateTo="/PersonalityDash"
          backgroundColor="#0077ba"
          textColor="white"
          amount="1"
        />
        <BarLeftSearchBoxBtn btnName="Phone" navigateTo="/PhoneDash" />{" "}
        <BarLeftSearchBoxBtn
          btnName="Photography"
          navigateTo="/PhotographyDash"
        />{" "}
        <BarLeftSearchBoxBtn
          btnName="Programming"
          navigateTo="/ProgrammingDash"
        />{" "}
        <BarLeftSearchBoxBtn
          btnName="Science Math"
          navigateTo="/ScienceMathDash"
        />{" "}
        <BarLeftSearchBoxBtn btnName="Security" navigateTo="/SecurityDash" />{" "}
        <BarLeftSearchBoxBtn btnName="Shopping" navigateTo="/ShoppingDash" />{" "}
        <BarLeftSearchBoxBtn btnName="Social" navigateTo="/SocialDash" />{" "}
        <BarLeftSearchBoxBtn
          btnName="Sports Fitness"
          navigateTo="/SportsFitnessDash"
          backgroundColor="#0077ba"
          textColor="white"
          amount="2"
        />{" "}
        <BarLeftSearchBoxBtn btnName="Test Data" navigateTo="/TestDataDash" />{" "}
        <BarLeftSearchBoxBtn
          btnName="Text Analysis"
          navigateTo="/TextAnalysisDash"
        />{" "}
        <BarLeftSearchBoxBtn btnName="Tracking" navigateTo="/TrackingDash" />{" "}
        <BarLeftSearchBoxBtn
          btnName="Transportation"
          navigateTo="/TransportationDash"
        />{" "}
        <BarLeftSearchBoxBtn
          btnName="URL Shortener"
          navigateTo="/UrlShortenerDash"
        />{" "}
        <BarLeftSearchBoxBtn btnName="Vehicle" navigateTo="/VehicleDash" />{" "}
        <BarLeftSearchBoxBtn btnName="Video" navigateTo="/VideoDash" />{" "}
        <BarLeftSearchBoxBtn btnName="Weather" navigateTo="/WeatherDash" />
      </Box>
    </Box>
  );
}

export default BarLeft;
