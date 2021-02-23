import React from "react";
const bootstrap = require("bootstrap");

import "./bootstrap/css/bootstrap.min.css";
import Home_nav from "./component/home_component";

function Home() {
  return <Home_nav active_number={2} />;
}

export default Home;
