import React from "react";

const bootstrap = require("bootstrap");

import axios from "axios";

import "../bootstrap/css/bootstrap.min.css";
import css from "./product_component.css";

import cent_1 from "../../images/cent_1.png";
import cent_2 from "../../images/cent_2.png";
import cent_3 from "../../images/cent_3.png";
import cent_4 from "../../images/cent_4.png";
import cent_5 from "../../images/cent_5.png";
import cent_6 from "../../images/cent_6.png";
import cent_7 from "../../images/cent_7.png";
import cent_8 from "../../images/cent_8.png";
import cent_9 from "../../images/cent_9.png";
import cent_10 from "../../images/cent_10.png";
import cent_11 from "../../images/cent_11.png";
import cent_12 from "../../images/cent_12.png";
import cent_13 from "../../images/cent_13.png";
import cent_14 from "../../images/cent_14.png";
import cent_15 from "../../images/cent_15.png";
import cent_16 from "../../images/cent_16.png";
import cent_17 from "../../images/cent_17.png";
import cent_18 from "../../images/cent_18.png";
import cent_19 from "../../images/cent_19.png";
import cent_20 from "../../images/cent_20.png";
import cent_21 from "../../images/cent_21.png";
import cent_22 from "../../images/cent_22.png";
import cent_23 from "../../images/cent_23.png";
import cent_24 from "../../images/cent_24.png";
import cent_25 from "../../images/cent_25.png";
import cent_26 from "../../images/cent_26.png";

import cat_1 from "../../images/cat_1.png";
import cat_2 from "../../images/cat_2.png";
import cat_3 from "../../images/cat_3.png";
import cat_4 from "../../images/cat_4.png";

import service from "../../images/service.png";

const product_catalog = [
  {
    id: 1,
    catalog_name: "Smart Home",
    catalog_pic: cat_1
  },

  {
    id: 2,
    catalog_name: "Smart Manufacturing",
    catalog_pic: cat_2
  },

  {
    id: 3,
    catalog_name: "Smart health",
    catalog_pic: cat_3
  },

  {
    id: 4,
    catalog_name: "Smart Farming - Agriculture",
    catalog_pic: cat_4
  }
];

const product = [
  {
    id: 1,
    content: "Home with Home Hub and Home Mini on table",
    pic_content: cent_1,
    catalog: "Smart Home"
  },

  {
    id: 2,
    content: "HomeKit_Hero_CAN@2x",
    pic_content: cent_2,
    catalog: "Smart Home"
  },
  {
    id: 3,
    content: "IOT-2",
    pic_content: cent_3,
    catalog: "Smart Home"
  },
  {
    id: 4,
    content: "IOT-3",
    pic_content: cent_4,
    catalog: "Smart Home"
  },

  {
    id: 5,
    content: "google nest smart home devices",
    pic_content: cent_5,
    catalog: "Smart Home"
  },
  {
    id: 6,
    content: "smart-home",
    pic_content: cent_6,
    catalog: "Smart Home"
  },
  {
    id: 7,
    content: "smarthome-pixabay-resized",
    pic_content: cent_7,
    catalog: "Smart Home"
  },

  {
    id: 8,
    content: "Photo-for-julies Google-Home-story",
    pic_content: cent_8,
    catalog: "Smart Home"
  },
  {
    id: 9,
    content: "IOT Smart Home",
    pic_content: cent_9,
    catalog: "Smart Home"
  },
  {
    id: 10,
    content: "IIOT SmartFactory",
    pic_content: cent_10,
    catalog: "Smart Manufacturing"
  },

  {
    id: 11,
    content: "Industry 4 point 0",
    pic_content: cent_11,
    catalog: "Smart Manufacturing"
  },
  {
    id: 12,
    content: "IoT",
    pic_content: cent_12,
    catalog: "Smart Manufacturing"
  },
  {
    id: 13,
    content: "IOT_4_Compressed",
    pic_content: cent_13,
    catalog: "Smart Manufacturing"
  },
  {
    id: 14,
    content: "Iot-In-Manufacturing",
    pic_content: cent_14,
    catalog: "Smart Manufacturing"
  },
  {
    id: 15,
    content: "iot-in-manufacturing-main",
    pic_content: cent_15,
    catalog: "Smart Manufacturing"
  },
  {
    id: 16,
    content: "Iot-for-Manufacturing",
    pic_content: cent_16,
    catalog: "Smart Manufacturing"
  },
  {
    id: 17,
    content: "Smart Health",
    pic_content: cent_17,
    catalog: "Smart health"
  },
  {
    id: 18,
    content: "Zwift training",
    pic_content: cent_18,
    catalog: "Smart health"
  },
  {
    id: 19,
    content: "Zwift running",
    pic_content: cent_19,
    catalog: "Smart health"
  },
  {
    id: 20,
    content: "Zwift running",
    pic_content: cent_20,
    catalog: "Smart health"
  },
  {
    id: 21,
    content: "Zwift running",
    pic_content: cent_21,
    catalog: "Smart health"
  },
  {
    id: 22,
    content: "Agriculture-iot",
    pic_content: cent_22,
    catalog: "Smart Farming - Agriculture"
  },
  {
    id: 23,
    content: "App-of-iot-in-Agriculture",
    pic_content: cent_23,
    catalog: "Smart Farming - Agriculture"
  },
  {
    id: 24,
    content: "climate condition",
    pic_content: cent_24,
    catalog: "Smart Farming - Agriculture"
  },
  {
    id: 25,
    content: "b7auuaow-smart-farming-iot",
    pic_content: cent_25,
    catalog: "Smart Farming - Agriculture"
  },
  {
    id: 26,
    content: "Smart-Greenhouse",
    pic_content: cent_26,
    catalog: "Smart Farming - Agriculture"
  }
];

function Product_main_container(props) {
  return (
    <div className="container" style={{ width: "100%" }}>
      <div style={{ marginLeft: "0%", marginTop: "3%", marginBottom: "3%" }}>
        <Product_title title={"Service and Product"} />
      </div>
      {props.children}
    </div>
  );
}

function Product_sub_catainer(props) {
  return (
    <div>
      <div style={{ marginBottom: "2%" }}>{props.top}</div>

      <div className="row">{props.bottom}</div>
    </div>
  );
}

function Product_title(props) {
  return (
    <div style={{ color: "#ef8709" }}>
      <span
        style={{ fontSize: "40px", fontWeight: "800", letterSpacing: "2px" }}
      >
        {props.title}
      </span>
    </div>
  );
}

function Product_catalog(props) {
  return (
    <div>
      <span>
        <img src={props.src} style={{ width: "2%" }} />
      </span>
      <span style={{ fontWeight: "650" }}>&nbsp;&nbsp;{props.catalog}</span>
    </div>
  );
}

function Product_card_image(props) {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3" style={{ marginBottom: "4%" }}>
      <div className={props.class}>
        <Product_image
          src={props.src}
          handle_mouse_enter={props.handle_mouse_enter}
          handle_mouse_out={props.handle_mouse_out}
        />
        <Product_text content={props.content} />
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
      style={{ width: "100%", height: "100" }}
    />
  );
}

/* */
function Product_text(props) {
  return (
    <div style={{ position: "absolute", left: "6%", top: "70%", width: "90%" }}>
      <span
        style={{
          color: "#1c5996",
          fontSize: "15px",
          fontWeight: "600"
        }}
      >
        {props.content}
      </span>
    </div>
  );
}

///////////////////////////////////////////////////////////

export class Product_manage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { active_number: 1000, catalog_list: [] };

    this.handle_mouse_enter = this.handle_mouse_enter.bind(this);
    this.handle_mouse_out = this.handle_mouse_out.bind(this);
  }

  componentDidMount() {
    // 使用axios完成ajax数据请求
    axios
      .get("/search/ajax")
      .then(res => {
        /*const { goodlists } = res.data;*/
        this.setState({
          catalog_list: res.data
        });

        console.log("receive success!!");
        console.log(res.data);
      })
      .catch(err => {
        console.log("find error");
        console.log(err);
      });
  }

  handle_mouse_enter(number) {
    this.setState({ active_number: number });
  }

  handle_mouse_out(number) {
    this.setState({ active_number: 1000 });
  }

  render() {
    var product_catalog_with_list, product_list;

    var active_number1 = this.state.active_number;

    product_catalog_with_list = product_catalog.map(
      (item_catalog, index_catalog) => {
        ////////////////////
        product_list = product.map((item, index) => {
          if (item_catalog.catalog_name == item.catalog) {
            var if_active;

            if_active = item.id - 1 == active_number1 ? true : false;

            var classname;

            classname = if_active == true ? "ani" : "product_img";

            return (
              <Product_card_image
                key={item.id.toString()}
                src={item.pic_content}
                class={classname}
                content={item.content}
                handle_mouse_enter={this.handle_mouse_enter.bind(
                  this,
                  item.id - 1
                )}
                handle_mouse_out={this.handle_mouse_out.bind(this, item.id - 1)}
              />
            );
          } ///if (item_catalog.catalog_name == item.catalog)
        }); /////////////////// end of product_list loop

        return (
          <Product_sub_catainer
            key={item_catalog.id.toString()}
            top={
              <Product_catalog
                key={item_catalog.id.toString()}
                src={item_catalog.catalog_pic}
                catalog={item_catalog.catalog_name}
              />
            }
            bottom={product_list}
          />
        );

        //////////////////////////////////
      }
    );

    return (
      <Product_main_container>
        {product_catalog_with_list}
      </Product_main_container>
    );
  }
}

export function Product_service() {
  return (
    <div className="container-fluid px-0">
      <img src={service} style={{ width: "100%", paddingBottom: "0" }} />
    </div>
  );
}
