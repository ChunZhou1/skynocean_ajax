import React from "react";

import { BrowserRouter } from "react-router-dom";

import Header from "./component/home_component";
import { Foot_container } from "./component/home_component";
import { Carousel_container } from "./component/home_component";
import { Main } from "./home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Carousel_container />
      <Main />
      <Foot_container />
    </BrowserRouter>
  );
}
export default App;
