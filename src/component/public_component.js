import React from "react";
import { Link } from "react-router-dom";
const bootstrap = require("bootstrap");

import "../bootstrap/css/bootstrap.min.css";
import css from "./public_component.css";

import P1 from "../../images/home1.svg";
import P2 from "../../images/home2.svg";
import P3 from "../../images/home3.svg";

const main_menu = [
  {
    id: 1,
    content: "Home",
    content_link: "/"
  },
  {
    id: 2,
    content: "Service and Product",
    content_link: "/product"
  },
  {
    id: 3,
    content: "Contact us",
    content_link: "/contact"
  },
  {
    id: 4,
    content: "About us",
    content_link: "/about"
  }
];

////////This is header component/////////////////////////////////////////////////////////////

export function Header(props) {
  return (
    <div className="container-fluid px-0">
      <div style={{ backgroundColor: "#ef8709", height: "20px" }}></div>
      <div className="d-flex justify-content-between">
        <div
          style={{ marginLeft: "9%", marginTop: "0.2%", marginBottom: "0%" }}
        >
          <Brand />
        </div>
        <div style={{ marginRight: "10%", marginTop: "1.5%" }}>
          <Home_nav_manage />
        </div>
      </div>
    </div>
  );
}

import brand from "../../images/brand.png";
function Brand() {
  return <img src={brand} style={{ width: "45%" }} />;
}

function Nav_item(props) {
  if (props.active == true) {
    return (
      <li className="nav-item">
        <Link
          to={props.href}
          className="nav-link"
          style={{ color: "#ef8709", fontSize: "15px", fontWeight: "600" }}
          onMouseEnter={props.nav_item_mouse_enter}
          onMouseLeave={props.nav_item_mouse_out}
        >
          {props.content}
        </Link>
      </li>
    );
  } else {
    return (
      <li className="nav-item">
        <Link
          to={props.href}
          className="nav-link"
          style={{ color: "#7491b6", fontSize: "15px", fontWeight: "600" }}
          onMouseEnter={props.nav_item_mouse_enter}
          onMouseLeave={props.nav_item_mouse_out}
        >
          {props.content}
        </Link>
      </li>
    );
  }
}

class Home_nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const menu_list = main_menu.map((item, index) => {
      var if_active;

      if_active = index == this.props.active_number ? true : false;

      return (
        <Nav_item
          key={item.id.toString()}
          active={if_active}
          content={item.content}
          href={item.content_link}
          nav_item_mouse_enter={this.props.nav_item_mouse_enter.bind(
            this,
            index
          )}
          nav_item_mouse_out={this.props.nav_item_mouse_out.bind(this, index)}
        ></Nav_item>
      );
    });

    return <ul className="nav justify-content-end ">{menu_list}</ul>;
  }
}

class Home_nav_manage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active_number: 1000
    };

    this.hand_mouse_enter = this.hand_mouse_enter.bind(this);
    this.hand_mouse_out = this.hand_mouse_out.bind(this);
  }

  hand_mouse_enter(number) {
    this.setState({ active_number: number });
  }

  hand_mouse_out(number) {
    this.setState({ active_number: 1000 });
  }

  render() {
    var active_number1 = this.state.active_number;

    return (
      <Home_nav
        active_number={active_number1}
        nav_item_mouse_enter={this.hand_mouse_enter}
        nav_item_mouse_out={this.hand_mouse_out}
      ></Home_nav>
    );
  }
}

///////////////////////this is carousel section ////////////////////////

export function Carousel_container() {
  return (
    <div
      className="container-fluid px-0 mt-2"
      style={{ width: "100%", height: "100%" }}
    >
      <Carousel_1 />
    </div>
  );
}

class Carousel_1 extends React.Component {
  constructor(props) {
    super(props);
    this.carousel = React.createRef();
    this.carousel_1 = null;

    this.handle_action = this.handle_action.bind(this);
  }

  //for future use

  handle_action() {}

  componentDidMount() {
    if (this.carousel_1 == null) {
      this.carousel_1 = new bootstrap.Carousel(this.carousel.current);

      this.carousel.current.addEventListener(
        "slid.bs.carousel",
        this.handle_action
      );
    }
  }

  render() {
    return (
      <div>
        <div
          id="carouselExampleInterval"
          className="carousel carousel-dark slide"
          data-bs-ride="carousel"
          ref={this.carousel}
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="6000">
              <img src={P1} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="6000">
              <img src={P2} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="6000">
              <img src={P3} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    );
  }
}

/////////////////////the function below used to process foot/////////////////////////////////////////////////////////////////////////

function Foot_text() {
  return (
    <div>
      <div
        style={{ color: "#ef8709", fontWeight: "600" }}
        className="foot_font_width"
      >
        © SkynOcean Solutions Inc 2021
      </div>

      <div
        style={{ color: "#ef8709", fontWeight: "600" }}
        className="foot_font_width"
      >
        Address: Bay D, McNeil Mall, 251 Water Street, Summerside, PE, C1N 1B5
      </div>

      <div
        style={{ color: "#ef8709", fontWeight: "600" }}
        className="foot_font_width"
      >
        Email: info@skynocean.ca Phone: 902 436 2414
      </div>
    </div>
  );
}

export function Foot_container() {
  return (
    <div
      style={{
        position: "relative"
      }}
    >
      <div style={{ textAlign: "center", paddingTop: "5%" }}>
        <Foot_text />
      </div>
      <div
        style={{
          position: "absolute",
          left: "0",
          top: "0",
          zIndex: "-2"
        }}
      >
        <Foot_image />
      </div>
    </div>
  );
}

import bottom from "../../images/bottom.svg";
function Foot_image() {
  return <img src={bottom} style={{ height: "70%", width: "100%" }} />;
}
