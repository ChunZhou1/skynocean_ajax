import React from "react";

import { Product_manage } from "./component/product_component";
import { Product_service } from "./component/product_component";

export function Product() {
  return (
    <div>
      <Product_manage />
      <Product_service />
    </div>
  );
}
