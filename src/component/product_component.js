import "regenerator-runtime/runtime";

import React from "react";

const bootstrap = require("bootstrap");

import axios from "axios";

import async from "async";

import "../bootstrap/css/bootstrap.min.css";
import css from "./product_component.css";

import service from "../../images/service.png";

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

//The function below used to ajax req

async function getPictures_product(input_obj) {
  let reqList = [];

  let resList = [];

  for (var i = 0; i < input_obj.data.length; i++) {
    let req_url = "/get/picture/" + input_obj.data[i].pic_content + ".png";

    let req = axios.get(req_url, { responseType: "blob" });

    reqList.push(req);
    resList.push();
  }

  return axios.all(reqList).then(
    axios.spread(function(...resList) {
      return resList;
    })
  );
}

async function getPictures_catalog(input_obj) {
  let reqList = [];
  let resList = [];

  for (var i = 0; i < input_obj.data.length; i++) {
    let req_url = "/get/picture/" + input_obj.data[i].catalog_pic + ".png";

    let req = axios.get(req_url, { responseType: "blob" });

    reqList.push(req);
    resList.push();
  }

  return axios.all(reqList).then(
    axios.spread(function(...resList) {
      return resList;
    })
  );
}

function process_product(product, input_picture) {
  var blob, objectURL, product_t;

  product_t = product.data;

  for (var i = 0; i < product_t.length; i++) {
    blob = new Blob([input_picture[i].data]);
    objectURL = URL.createObjectURL(blob);

    product_t[i].pic_content = objectURL;
  }

  return product_t;
}

function process_product_catalog(product_catalog, input_picture) {
  var blob, objectURL, product_catalog_t;

  product_catalog_t = product_catalog.data;

  for (var i = 0; i < product_catalog_t.length; i++) {
    blob = new Blob([input_picture[i].data]);
    objectURL = URL.createObjectURL(blob);

    product_catalog_t[i].catalog_pic = objectURL;
  }

  return product_catalog_t;
}

async function req_product(obj) {
  var result_p,
    result_product,
    result_catalog,
    result_product_e,
    result_catalog_e;
  result_product = await axios.get("/get/json/product");

  result_catalog = await axios.get("/get/json/product_catalog");

  result_p = await getPictures_product(result_product);

  result_product_e = process_product(result_product, result_p);

  result_p = await getPictures_catalog(result_catalog);

  result_catalog_e = process_product_catalog(result_catalog, result_p);

  obj.setState({
    product: result_product_e,
    product_catalog: result_catalog_e
  });
}

export class Product_manage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active_number: 1000,
      catalog_list: [],
      product: [],
      product_catalog: []
    };

    this.handle_mouse_enter = this.handle_mouse_enter.bind(this);
    this.handle_mouse_out = this.handle_mouse_out.bind(this);
  }

  componentDidMount() {
    req_product(this).catch(e => {
      console.log(
        "There has been a problem with your ajax request: " + e.message
      );
    });
  }

  handle_mouse_enter(number) {
    this.setState({ active_number: number });
  }

  handle_mouse_out(number) {
    this.setState({ active_number: 1000 });
  }

  render() {
    var product_catalog_with_list, product_list, product, product_catalog;

    product = this.state.product;
    product_catalog = this.state.product_catalog;

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
