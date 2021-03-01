import React from "react";

const bootstrap = require("bootstrap");

import "../bootstrap/css/bootstrap.min.css";

import about_small_image from "../../images/about_small_image.png";
import about_large_image from "../../images/about_large_image.png";

export function About_container() {
  return (
    <div className="container">
      <div className="row" style={{ marginLeft: "4%" }}>
        <div className="col-sm-12 col-md-7" style={{ marginTop: "3%" }}>
          <About_introduce />
        </div>
        <div
          className="col-sm-12 col-md-5"
          style={{ marginTop: "6%", marginLeft: "0%" }}
        >
          <About_small_image />
        </div>
      </div>
    </div>
  );
}

export function About_foot() {
  return (
    <div className="container-fluid px-0" style={{ marginTop: "5%" }}>
      <About_large_image />
    </div>
  );
}

function About_introduce() {
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
        About Us
      </span>

      <div style={{ marginTop: "2%", marginLeft: "1.5%" }}>
        <span style={{ fontWeight: "500", fontSize: "25px", color: "#1b5996" }}>
          SkynOcean Solutions Inc.
        </span>
      </div>

      <div
        style={{
          marginTop: "4%",
          marginLeft: "1.5%",
          lineHeight: "170%",
          width: "80%"
        }}
      >
        <span
          style={{
            fontSize: "16px",
            fontWeight: "700"
          }}
        >
          SkynOcean Solutions Inc. is the solution provider to offer computer
          services and advanced services IoT to serve the target customers such
          as farmers, small business operators and home consume
        </span>
      </div>
    </div>
  );
}

function About_small_image() {
  return <img src={about_small_image} style={{ width: "90%" }} />;
}

function About_large_image() {
  return <img src={about_large_image} style={{ width: "100%" }} />;
}
