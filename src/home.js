import React from "react";
const bootstrap = require("bootstrap");

import "./bootstrap/css/bootstrap.min.css";
import Header from "./component/home_component";
import { Carousel_container } from "./component/home_component";
import { Card_manage } from "./component/home_component";
import { Middle_2_manage } from "./component/home_component";

function Home() {
  return (
    <div>
      <Header />;
      <Carousel_container />
      <Card_manage />
      <Middle_2_manage />
    </div>
  );
}

export default Home;
