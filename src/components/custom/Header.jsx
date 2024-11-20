import React from "react";
import { Button } from "../ui/button";
import "../styles/Header.css";
function Header() {
  return (
    <div className="logo-init">
      <img className="logo" src="./assets/logo.svg" />
      <div>
        <Button className="button">SIGN IN HERE </Button>
      </div>
    </div>
  );
}

export default Header;
