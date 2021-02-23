import React from "react";

const bootstrap = require("bootstrap");

import "../bootstrap/css/bootstrap.min.css";

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

function Header(props) {
  return (
    <div className="container px-0" style={{ height: "60px" }}>
      <div style={{ backgroundColor: "orange", height: "15px" }}></div>
      <div>{props.children}</div>
    </div>
  );
}

/*input: menu_content,href,active */
function Nav_item(props) {
  if (props.active == true) {
    return (
      <li className="nav-item">
        <a className="nav-link" href={props.href} style={{ color: "orange" }}>
          {props.content}
        </a>
      </li>
    );
  } else {
    return (
      <li className="nav-item">
        <a className="nav-link text-dark" href={props.href}>
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

      console.log(this.props.active_number);

      if_active = index == this.props.active_number ? true : false;

      return (
        <Nav_item
          key={item.id.toString()}
          active={if_active}
          content={item.content}
          href={item.content_link}
        ></Nav_item>
      );
    });

    return (
      <Header>
        <ul className="nav justify-content-end me-5">{menu_list}</ul>
      </Header>
    );
  }
}

export default Home_nav;
