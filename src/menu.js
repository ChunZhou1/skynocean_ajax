import React from "react";
import Foot from "./foot.js";
import css from "./menu.css";

const main_menu = [
  {
    id: 1,
    content: "main_menu1",
    content_sub: ["submenu_11", "submenu_12", "submenu_13"],
    content_link: ["#11", "#12", "#13"]
  },
  {
    id: 2,
    content: "main_menu2",
    content_sub: ["submenu_21", "submenu_22", "submenu_23"],
    content_link: ["#21", "#22", "#23"]
  },
  {
    id: 3,
    content: "main_menu3",
    content_sub: ["submenu_31", "submenu_32", "submenu_33"],
    content_link: ["#31", "#32", "#33"]
  }
];

/*build a div container */
function Head(props) {
  return <div className="header">{props.children}</div>;
}

/* build single sub_menu */

function Single_sub_list(props) {
  return (
    <li className="menu_sub_list">
      <a
        href={props.link}
        className="Single_List_a"
        onClick={props.menu_sub_click}
      >
        {props.string}
      </a>
    </li>
  );
}

/*build a col sub_menu */
class Menu_sub_list extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const number = this.props.main_menu_num;
    const if_display = this.props.if_display;

    const menu_sub_list = main_menu[number - 1].content_sub.map(
      (item, index) => {
        var link_str = main_menu[number - 1].content_link[index];
        return (
          <Single_sub_list
            key={index}
            string={item}
            link={link_str}
            menu_sub_click={this.props.menu_sub_click.bind(this, index + 1)}
          ></Single_sub_list>
        );
      }
    );

    if (if_display == true) {
      return <ul className="sub_menu display">{menu_sub_list}</ul>;
    } else {
      return <ul className="sub_menu not_display">{menu_sub_list}</ul>;
    }
  }
}

/*build single main_menu and a col sub_menu 
mouseover => mouseenter
mouseout => mouseleave

mouseenter and mouseleave do not bubble
*/

function Single_list(props) {
  return (
    <li className="menu_list" onMouseLeave={props.mouse_out}>
      <a href="#" className="Single_List_a" onMouseOver={props.menu_main_click}>
        {props.string}
      </a>
      <Menu_sub_list
        main_menu_num={props.main_menu_num}
        if_display={props.if_display}
        menu_sub_click={props.menu_sub_click}
      />
    </li>
  );
}

/*build whole main_menu and sub_menu ,but only display one col sub_menu */
class Menu_list extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const menu_list = this.props.menu.map((item, index) => {
      var if_display_sub;
      if_display_sub = index + 1 == this.props.display_sub_num ? true : false;
      return (
        <Single_list
          key={item.id.toString()}
          string={item.content}
          main_menu_num={index + 1}
          if_display={if_display_sub}
          menu_main_click={this.props.menu_main_click.bind(this, index + 1)}
          menu_sub_click={this.props.menu_sub_click}
          mouse_out={this.props.mouse_out}
        ></Single_list>
      );
    });

    return (
      <Head>
        <ul className="main_menu">{menu_list} </ul>
      </Head>
    );
  }
}

/* the class below can manage main menu ,include menu display and process click by user*/

class Manage_menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display_sub_menu_num: 0,
      click_sub_menu: 0
    };

    this.handle_menu_main_click = this.handle_menu_main_click.bind(this);
    this.handle_menu_sub_click = this.handle_menu_sub_click.bind(this);
    this.handle_mouse_out = this.handle_mouse_out.bind(this);
  }

  handle_menu_main_click(number) {
    this.setState({ display_sub_menu_num: number });
  }

  handle_menu_sub_click(number) {
    this.setState({ click_sub_menu: number });

    /*  note:this.state.click_sub_menu do not modified ,so we use number here*/
    this.process_event(this.state.display_sub_menu_num, number);

    /* undisplay sub_menu */
    this.setState({ display_sub_menu_num: 0 });
  }

  handle_mouse_out() {
    this.setState({ display_sub_menu_num: 0, click_sub_menu: 0 });
    /*console.log("you leave the ul");*/
  }

  /*This is event process */
  process_event(main_num, sub_num) {
    console.log(main_num, sub_num);
  }

  render() {
    var display_sub_num1 = this.state.display_sub_menu_num;
    return (
      <Menu_list
        menu={main_menu}
        display_sub_num={display_sub_num1}
        /*event process */
        menu_main_click={this.handle_menu_main_click}
        menu_sub_click={this.handle_menu_sub_click}
        mouse_out={this.handle_mouse_out}
      />
    );
  }
}

/* component combine Manage_menu and foot */

function Index() {
  return (
    <div>
      <Manage_menu />
      <Foot />
    </div>
  );
}

export default Index;
