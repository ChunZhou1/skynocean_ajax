import React from "react";

const bootstrap = require("bootstrap");

import "../bootstrap/css/bootstrap.min.css";

import contact_pic from "../../images/contact_mobile.png";

export function Contact_container() {
  return (
    <div
      className="container-fluid px-0"
      style={{ backgroundColor: "#efefef", paddingBottom: "3%" }}
    >
      <div className="row" style={{ marginLeft: "12%" }}>
        <div className="col-sm-12 col-md-7" style={{ marginTop: "3%" }}>
          <Contact_introduce />
          <div style={{ marginTop: "15%", marginLeft: "9%" }}>
            <Map />
          </div>
        </div>
        <div
          className="col-sm-12 col-md-5"
          style={{ marginTop: "11%", marginLeft: "0%" }}
        >
          <Contact_image />
        </div>
      </div>
    </div>
  );
}

function Contact_introduce() {
  return (
    <div>
      <span
        style={{
          color: "#ef8709",
          fontWeight: "1000",
          fontSize: "50px",
          letterSpacing: "2px",
          wordSpacing: "2px"
        }}
      >
        Contact Us
      </span>

      <div
        style={{
          marginTop: "4%",
          marginLeft: "9%",
          lineHeight: "170%",
          width: "80%"
        }}
      >
        <span
          style={{
            fontSize: "16px",
            fontWeight: "600"
          }}
        >
          Address: xxxxxxxxxxx St. summerside PE Canada
        </span>
        <br />
        <span
          style={{
            fontSize: "16px",
            fontWeight: "600"
          }}
        >
          Phone: 902 xxx xxx
        </span>
        <br />
        <span
          style={{
            fontSize: "16px",
            fontWeight: "600"
          }}
        >
          mail: xxxx@xxxx.ca
        </span>
      </div>
    </div>
  );
}

function Map() {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9955.334699463385!2d-79.36843445722373!3d43.818422623739664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d349912dcd07%3A0xdc73a123712f72a4!2sAdventure%20Valley%20Day%20Camp!5e0!3m2!1sen!2sca!4v1614615852931!5m2!1sen!2sca"
      width={"500"}
      height={"300"}
      style={{ border: "0;" }}
      allowfullscreen={""}
      loading={"lazy"}
    ></iframe>
  );
}

function Contact_image() {
  return <img src={contact_pic} style={{ width: "50%" }} />;
}
