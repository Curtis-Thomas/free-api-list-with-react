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
            navigateTo=""
            // backgroundColor="white"
            // textColor="#0077ba"
          />
          <BtnRouting
            btnName="Development"
            navigateTo=""
            // backgroundColor="white"
            // textColor="#0077ba"
          />
          <BtnRouting
            btnName="Dictionary"
            navigateTo=""
            // backgroundColor="white"
            // textColor="#0077ba"
          />
          <BtnRouting
            btnName="Documents Production"
            navigateTo=""
            // backgroundColor="white"
            // textColor="#0077ba"
          />
        </Box>

        {/* Column 2 */}

        <Box sx={{ flex: 1 }}>
          <BtnRouting
            btnName="Email"
            navigateTo=""
            // backgroundColor="white"
            // textColor="#0077ba"
          />{" "}
          <BtnRouting
            btnName="Entertainment"
            navigateTo=""
            // backgroundColor="white"
            // textColor="#0077ba"
          />{" "}
          <BtnRouting
            btnName="Environment"
            navigateTo=""
            // backgroundColor="white"
            // textColor="#0077ba"
          />{" "}
          <BtnRouting
            btnName="Events"
            navigateTo=""
            // backgroundColor="white"
            // textColor="#0077ba"
          />{" "}
          <BtnRouting
            btnName="Finance"
            navigateTo=""
            // backgroundColor="white"
            // textColor="#0077ba"
          />{" "}
          <BtnRouting
            btnName="Food Drink"
            navigateTo=""
            // backgroundColor="white"
            // textColor="#0077ba"
          />{" "}
          <BtnRouting
            btnName="Games Comics"
            navigateTo=""
            // backgroundColor="white"
            // textColor="#0077ba"
          />{" "}
          <BtnRouting
            btnName="Geocoding"
            navigateTo=""
            // backgroundColor="white"
            // textColor="#0077ba"
          />{" "}
          <BtnRouting
            btnName="Government"
            navigateTo=""
            // backgroundColor="white"
            // textColor="#0077ba"
          />{" "}
          <BtnRouting
            btnName="Health"
            navigateTo=""
            // backgroundColor="white"
            // textColor="#0077ba"
          />{" "}
          <BtnRouting
            btnName="Jobs"
            navigateTo=""
            // backgroundColor="white"
            // textColor="#0077ba"
          />{" "}
          <BtnRouting
            btnName="Machine Learning"
            navigateTo=""
            // backgroundColor="white"
            // textColor="#0077ba"
          />{" "}
          <BtnRouting
            btnName="Music"
            navigateTo=""
            // backgroundColor="white"
            // textColor="#0077ba"
          />{" "}
          <BtnRouting
            btnName="News"
            navigateTo=""
            // backgroundColor="white"
            // textColor="#0077ba"
          />{" "}
          <BtnRouting
            btnName="Open Data"
            navigateTo=""
            // backgroundColor="white"
            // textColor="#0077ba"
          />{" "}
          <BtnRouting
            btnName="Open Source"
            navigateTo=""
            // backgroundColor="white"
            // textColor="#0077ba"
          />{" "}
          <BtnRouting
            btnName="Patent"
            navigateTo=""
            // backgroundColor="white"
            // textColor="#0077ba"
          />
        </Box>

        {/* Column 3 */}

        <Box sx={{ flex: 1 }}>
          <BtnRouting
            btnName="Personality"
            navigateTo=""
            // backgroundColor="white"
            // textColor="#0077ba"
          />
          <BtnRouting
            btnName="Phone"
            navigateTo=""
            // backgroundColor="white"
            // textColor="#0077ba"
          />{" "}
          <BtnRouting
            btnName="Photography"
            navigateTo=""
            // backgroundColor="white"
            // textColor="#0077ba"
          />{" "}
          <BtnRouting
            btnName="Programming"
            navigateTo=""
            // backgroundColor="white"
            // textColor="#0077ba"
          />{" "}
          <BtnRouting
            btnName="Science Math"
            navigateTo=""
            // backgroundColor="white"
            // textColor="#0077ba"
          />{" "}
          <BtnRouting
            btnName="Security"
            navigateTo=""
            // backgroundColor="white"
            // textColor="#0077ba"
          />{" "}
          <BtnRouting
            btnName="Shopping"
            navigateTo=""
            // backgroundColor="white"
            // textColor="#0077ba"
          />{" "}
          <BtnRouting
            btnName="Social"
            navigateTo=""
            // backgroundColor="white"
            // textColor="#0077ba"
          />{" "}
          <BtnRouting
            btnName="Sports fitness"
            navigateTo=""
            // backgroundColor="white"
            // textColor="#0077ba"
          />{" "}
          <BtnRouting
            btnName="Test Data"
            navigateTo=""
            // backgroundColor="white"
            // textColor="#0077ba"
          />{" "}
          <BtnRouting
            btnName="Text Analysis"
            navigateTo=""
            // backgroundColor="white"
            // textColor="#0077ba"
          />{" "}
          <BtnRouting
            btnName="Tracking"
            navigateTo=""
            // backgroundColor="white"
            // textColor="#0077ba"
          />{" "}
          <BtnRouting
            btnName="Transportation"
            navigateTo=""
            // backgroundColor="white"
            // textColor="#0077ba"
          />{" "}
          <BtnRouting
            btnName="URL Shortener"
            navigateTo=""
            // backgroundColor="white"
            // textColor="#0077ba"
          />{" "}
          <BtnRouting
            btnName="Vehicle"
            navigateTo=""
            // backgroundColor="white"
            // textColor="#0077ba"
          />{" "}
          <BtnRouting
            btnName="Video"
            navigateTo=""
            // backgroundColor="white"
            // textColor="#0077ba"
          />{" "}
          <BtnRouting
            btnName="Weather"
            navigateTo=""
            // backgroundColor="white"
            // textColor="#0077ba"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Main;
