import React from "react";

import Header from "./component/home_component";
import { Carousel_container } from "./component/home_component";
import { Card_manage } from "./component/home_component";
import { Middle_2_manage } from "./component/home_component";
import { Middle_3_container } from "./component/home_component";
import { Foot_container } from "./component/home_component";

function Home() {
  return (
    <div>
      <Header />
      <Carousel_container />
      <Card_manage />
      <Middle_2_manage />
      <Middle_3_container />
      <Foot_container />
      
    </div>
  );
}
/*  */
export default Home;
