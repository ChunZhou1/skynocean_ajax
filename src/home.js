import React from "react";



import { Card_manage } from "./component/home_component";
import { Middle_2_manage } from "./component/home_component";
import { Middle_3_container } from "./component/home_component";



export function Home() {
  return (
    <div>
      <Card_manage />
      <Middle_2_manage />
      <Middle_3_container />
    </div>
  );
}
