import React from "react";

const bootstrap = require("bootstrap");

import "../bootstrap/css/bootstrap.min.css";
import css from "./home_component.css";

import P1 from "../../images/p1.png";
import P2 from "../../images/p2.png";
import P3 from "../../images/p3.png";
import mid_1 from "../../images/mid_1.png";
import mid_2 from "../../images/mid_2.png";
import mid_3 from "../../images/mid_3.png";
import house from "../../images/house.svg";
import circle from "../../images/Circle.svg";

const main_menu = [
  {
    id: 1,
    content: "Home",
    content_link: "#1"
  },
  {
    id: 2,
    content: "Service and Product",
    content_link: "#2"
  },
  {
    id: 3,
    content: "Contact us",
    content_link: "#3"
  },
  {
    id: 4,
    content: "About us",
    content_link: "#4"
  }
];

export function Carousel_container() {
  return (
    <div className="container mt-0">
      <Carousel_1 />
    </div>
  );
}

function Home_middle_1(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <Introduce_1 />
          <div className="d-flex">
            <Card_1 handle_card1_click={props.handle_card1_click} />
            <Card_2 handle_card2_click={props.handle_card2_click} />
            <Card_3 handle_card3_click={props.handle_card3_click} />
          </div>
        </div>
        <div className="col-md-6">
          <Mid_image display_num={props.display_card_num} />
        </div>
      </div>
    </div>
  );
}

////////This is header component/////////////////////////////////////////////////////////////
export default Header;

function Header(props) {
  return (
    <div className="container px-0" style={{ height: "60px" }}>
      <div style={{ backgroundColor: "orange", height: "15px" }}></div>
      <Home_nav_manage />
    </div>
  );
}

/*input: menu_content,href,active */
function Nav_item(props) {
  if (props.active == true) {
    return (
      <li className="nav-item">
        <a
          className="nav-link"
          href={props.href}
          style={{ color: "orange" }}
          onMouseEnter={props.nav_item_mouse_enter}
          onMouseLeave={props.nav_item_mouse_out}
        >
          {props.content}
        </a>
      </li>
    );
  } else {
    return (
      <li className="nav-item">
        <a
          className="nav-link text-dark"
          href={props.href}
          onMouseEnter={props.nav_item_mouse_enter}
          onMouseLeave={props.nav_item_mouse_out}
        >
          {props.content}
        </a>
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

    return <ul className="nav justify-content-end me-5">{menu_list}</ul>;
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
            <div className="carousel-item active" data-bs-interval="3000">
              <img src={P1} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img src={P2} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="3000">
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

function Introduce_1() {
  return (
    <div style={{ marginBottom: "20%" }}>
      <h3 style={{ color: "orange" }}> Advanced Services IoT </h3>
    </div>
  );
}

function Card_1(props) {
  return (
    <div
      className="card item"
      style={{ width: "20%" }}
      onClick={props.handle_card1_click}
    >
      <div className="card-body">简单的卡片1</div>
    </div>
  );
}

function Card_2(props) {
  return (
    <div
      className="card item"
      style={{ width: "20%" }}
      onClick={props.handle_card2_click}
    >
      <div className="card-body">简单的卡片2</div>
    </div>
  );
}

function Card_3(props) {
  return (
    <div
      className="card item"
      style={{ width: "20%" }}
      onClick={props.handle_card3_click}
    >
      <div className="card-body">简单的卡片3</div>
    </div>
  );
}

function Mid_image(props) {
  var display_num = props.display_num;

  var display_image;

  switch (display_num) {
    case 0:
      display_image = <img src={mid_1} className="d-block w-100" />;
      break;

    case 1:
      display_image = <img src={mid_2} className="d-block w-100" />;
      break;
    case 2:
      display_image = <img src={mid_3} className="d-block w-100" />;
      break;

    default:
      display_image = <img src={mid_1} className="d-block w-100" />;
  }

  return <div>{display_image}</div>;
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
    return (
      <Home_middle_1
        display_card_num={display_num1}
        handle_card1_click={this.handle_card1_click.bind(this)}
        handle_card2_click={this.handle_card2_click.bind(this)}
        handle_card3_click={this.handle_card3_click.bind(this)}
      />
    );
  }
}

///////////////////////////this is middle_2 component//////////////////////////////////////

function Middle_2_house() {
  return (
    <img
      src={house}
      className="d-block w-100 "
      style={{ width: "40%", height: "40%", marginLeft: "20%" }}
    />
  );
}

function Middle_2_introduce() {
  return (
    <div>
      <h3 style={{ color: "orange" }}> Advanced Services IoT </h3>
    </div>
  );
}

function Middle_2_container(props) {
  return (
    <div className="container">
      <div className="row position-relative" style={{ marginLeft: "10%" }}>
        <div>
          <Middle_2_introduce />
          <Middle_2_house />
          {props.children}
        </div>
      </div>
    </div>
  );
}

/* tooltip */

const tooltip = [
  {
    id: 1,
    content: "aaaa aaaa aaaa ",
    a_left: 0.5,
    a_top: 0.4,
    c_left: 0.5,
    c_top: 0.35
  },
  {
    id: 2,
    content: "bbbb bbbbb bbbbb ",
    a_left: 0.7,
    a_top: 0.3,
    c_left: 0.7,
    c_top: 0.25
  },
  {
    id: 3,
    content: "ccccc ccccc ccccc ",
    a_left: 0.75,
    a_top: 0.3,
    c_left: 0.75,
    c_top: 0.25
  },
  {
    id: 4,
    content: "ddddd dddddd dddddd ",
    a_left: 0.8,
    a_top: 0.4,
    c_left: 0.8,
    c_top: 0.33
  }
];

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

            left: props.a_left,
            top: props.a_top,
            position: "absolute"
          }}
        />
      </a>
      <div
        className="border border-2"
        style={{
          left: props.c_left,
          top: props.c_top,
          position: "absolute",
          width: "10%",
          height: "auto",
          display: display_c
        }}
        onMouseOut={props.handle_mouse_out}
      >
        {props.content}
      </div>
    </div>
  );
}

export class Middle_2_manage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { active_number: 100 };

    this.handle_mouse_enter = this.handle_mouse_enter.bind(this);
    this.handle_mouse_out = this.handle_mouse_out.bind(this);
  }

  handle_mouse_enter(number) {
    this.setState({ active_number: number });
  }

  handle_mouse_out(number) {
    this.setState({ active_number: 100 });
  }

  render() {
    var active_number1 = this.state.active_number;

    console.log(active_number1);

    const middle_2_list = tooltip.map((item, index) => {
      var if_active;

      if_active = index == active_number1 ? false : true;

      var a_left1 = (item.a_left * 100).toString() + "%";
      var a_top1 = (item.a_top * 100).toString() + "%";
      var c_left1 = (item.c_left * 100).toString() + "%";
      var c_top1 = (item.c_top * 100).toString() + "%";

      return (
        <Middle_2_tooltip
          key={item.id.toString()}
          active={if_active}
          content={item.content}
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
