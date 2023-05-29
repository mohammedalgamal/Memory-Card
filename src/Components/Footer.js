import React from "react";
import "../Styles/Footer.css";
import logo from "../Images/Github-logo.png";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="text">Copyright © 2023 Mohammed Algamal</div>
      <a href="https://github.com/mohammedalgamal/Memory-Card">
        <img alt="GitHub Logo" src={logo}></img>
      </a>
    </div>
  );
}
