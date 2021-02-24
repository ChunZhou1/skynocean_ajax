import React from "react";

import Header from "./component/home_component";
import { Foot_container } from "./component/home_component";
import { Carousel_container } from "./component/home_component";
import { Product_manage } from "./component/product_component";

function Product() {
  return (
    <div>
      <Header />;
      <Carousel_container />
      <Product_manage />
      <Foot_container />
    </div>
  );
}

export default Product;
