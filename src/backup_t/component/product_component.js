import React from "react";

const bootstrap = require("bootstrap");

import "../bootstrap/css/bootstrap.min.css";
import css from "./product_component.css";
import Product from "../product";

import { Middle_3_image_text } from "./home_component";
import { Middle_3_image } from "./home_component";

import mid_1 from "../../images/mid_1.png";
import mid_2 from "../../images/mid_2.png";
import mid_3 from "../../images/mid_3.png";

const product = [
  {
    id: 1,
    content: "Home",
    pic_link: mid_1,
    name: "light",
    price: "$3.99"
  },

  {
    id: 2,
    content: "Home",
    pic_link: mid_2,
    name: "light",
    price: "$3.99"
  },
  {
    id: 3,
    content: "Home",
    pic_link: mid_3,
    name: "light",
    price: "$3.99"
  },
  {
    id: 4,
    content: "Home",
    pic_link: mid_1,
    name: "light",
    price: "$3.99"
  },

  {
    id: 5,
    content: "Home",
    pic_link: mid_2,
    name: "light",
    price: "$3.99"
  },
  {
    id: 6,
    content: "Home",
    pic_link: mid_3,
    name: "light",
    price: "$3.99"
  },
  {
    id: 7,
    content: "Home",
    pic_link: mid_1,
    name: "light",
    price: "$3.99"
  },

  {
    id: 8,
    content: "Home",
    pic_link: mid_2,
    name: "light",
    price: "$3.99"
  },
  {
    id: 9,
    content: "Home",
    pic_link: mid_3,
    name: "light",
    price: "$3.99"
  },
  {
    id: 10,
    content: "Home",
    pic_link: mid_1,
    name: "light",
    price: "$3.99"
  },

  {
    id: 11,
    content: "Home",
    pic_link: mid_2,
    name: "light",
    price: "$3.99"
  },
  {
    id: 12,
    content: "Home",
    pic_link: mid_3,
    name: "light",
    price: "$3.99"
  }
];

function Product_main_container(props) {
  return (
    <div className="container">
      <div style={{ marginLeft: "10%" }}>
        <Product_title title={"Service and Product"} />
      </div>

      <div className="row">{props.children}</div>
    </div>
  );
}

function Product_title(props) {
  return (
    <div style={{ color: "orange" }}>
      <h2>{props.title}</h2>
    </div>
  );
}

function Product_image_text(props) {
  return (
    <div className="col-sm-4 col-md-3">
      <div className={props.class}>
        <Product_image
          src={props.src}
          handle_mouse_enter={props.handle_mouse_enter}
          handle_mouse_out={props.handle_mouse_out}
        />
        <Product_image name={props.name} price={props.price} />
      </div>
    </div>
  );
}

function Product_image(props) {
  return (
    <img
      src={props.src}
      onMouseEnter={props.handle_mouse_enter}
      onMouseLeave={props.handle_mouse_out}
    />
  );
}

function Product_text(props) {
  return (
    <div
      style={{ position: "absolute", left: "15%", top: "10%", width: "70%" }}
    >
      <p style={{ color: "orange" }}>{props.name}</p>
      <p>{props.price}</p>
    </div>
  );
}

export class Product_manage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { active_number: 1000 }; /*1000 means no active number */

    this.handle_mouse_enter = this.handle_mouse_enter.bind(this);
    this.handle_mouse_out = this.handle_mouse_out.bind(this);
  }

  handle_mouse_enter(number) {
    this.setState({ active_number: number });
  }

  handle_mouse_out(number) {
    this.setState({ active_number: 1000 });
  }

  render() {
    var active_number1 = this.state.active_number;

    const product_list = product.map((item, index) => {
      var if_active;

      if_active = index == active_number1 ? true : false;

      var classname;

      classname = if_active == true ? "ani" : "product_img";

      return (
        <Product_image_text
          key={item.id.toString()}
          src={item.pic_link}
          class={classname}
          price={item.price}
          name={item.name}
          handle_mouse_enter={this.handle_mouse_enter.bind(this, index)}
          handle_mouse_out={this.handle_mouse_out.bind(this, index)}
        />
      );
    });

    return <Product_main_container>{product_list}</Product_main_container>;
  }
}

//////////////
