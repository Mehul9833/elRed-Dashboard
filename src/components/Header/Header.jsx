import React from "react";
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { Col } from "reactstrap";

import Button from "../ui/Button";
import ProfileDropdown from "./ProfileDropdown";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="" />
      </div>
      <div className="header__other">
        <div className="header__info">
          <div className="header__search">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input type="text" placeholder="Search..." />
          </div>

          <div className="header__actions">
            <i className="header__hamburger">
              <FontAwesomeIcon icon={faBars} />
            </i>

            <Button className="header__actions--checkout-btn">
              <FontAwesomeIcon icon={faCartShopping} />
              <span>Checkout (200)</span>
            </Button>
            <ProfileDropdown />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
