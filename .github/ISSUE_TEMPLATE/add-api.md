Phase 1: File Creation


1.1 - Locate the following:

src/api/###/###.txt 

locate the ### link.


1.1 - Follow the hyperlink to read through the documentation and get an idea of the API usage.


1.2 - Create a file in the:

src/api/### folder named ###.js


---------------------


Phase 2: Routing


2.1 - Locate the following:

src/App.js

Find the route with path="/###"


2.2 - Input on the line below:

<Route path="/###" element={<### />} />

!!NOTE!! 

Make sure to type the component and select from the dropdown <### /> and then select from the dropdown so the file import is automaticaly populated 

!!NOTE!!


2.3 - Locate the following:

src/api/###/###Dash.js


2.4 - Add the following component below the closing /> of the last Btn Routing:

 <BtnRouting
          btnName="###"
          navigateTo="###"
          backgroundColor="#0077ba"
          textColor="white"
        />


---------------------


Phase 3: Content


3.1 - Locate the following (file you made):

src/api/###/

3.2 - Add the following code:

import { Box } from "@mui/material";
import BoxApiInfo from "../../core/main/BoxApiInfo";
import Endpoints from "../../core/main/Endpoints";
import BoxTest from "../../core/main/BoxTestCrud";
import NavBar from "../../core/main/navigation/NavBar";

const ### = () => {
  return (
    <Box>
      <NavBar link="/###" route2="/###" />
      <Box>
        <BoxTest />
        <BoxApiInfo baseEndpoint="" />
        <Endpoints header="GET" endpoint="/" />
        <Endpoints
          header="GET"
          endpoint="/"
          description="/"
        />
      </Box>
    </Box>
  );
};

export default ###;

3.3 - Add the base endpoint (found on the api site doccumentation)

3.4 - Add the endpoints (add extra components if their are more than 1)

3.5 - Test the functionality



Have Fun :)
