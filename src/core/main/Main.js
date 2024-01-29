import { Box, Grid, useTheme } from "@mui/material";
import BtnRouting from "../../components/BtnRouting";
import NavBar from "../../navigation/NavBar";
import Hero from "./Hero";

const Main = () => {
  const theme = useTheme();
  return (
    // Currently 51 total catagories, Main will have 3 column of 17
    <Box
      sx={{
        display: "flex",
        backgroundColor: theme.palette.background.default,
        width: "100%",
        pt: 5,
      }}
    >
      <Box
        sx={{
          width: "100%",
        }}
      >
        <Hero />
        <NavBar />
        <Grid container spacing={0} sx={{ padding: 2 }}>
          {/* Column 1 */}
          <Grid item xs={12} sm={4}>
            <BtnRouting
              btnName="Animals"
              navigateTo="/AnimalsDash"
              backgroundColor="#0077ba"
              textColor="white"
              amount="5"
            />
            <BtnRouting
              btnName="Anime"
              navigateTo="/AnimeDash"
              backgroundColor="#0077ba"
              textColor="white"
              amount="2"
            />
            <BtnRouting
              btnName="Anti-Malware"
              navigateTo="/AntiMalwareDash"
              amount="0"
            />
            <BtnRouting
              btnName="Art & Design"
              navigateTo="/ArtDesignDash"
              backgroundColor="#0077ba"
              textColor="white"
              amount="3"
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
              amount="5"
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
            <BtnRouting
              btnName="Dictionary"
              navigateTo="/DictionaryDash"
              backgroundColor="#0077ba"
              textColor="white"
              amount="1"
            />{" "}
            <BtnRouting
              btnName="Documents Production"
              navigateTo="/DocsProdDash"
            />
          </Grid>

          {/* Column 2 */}

          <Grid item xs={12} sm={4}>
            <BtnRouting btnName="Email" navigateTo="/EmailDash" />{" "}
            <BtnRouting
              btnName="Entertainment"
              navigateTo="/EntertainmentDash"
              backgroundColor="#0077ba"
              textColor="white"
              amount="3"
            />{" "}
            <BtnRouting
              btnName="Environment"
              navigateTo="/EnvironmentDash"
              backgroundColor="#0077ba"
              textColor="white"
              amount="1"
            />{" "}
            <BtnRouting btnName="Events" navigateTo="/EventsDash" />{" "}
            <BtnRouting btnName="Finance" navigateTo="/FinanceDash" />{" "}
            <BtnRouting btnName="Food Drink" navigateTo="/FoodDrinkDash" />{" "}
            <BtnRouting btnName="Games Comics" navigateTo="/GamesComicsDash" />{" "}
            <BtnRouting
              btnName="Geocoding"
              navigateTo="/GeocodingDash"
              backgroundColor="#0077ba"
              textColor="white"
              amount="2"
            />{" "}
            <BtnRouting btnName="Government" navigateTo="/GovernmentDash" />{" "}
            <BtnRouting
              btnName="Health"
              navigateTo="/HealthDash"
              backgroundColor="#0077ba"
              textColor="white"
              amount="1"
            />{" "}
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
          </Grid>

          {/* Column 3 */}

          <Grid item xs={12} sm={4}>
            <BtnRouting
              btnName="Personality"
              navigateTo="/PersonalityDash"
              backgroundColor="#0077ba"
              textColor="white"
              amount="1"
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
              backgroundColor="#0077ba"
              textColor="white"
              amount="2"
            />{" "}
            <BtnRouting btnName="Test Data" navigateTo="/TestDataDash" />{" "}
            <BtnRouting
              btnName="Text Analysis"
              navigateTo="/TextAnalysisDash"
            />{" "}
            <BtnRouting btnName="Tracking" navigateTo="/TrackingDash" />{" "}
            <BtnRouting
              btnName="Transportation"
              navigateTo="/TransportationDash"
            />{" "}
            <BtnRouting
              btnName="URL Shortener"
              navigateTo="/UrlShortenerDash"
            />{" "}
            <BtnRouting btnName="Vehicle" navigateTo="/VehicleDash" />{" "}
            <BtnRouting btnName="Video" navigateTo="/VideoDash" />{" "}
            <BtnRouting btnName="Weather" navigateTo="/WeatherDash" />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Main;
