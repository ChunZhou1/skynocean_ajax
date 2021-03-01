import React from "react";

import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

import { Home } from "./home";
import { Product } from "./product";
import { About } from "./about";
import { Contact } from "./contact";
import { Public_header } from "./public";
import { Public_footer } from "./public";

function Main() {
  return (
    <Switch>
      <Route path="/product">
        <Product />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/">
        <Home />
      </Route>
            
    </Switch>
  );
}

/*function Main() {
  return (
    <Switch>
      <Route path="/">
        <Contact />
      </Route>
            
    </Switch>
  );
}*/

function App() {
  return (
    <BrowserRouter>
      <Public_header />
      <Main />
      <Public_footer />
    </BrowserRouter>
  );
}

export default App;
