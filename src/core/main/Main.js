import { Box } from "@mui/material";
import BtnRouting from "./BtnRouting";
import NavBar from "./navigation/NavBar";

const Main = () => {
  return (
    // Currently 51 total catagoties, Main will have 3 column of 17

    <Box>
      <NavBar />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          '@media screen and (max-width: 600px)': { 
            display: "block"
          }
        }}
      >
        {/* Column 1 */}

        <Box sx={{ flex: 1 }}>
          <BtnRouting
            btnName="Animals"
            navigateTo="/AnimalsDash"
            backgroundColor="#0077ba"
            textColor="white"
          />
          <BtnRouting btnName="Anime" navigateTo="/AnimeDash" />
          <BtnRouting btnName="Anti-Malware" navigateTo="/AntiMalwareDash" />
          <BtnRouting
            btnName="Art & Design"
            navigateTo="/ArtDesignDash"
            backgroundColor="#0077ba"
            textColor="white"
          />
          <BtnRouting
            btnName="Authentication"
            navigateTo="/AuthenticationDash"
          />
          <BtnRouting btnName="Blockchain" navigateTo="/BlockchainDash" />
          <BtnRouting
            btnName="Books"
            navigateTo="/BooksDash"
            backgroundColor="#0077ba"
            textColor="white"
          />
          <BtnRouting btnName="Business" navigateTo="/BusinessDash" />
          <BtnRouting btnName="Calendar" navigateTo="/CalendarDash" />
          <BtnRouting btnName="Cloud" navigateTo="/CloudDash" />
          <BtnRouting btnName="ContInt" navigateTo="/ContIntDash" />
          <BtnRouting
            btnName="Cryptocurrency"
            navigateTo="/CryptocurrencyDash"
          />
          <BtnRouting
            btnName="CurrencyExchange"
            navigateTo="/CurrencyExchangeDash"
          />
          <BtnRouting
            btnName="Data Validation"
            navigateTo="/DataValidationDash"
          />
          <BtnRouting btnName="Development" navigateTo="/DevelopmentDash" />
          <BtnRouting btnName="Dictionary" navigateTo="/DictionaryDash" />
          <BtnRouting
            btnName="Documents Production"
            navigateTo="/DocsProdDash"
          />
        </Box>

        {/* Column 2 */}

        <Box sx={{ flex: 1 }}>
          <BtnRouting btnName="Email" navigateTo="/EmailDash" />{" "}
          <BtnRouting
            btnName="Entertainment"
            navigateTo="/EntertainmentDash"
            backgroundColor="#0077ba"
            textColor="white"
          />{" "}
          <BtnRouting btnName="Environment" navigateTo="/EnvironmentDash" />{" "}
          <BtnRouting btnName="Events" navigateTo="/EventsDash" />{" "}
          <BtnRouting btnName="Finance" navigateTo="/FinanceDash" />{" "}
          <BtnRouting btnName="Food Drink" navigateTo="/FoodDrinkDash" />{" "}
          <BtnRouting btnName="Games Comics" navigateTo="/GamesComicsDash" />{" "}
          <BtnRouting btnName="Geocoding" navigateTo="/GeocodingDash" />{" "}
          <BtnRouting btnName="Government" navigateTo="/GovernmentDash" />{" "}
          <BtnRouting btnName="Health" navigateTo="/HealthDash" />{" "}
          <BtnRouting btnName="Jobs" navigateTo="/JobsDash" />{" "}
          <BtnRouting
            btnName="Machine Learning"
            navigateTo="/MachineLearningDash"
          />{" "}
          <BtnRouting btnName="Music" navigateTo="/MusicDash" />{" "}
          <BtnRouting btnName="News" navigateTo="/NewsDash" />{" "}
          <BtnRouting btnName="Open Data" navigateTo="/OpenDataDash" />{" "}
          <BtnRouting btnName="Open Source" navigateTo="/OpenSourceDash" />{" "}
          <BtnRouting btnName="Patent" navigateTo="/PatentDash" />
        </Box>

        {/* Column 3 */}

        <Box sx={{ flex: 1 }}>
          <BtnRouting
            btnName="Personality"
            navigateTo="/PersonalityDash"
            backgroundColor="#0077ba"
            textColor="white"
          />
          <BtnRouting btnName="Phone" navigateTo="/PhoneDash" />{" "}
          <BtnRouting btnName="Photography" navigateTo="/PhotographyDash" />{" "}
          <BtnRouting btnName="Programming" navigateTo="/ProgrammingDash" />{" "}
          <BtnRouting btnName="Science Math" navigateTo="/ScienceMathDash" />{" "}
          <BtnRouting btnName="Security" navigateTo="/SecurityDash" />{" "}
          <BtnRouting btnName="Shopping" navigateTo="/ShoppingDash" />{" "}
          <BtnRouting btnName="Social" navigateTo="/SocialDash" />{" "}
          <BtnRouting
            btnName="Sports Fitness"
            navigateTo="/SportsFitnessDash"
          />{" "}
          <BtnRouting btnName="Test Data" navigateTo="/TestDataDash" />{" "}
          <BtnRouting btnName="Text Analysis" navigateTo="/TextAnalysisDash" />{" "}
          <BtnRouting btnName="Tracking" navigateTo="/TrackingDash" />{" "}
          <BtnRouting
            btnName="Transportation"
            navigateTo="/TransportationDash"
          />{" "}
          <BtnRouting btnName="URL Shortener" navigateTo="/UrlShortenerDash" />{" "}
          <BtnRouting btnName="Vehicle" navigateTo="/VehicleDash" />{" "}
          <BtnRouting btnName="Video" navigateTo="/VideoDash" />{" "}
          <BtnRouting btnName="Weather" navigateTo="/WeatherDash" />
        </Box>
      </Box>
    </Box>
  );
};

export default Main;
