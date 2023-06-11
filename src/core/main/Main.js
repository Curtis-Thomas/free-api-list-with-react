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
          <BtnRouting
            btnName="Anime"
            navigateTo="/AnimeDash"
            backgroundColor="white"
            textColor="#0077ba"
          />
          <BtnRouting
            btnName="Anti-Malware"
            navigateTo="/AntiMalwareDash"
            backgroundColor="white"
            textColor="#0077ba"
          />
          <BtnRouting
            btnName="Art & Design"
            navigateTo="/ArtDesignDash"
            backgroundColor="#0077ba"
            textColor="white"
          />
          <BtnRouting
            btnName="Authentication"
            navigateTo="/AuthenticationDash"
            backgroundColor="white"
            textColor="#0077ba"
          />
          <BtnRouting
            btnName="Blockchain"
            navigateTo="/BlockchainDash"
            // backgroundColor="white"
            // textColor="#0077ba"
          />
          <BtnRouting
            btnName="Books"
            navigateTo="/BooksDash"
            backgroundColor="#0077ba"
            textColor="white"
          />
          <BtnRouting
            btnName="Business"
            navigateTo="/BusinessDash"
            // backgroundColor="white"
            // textColor="#0077ba"
          />
          <BtnRouting
            btnName="Calendar"
            navigateTo="/CalendarDash"
            // backgroundColor="white"
            // textColor="#0077ba"
          />
          <BtnRouting
            btnName="Cloud"
            navigateTo="/CloudDash"
            // backgroundColor="white"
            // textColor="#0077ba"
          />
          <BtnRouting
            btnName="ContInt"
            navigateTo="/ContIntDash"
            // backgroundColor="white"
            // textColor="#0077ba"
          />
          <BtnRouting
            btnName="Cryptocurrency"
            navigateTo="/CryptocurrencyDash"
            // backgroundColor="white"
            // textColor="#0077ba"
          />
          <BtnRouting
            btnName="CurrencyExchange"
            navigateTo="/CurrencyExchangeDash"
            // backgroundColor="white"
            // textColor="#0077ba"
          />
          <BtnRouting
            btnName="Data Validation"
            navigateTo="/DataValidationDash"
            // backgroundColor="white"
            // textColor="#0077ba"
          />
          <BtnRouting
            btnName="Development"
            navigateTo="/DevelopmentDash"
            // backgroundColor="white"
            // textColor="#0077ba"
          />
          <BtnRouting
            btnName="Dictionary"
            navigateTo="/DictionaryDash"
            // backgroundColor="white"
            // textColor="#0077ba"
          />
          <BtnRouting
            btnName="Documents Production"
            navigateTo="/DocsProdDash"
            // backgroundColor="white"
            // textColor="#0077ba"
          />
        </Box>

        {/* Column 2 */}

        <Box sx={{ flex: 1 }}>
          <BtnRouting
            btnName="Email"
            navigateTo="/EmailDash"
            // backgroundColor="white"
            // textColor="#0077ba"
          />{" "}
          <BtnRouting
            btnName="Entertainment"
            navigateTo="/EntertainmentDash"
            // backgroundColor="white"
            // textColor="#0077ba"
          />{" "}
          <BtnRouting
            btnName="Environment"
            navigateTo="/EnvironmentDash"
            // backgroundColor="white"
            // textColor="#0077ba"
          />{" "}
          <BtnRouting
            btnName="Events"
            navigateTo="/EventsDash"
            // backgroundColor="white"
            // textColor="#0077ba"
          />{" "}
          <BtnRouting
            btnName="Finance"
            navigateTo="/FinanceDash"
            // backgroundColor="white"
            // textColor="#0077ba"
          />{" "}
          <BtnRouting
            btnName="Food Drink"
            navigateTo="/FoodDrinkDash"
            // backgroundColor="white"
            // textColor="#0077ba"
          />{" "}
          <BtnRouting
            btnName="Games Comics"
            navigateTo="/GamesComicsDash"
            // backgroundColor="white"
            // textColor="#0077ba"
          />{" "}
          <BtnRouting
            btnName="Geocoding"
            navigateTo="/GeocodingDash"
            // backgroundColor="white"
            // textColor="#0077ba"
          />{" "}
          <BtnRouting
            btnName="Government"
            navigateTo="/GovernmentDash"
            // backgroundColor="white"
            // textColor="#0077ba"
          />{" "}
          <BtnRouting
            btnName="Health"
            navigateTo="/HealthDash"
            // backgroundColor="white"
            // textColor="#0077ba"
          />{" "}
          <BtnRouting
            btnName="Jobs"
            navigateTo="/JobsDash"
            // backgroundColor="white"
            // textColor="#0077ba"
          />{" "}
          <BtnRouting
            btnName="Machine Learning"
            navigateTo="/MachineLearningDash"
            // backgroundColor="white"
            // textColor="#0077ba"
          />{" "}
          <BtnRouting
            btnName="Music"
            navigateTo="/MusicDash"
            // backgroundColor="white"
            // textColor="#0077ba"
          />{" "}
          <BtnRouting
            btnName="News"
            navigateTo="/NewsDash"
            // backgroundColor="white"
            // textColor="#0077ba"
          />{" "}
          <BtnRouting
            btnName="Open Data"
            navigateTo="/OpenDataDash"
            // backgroundColor="white"
            // textColor="#0077ba"
          />{" "}
          <BtnRouting
            btnName="Open Source"
            navigateTo="/OpenSourceDash"
            // backgroundColor="white"
            // textColor="#0077ba"
          />{" "}
          <BtnRouting
            btnName="Patent"
            navigateTo="/PatentDash"
            // backgroundColor="white"
            // textColor="#0077ba"
          />
        </Box>

        {/* Column 3 */}

        <Box sx={{ flex: 1 }}>
          <BtnRouting
            btnName="Personality"
            navigateTo="/PersonalityDash"
            // backgroundColor="white"
            // textColor="#0077ba"
          />
          <BtnRouting
            btnName="Phone"
            navigateTo="/PhoneDash"
            // backgroundColor="white"
            // textColor="#0077ba"
          />{" "}
          <BtnRouting
            btnName="Photography"
            navigateTo="/PhotographyDash"
            // backgroundColor="white"
            // textColor="#0077ba"
          />{" "}
          <BtnRouting
            btnName="Programming"
            navigateTo="/ProgrammingDash"
            // backgroundColor="white"
            // textColor="#0077ba"
          />{" "}
          <BtnRouting
            btnName="Science Math"
            navigateTo="/ScienceMathDash"
            // backgroundColor="white"
            // textColor="#0077ba"
          />{" "}
          <BtnRouting
            btnName="Security"
            navigateTo="/SecurityDash"
            // backgroundColor="white"
            // textColor="#0077ba"
          />{" "}
          <BtnRouting
            btnName="Shopping"
            navigateTo="/ShoppingDash"
            // backgroundColor="white"
            // textColor="#0077ba"
          />{" "}
          <BtnRouting
            btnName="Social"
            navigateTo="/SocialDash"
            // backgroundColor="white"
            // textColor="#0077ba"
          />{" "}
          <BtnRouting
            btnName="Sports Fitness"
            navigateTo="/SportsFitnessDash"
            // backgroundColor="white"
            // textColor="#0077ba"
          />{" "}
          <BtnRouting
            btnName="Test Data"
            navigateTo="/TestDataDash"
            // backgroundColor="white"
            // textColor="#0077ba"
          />{" "}
          <BtnRouting
            btnName="Text Analysis"
            navigateTo="/TextAnalysisDash"
            // backgroundColor="white"
            // textColor="#0077ba"
          />{" "}
          <BtnRouting
            btnName="Tracking"
            navigateTo="/TrackingDash"
            // backgroundColor="white"
            // textColor="#0077ba"
          />{" "}
          <BtnRouting
            btnName="Transportation"
            navigateTo="/TransportationDash"
            // backgroundColor="white"
            // textColor="#0077ba"
          />{" "}
          <BtnRouting
            btnName="URL Shortener"
            navigateTo="/UrlShortenerDash"
            // backgroundColor="white"
            // textColor="#0077ba"
          />{" "}
          <BtnRouting
            btnName="Vehicle"
            navigateTo="/VehicleDash"
            // backgroundColor="white"
            // textColor="#0077ba"
          />{" "}
          <BtnRouting
            btnName="Video"
            navigateTo="/VideoDash"
            // backgroundColor="white"
            // textColor="#0077ba"
          />{" "}
          <BtnRouting
            btnName="Weather"
            navigateTo="/WeatherDash"
            // backgroundColor="white"
            // textColor="#0077ba"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Main;
