import React from "react";

const bootstrap = require("bootstrap");

import "../bootstrap/css/bootstrap.min.css";
import css from "./home_component.css";
import { Link } from "react-router-dom";

import P1 from "../../images/home1.svg";
import P2 from "../../images/home2.svg";
import P3 from "../../images/home3.svg";
import mid_1 from "../../images/mid_1.png";
import mid_2 from "../../images/mid_2.png";
import mid_3 from "../../images/mid_3.png";
import house from "../../images/house.svg";
import circle from "../../images/Circle.svg";

import { getExplore } from "../brower.js";
import { getExploreName } from "../brower.js";
import { compensate } from "../brower.js";

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

/* tooltip */

const tooltip = [
  {
    id: 1,
    name: "doorbell Camera ",
    pic_link: tp1,
    content:
      "See who's at the door with live video and two-way voice. If you’re not home, you can speak to your visitor and even unlock the door for your trusted guests.",
    a_left: -0.01,
    a_top: 0.89,
    c_left: 0.02,
    c_top: 0.69
  },
  {
    id: 2,
    name: "Smart Lock ",
    pic_link: tp2,
    content:
      "Eliminate the need for keys with smart locks. Give each user their own lock code, remotely lock or unlock the door through your app, and get a notification whenever a user unlocks the door.",
    a_left: 0.06,
    a_top: 0.89,
    c_left: 0.09,
    c_top: 0.65
  },
  {
    id: 3,
    name: "Garage Door Control ",
    pic_link: tp3,
    content:
      "Always forgetting to close the garage? Get an alert if the garage is left open, and close it from your app",
    a_left: 0.3,
    a_top: 0.78,
    c_left: 0.33,
    c_top: 0.61
  },
  {
    id: 4,
    name: "Water Sensor ",
    pic_link: tp4,
    content:
      "Don’t let water leaks go undetected. Get alerts if a leak is detected and avoid potentially costly water damage",
    a_left: 0.4,
    a_top: 0.65,
    c_left: 0.0,
    c_top: 0.47
  },

  {
    id: 7,
    name: "Window Sensor ",
    pic_link: tp5,
    content:
      "Window sensors can notify you if a window is left open and communicate with your thermostat to help modify the temperature setting if left open for too long.",
    a_left: 0.8,
    a_top: 0.26,
    c_left: 0.4,
    c_top: 0.05
  },
  {
    id: 6,
    name: "Outdoor Video Camera ",
    pic_link: tp6,
    content:
      "Know what's going on outside your home without having to leave the couch. Weather-resistant, freeze-resistant and UV protected, with a wide field of view and night vision.",
    a_left: 0.9,
    a_top: 0.28,
    c_left: 0.5,
    c_top: 0.07
  },
  {
    id: 5,
    name: "Security Panel ",
    pic_link: tp7,
    content:
      "With a variety of panels to choose from, you can take advantage of features such as two-way voice for emergency response, and severe weather alerts that notify you if dangerous conditions are detected nearby. Alarm.com’s Crash & Smash technology ensures that your system will still work even if the panel is smashed.",
    a_left: 0.54,
    a_top: 0.78,
    c_left: 0.56,
    c_top: 0.45
  },
  {
    id: 8,
    name: "Video Camera",
    pic_link: tp8,
    content:
      "Keep an eye on what matters to you. Peek-in to watch live streaming video anytime, get video alerts if a specific activity occurs, and watch recorded clips – all from your app.",
    a_left: 0.06,
    a_top: 0.26,
    c_left: 0.09,
    c_top: 0.28
  },
  {
    id: 9,
    name: "Temp Sensor",
    pic_link: tp9,
    content:
      "Add a temperature sensor to any room for added temperature optimization.",
    a_left: 0.37,
    a_top: 0.26,
    c_left: 0.39,
    c_top: 0.29
  },
  {
    id: 12,
    name: "Image Sensor",
    pic_link: tp10,
    content:
      "See what’s happening when motion is detected. The image sensor snaps a picture and sends it to you, so you’ll know what’s happening.",
    a_left: 0.56,
    a_top: 0.02,
    c_left: 0.58,
    c_top: 0.05
  },
  {
    id: 11,
    name: "Smoke & CO Detectors",
    pic_link: tp11,
    content:
      "Manage lights with automatic schedules, and set rules to have lights automatically turn on in an alarm event for added visibility and safety.",
    a_left: 0.25,
    a_top: 0.01,
    c_left: 0.27,
    c_top: 0.04
  },
  {
    id: 10,
    name: "Light Control",
    pic_link: tp12,
    content:
      "Manage lights with automatic schedules, and set rules to have lights automatically turn on in an alarm event for added visibility and safety.",
    a_left: 0.49,
    a_top: 0.33,
    c_left: 0.52,
    c_top: 0.16
  }
];

/* these function used to export  ////////////////////////////////////////////////////////*/

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

export default Header;

function Header(props) {
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

export class Card_manage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { display_card_num: 0 };
    this.handle_card1_click = this.handle_card1_click.bind(this);
    this.handle_card2_click = this.handle_card2_click.bind(this);
    this.handle_card3_click = this.handle_card3_click.bind(this);
  }

  handle_card1_click() {
    this.setState({ display_card_num: 0 });
  }

  handle_card2_click() {
    this.setState({ display_card_num: 1 });
  }

  handle_card3_click() {
    this.setState({ display_card_num: 2 });
  }

  render() {
    var display_num1 = this.state.display_card_num;
    var src1t, src2t, src3t, class1t, class2t, class3t;
    src1t = si1;
    src2t = si2;
    src3t = si3;
    class1t = "card item";
    class2t = "card item";
    class3t = "card item";

    switch (display_num1) {
      case 0:
        src1t = si1_1;
        class1t = "card item show";
        break;

      case 1:
        src2t = si2_1;
        class2t = "card item show";
        break;

      case 2:
        src3t = si3_1;
        class3t = "card item show";
        break;

      default:
        src1t = si1_1;
        class1t = "card item show";
        break;
    }

    return (
      <Home_middle_1
        display_card_num={display_num1}
        src1={src1t}
        src2={src2t}
        src3={src3t}
        class1={class1t}
        class2={class2t}
        class3={class3t}
        handle_card1_click={this.handle_card1_click.bind(this)}
        handle_card2_click={this.handle_card2_click.bind(this)}
        handle_card3_click={this.handle_card3_click.bind(this)}
      />
    );
  }
}

import tp1 from "../../images/ring.png";
import tp2 from "../../images/tp2.png";
import tp3 from "../../images/tp3.png";
import tp4 from "../../images/tp4.png";
import tp5 from "../../images/tp5.png";
import tp6 from "../../images/tp6.png";
import tp7 from "../../images/tp7.png";
import tp8 from "../../images/tp8.png";
import tp9 from "../../images/tp9.png";
import tp10 from "../../images/tp10.png";
import tp11 from "../../images/tp11.png";
import tp12 from "../../images/tp12.png";

export class Middle_2_manage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { active_number: 100 };

    this.handle_mouse_enter = this.handle_mouse_enter.bind(this);
    this.handle_mouse_out = this.handle_mouse_out.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize.bind(this)); //监听窗口大小改变
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize.bind(this));
  }

  handleResize() {
    this.setState({ active_number: 1000 });
  }

  handle_mouse_enter(number) {
    this.setState({ active_number: number });
  }

  handle_mouse_out(number) {
    this.setState({ active_number: 100 });
  }

  render() {
    var active_number1 = this.state.active_number;

    const middle_2_list = tooltip.map((item, index) => {
      var if_active;

      if_active = index == active_number1 ? false : true;

      var screen_width = document.body.clientWidth;

      var brower = getExploreName();

      var a_top_s, c_top_s;

      var result = compensate(item.id, item.a_top, item.c_top);

      a_top_s = result[0];
      c_top_s = result[1];

      if (index == 0) {
        console.log(screen_width);
      }

      var a_left1 = (item.a_left * 100).toString() + "%";
      var a_top1 = (a_top_s * 100).toString() + "%";
      var c_left1 = (item.c_left * 100).toString() + "%";
      var c_top1 = (c_top_s * 100).toString() + "%";

      return (
        <Middle_2_tooltip
          key={item.id.toString()}
          active={if_active}
          pic_link={item.pic_link}
          content={item.content}
          name={item.name}
          a_left={a_left1}
          a_top={a_top1}
          c_left={c_left1}
          c_top={c_top1}
          handle_mouse_enter={this.handle_mouse_enter.bind(this, index)}
          handle_mouse_out={this.handle_mouse_out.bind(this, index)}
        />
      );
    });

    return <Middle_2_container>{middle_2_list}</Middle_2_container>;
  }
}

////////This is header component/////////////////////////////////////////////////////////////

import brand from "../../images/brand.png";
function Brand() {
  return <img src={brand} style={{ width: "45%" }} />;
}

/*input: menu_content,href,active */
/*function Nav_item(props) {
  if (props.active == true) {
    return (
      <li className="nav-item">
        <div
          className="nav-link"
          href={"#"}
          style={{ color: "#ef8709", fontSize: "15px", fontWeight: "600" }}
          onMouseEnter={props.nav_item_mouse_enter}
          onMouseLeave={props.nav_item_mouse_out}
        >
          {props.content}
        </div>
      </li>
    );
  } else {
    return (
      <li className="nav-item">
        <div
          className="nav-link"
          style={{ color: "#7491b6", fontSize: "15px", fontWeight: "600" }}
          href={"#"}
          onMouseEnter={props.nav_item_mouse_enter}
          onMouseLeave={props.nav_item_mouse_out}
        >
          {props.content}
        </div>
      </li>
    );
  }
}*/

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
/////////////////////////////this is middle_1 component ////////////////////////////////////////////

function Home_middle_1(props) {
  return (
    <div
      className="container-fluid px-0 "
      style={{ backgroundColor: "#efefef", width: "100%" }}
    >
      <div className="row">
        <div
          className="col-sm-12 col-md-6 col-lg-6"
          style={{
            marginLeft: "10%",
            marginTop: "3%",
            marginBottom: "3%"
          }}
        >
          <Introduce_1 />
          <div className="row" style={{ marginTop: "20%", height: "25%" }}>
            <div className="col-sm-6 col-md-6 col-lg-4">
              <Card_1
                handle_card1_click={props.handle_card1_click}
                src={props.src1}
                class={props.class1}
              />
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4">
              <Card_2
                handle_card2_click={props.handle_card2_click}
                src={props.src2}
                class={props.class2}
              />
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4">
              <Card_3
                handle_card3_click={props.handle_card3_click}
                src={props.src3}
                class={props.class3}
              />
            </div>
          </div>
        </div>
        <div
          className="col-sm-6 col-md-4 "
          style={{ marginTop: "3%", marginBottom: "3%" }}
        >
          <Mid_image display_num={props.display_card_num} />
        </div>
      </div>
    </div>
  );
}

import arrow_r from "../../images/arrow_r.png";

function Introduce_1() {
  return (
    <div style={{ width: "95%", paddingRight: "5%" }}>
      <span
        style={{
          color: "#ef8709",
          fontWeight: "1000",
          fontSize: "50px",
          letterSpacing: "2px",
          wordSpacing: "2px"
        }}
      >
        Advanced Services IoT
      </span>
      <br />

      <div style={{ marginTop: "10%", lineHeight: "120%" }}>
        <span>
          <img src={arrow_r} style={{ width: "3%" }}></img>
        </span>
        <span style={{ fontWeight: "800", fontSize: "18px" }}>
          &nbsp; &nbsp;IoT (Internet of Things)
        </span>
        <span
          style={{
            fontSize: "15px",
            fontWeight: "500"
          }}
        >
          - the network of physical objects or “things” embedded with
          electronics, software, sensors, and network connectivity which enables
          those objects to collect and exchange data
        </span>
      </div>

      <div style={{ marginTop: "5%", lineHeight: "120%" }}>
        <span>
          <img src={arrow_r} style={{ width: "3%" }}></img>
        </span>
        <span style={{ fontWeight: "800", fontSize: "18px" }}>
          &nbsp; &nbsp;Target customers:
        </span>
        <span
          style={{
            fontSize: "15px",
            fontWeight: "500"
          }}
        >
          &nbsp;home users, small and medium sized businesses such as Offices,
          factories, farms
        </span>
      </div>

      <div style={{ marginTop: "5%", lineHeight: "120%" }}>
        <span>
          <img src={arrow_r} style={{ width: "3%" }}></img>
        </span>
        <span style={{ fontWeight: "800", fontSize: "18px" }}>
          &nbsp; &nbsp;Work with customers
        </span>
        <span
          style={{
            fontSize: "15px",
            fontWeight: "500"
          }}
        >
          &nbsp;regarding their needs and potential applications, design
          processes and implementing IoT application solutions
        </span>
      </div>
    </div>
  );
}

import si1 from "../../images/si1.png";
import si2 from "../../images/si2.png";
import si3 from "../../images/si3.png";
import si1_1 from "../../images/si1_1.png";
import si2_1 from "../../images/si2_1.png";
import si3_1 from "../../images/si3_1.png";
function Card_1(props) {
  return (
    <div
      className={props.class}
      style={{ width: "100%", height: "100%" }}
      onClick={props.handle_card1_click}
    >
      <div className="card-body">
        <div>
          <span>
            <img src={props.src} style={{ width: "20%" }}></img>
            &nbsp;
          </span>
          <span style={{ fontWeight: "800", fontSize: "18px" }}>
            Smart Home
          </span>
        </div>

        <div
          style={{
            fontSize: "12px",
            color: "#8e8c8c",
            fontWeight: "600",
            marginTop: "15%"
          }}
        >
          Smart home allows homeowners to control
        </div>

        <div
          style={{
            fontSize: "12px",
            color: "#8e8c8c",
            fontWeight: "600",
            marginTop: "8%"
          }}
        >
          Smart healthcare
        </div>
      </div>
    </div>
  );
}

function Card_2(props) {
  return (
    <div
      className={props.class}
      style={{ width: "100%", height: "100%" }}
      onClick={props.handle_card2_click}
    >
      <div className="card-body">
        <div>
          <span>
            <img src={props.src} style={{ width: "15%" }}></img>
            &nbsp;
          </span>
          <span style={{ fontWeight: "800", fontSize: "16px" }}>
            Manufacturing
          </span>
        </div>

        <div
          style={{
            fontSize: "12px",
            color: "#8e8c8c",
            fontWeight: "600",
            marginTop: "15%"
          }}
        >
          Assist customers in monitoring production
        </div>
      </div>
    </div>
  );
}

function Card_3(props) {
  return (
    <div
      className={props.class}
      style={{ width: "100%", height: "100%" }}
      onClick={props.handle_card3_click}
    >
      <div className="card-body">
        <div>
          <span>
            <img src={props.src} style={{ width: "20%" }}></img>
            &nbsp;
          </span>
          <span style={{ fontWeight: "800", fontSize: "18px" }}>Farming</span>
        </div>
        <div
          style={{
            fontSize: "12px",
            color: "#8e8c8c",
            fontWeight: "600",
            marginTop: "15%"
          }}
        >
          Enable growers and farmers
        </div>
      </div>
    </div>
  );
}

function Mid_image(props) {
  var display_num = props.display_num;

  var display_image;

  switch (display_num) {
    case 0:
      display_image = <img src={mid_1} style={{ width: "80%" }} />;
      break;

    case 1:
      display_image = <img src={mid_2} style={{ width: "80%" }} />;
      break;
    case 2:
      display_image = <img src={mid_3} style={{ width: "80%" }} />;
      break;

    default:
      display_image = <img src={mid_1} style={{ width: "80%" }} />;
  }

  return <div>{display_image}</div>;
}

///////////////////////////this is middle_2 component//////////////////////////////////////

function Middle_2_house() {
  return <img src={house} style={{ width: "96%" }} />;
}

function Middle_2_introduce() {
  return (
    <div>
      <div style={{ marginLeft: "15%" }}>
        <span
          style={{
            fontWeight: "800",
            fontSize: "40px",
            color: "#ef8709",
            lineHeight: "80%"
          }}
        >
          Powering the Smart Home
        </span>
      </div>

      <div
        style={{
          fontSize: "14px",
          color: "#195895",
          fontWeight: "1000",
          marginTop: "8%",
          marginLeft: "15%"
        }}
      >
        Connect your security, lights, locks, thermostats, video and more — for
        seamless automation and control.
      </div>

      <div
        style={{
          fontSize: "14px",

          fontWeight: "1000",
          marginTop: "8%",
          marginLeft: "15%"
        }}
      >
        Explore SkynOcean Solutions Inc smart home to learn more.
      </div>
    </div>
  );
}

function Middle_2_container(props) {
  return (
    <div className="container" style={{ marginTop: "4%" }}>
      <div className="row ">
        <div
          className="col-md-3"
          style={{
            marginTop: "11%",
            marginLeft: "1%"
          }}
        >
          <Middle_2_introduce />
        </div>
        <div
          className="col-xm-12 col-sm-12 col-md-8 position-relative"
          style={{ marginLeft: "2%" }}
        >
          <Middle_2_house />
          {props.children}
        </div>
      </div>
    </div>
  );
}

function Middle_2_tooltip(props) {
  var display_c = props.active == true ? "none" : "block";
  return (
    <div>
      <a
        className="link"
        onMouseEnter={props.handle_mouse_enter}
        onMouseLeave={props.handle_mouse_out}
      >
        <img
          src={circle}
          style={{
            width: "3%",
            height: "3%",
            position: "absolute",
            left: props.a_left,
            top: props.a_top
          }}
        />
      </a>

      <div
        style={{
          left: props.c_left,
          top: props.c_top,
          position: "absolute",
          width: "40%",
          height: "auto",
          display: display_c,
          backgroundColor: "white",
          border: " solid 2px #ef8709",
          zIndex: "100"
        }}
        onMouseOut={props.handle_mouse_out}
      >
        <div
          style={{
            marginTop: "5%",
            marginLeft: "5%",
            fontWeight: "1000",
            color: "#ef8709",
            fontSize: "20px"
          }}
        >
          <span>
            <img src={props.pic_link} style={{ width: "7%" }} />
          </span>
          &nbsp;&nbsp;{props.name}
        </div>
        <div
          style={{
            marginTop: "2%",
            marginLeft: "5%",
            fontWeight: "500",
            color: "#37689d",
            fontSize: "15px",
            marginBottom: "5%"
          }}
        >
          {props.content}
        </div>
      </div>
    </div>
  );
}

//////////////////the function below used to middle_3////////////////////////////////////////

import f1 from "../../images/f1.svg";
import f2 from "../../images/f2.svg";
import f3 from "../../images/f3.svg";

export function Middle_3_container(props) {
  return (
    <div
      className="container-fluid px-0"
      style={{ backgroundColor: "#efefef" }}
    >
      <div className="row " style={{ marginLeft: "5%" }}>
        <div
          className="col-xm-12 col-sm-12 col-md-6 col-lg-4 position-relative"
          style={{ marginTop: "3%", marginBottom: "8%" }}
        >
          <Middle_3_image_text
            header={"Smart Home"}
            content1={
              "Smart home allows homeowners to control appliances, thermostats, lights, security devices, entertainment systems and other sensor devices remotely to provide homeowners with convenience and cost savings."
            }
            content2={
              "Smart healthcare is a health service system that uses technology such as wearable devices, IoT, and mobile internet to access information, connect people, materials and institutions related to healthcare, and then actively manages and responds to medical ecosystem needs in an intelligent manner. "
            }
            src={f1}
          />
        </div>
        <div
          className="col-xm-12 col-sm-12 col-md-6 col-lg-4 position-relative"
          style={{ marginTop: "3%", marginBottom: "8%" }}
        >
          <Middle_3_image_text
            header={"Manufacturing"}
            content1={
              "Assist customers in monitoring production, increasing automation and improving manufacturing productivity and reducing their costs."
            }
            content2={"Temperature, pressure, viscosity, precision placements"}
            src={f2}
          />
        </div>

        <div
          className="col-xm-12 col-sm-12 col-md-6 col-lg-4 position-relative"
          style={{ marginTop: "3%", marginBottom: "8%" }}
        >
          <Middle_3_image_text
            header={"Farming"}
            content1={
              "Enable growers and farmers to reduce waste and enhance productivity"
            }
            content2={
              "Light, humidity, temperature, rainfall, soil moisture, automated irrigation, wind speed, pest infestation and soil content"
            }
            src={f3}
          />
        </div>
      </div>
    </div>
  );
}

export function Middle_3_image_text(props) {
  return (
    <div>
      <Middle_3_image src={props.src} />
      <Middle_3_text
        header={props.header}
        content1={props.content1}
        content2={props.content2}
      />
    </div>
  );
}

export function Middle_3_image(props) {
  return <img src={props.src} style={{ width: "85%" }} />;
}

function Middle_3_text(props) {
  return (
    <div style={{ position: "absolute", left: "7%", top: "5%", width: "70%" }}>
      <div style={{ color: "#e4701e", fontSize: "25px", fontWeight: "500" }}>
        {props.header}
      </div>
      <div style={{ fontSize: "12px", fontWeight: "500", marginTop: "5%" }}>
        {props.content1}
      </div>
      <div style={{ fontSize: "12px", fontWeight: "500", marginTop: "5%" }}>
        {props.content1}
      </div>
    </div>
  );
}

/////////////////////the function below used to process foot/////////////////////////////////////////////////////////////////////////

function Foot_text() {
  return (
    <div>
      <div style={{ color: "#ef8709", fontWeight: "600", fontSize: "15px" }}>
        © SkynOcean Solutions Inc 2021
      </div>

      <div style={{ color: "#ef8709", fontWeight: "600", fontSize: "15px" }}>
        Address: 601 XXXXX Summerside C1X XXX XXX
      </div>

      <div style={{ color: "#ef8709", fontWeight: "600", fontSize: "15px" }}>
        Email: xxxxx@gamil.cm Phone: 902 xxx xxx
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
