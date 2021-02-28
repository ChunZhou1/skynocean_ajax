import React from "react";

import { Switch, Route } from "react-router-dom";

import { Card_manage } from "./component/home_component";
import { Middle_2_manage } from "./component/home_component";
import { Middle_3_container } from "./component/home_component";

import Product from "./product";

function Home() {
  return (
    <div>
      <Card_manage />
      <Middle_2_manage />
      <Middle_3_container />
    </div>
  );
}

export function Main() {
  return (
    <switch>
      <Route path="/">
        <Home />
      </Route>
            
      <Route path="/product">
        <Product />
      </Route>
    </switch>
  );
}
