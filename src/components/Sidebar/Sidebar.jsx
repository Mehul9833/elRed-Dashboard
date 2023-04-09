import React, { useState } from "react";
import { Card, CardBody } from "reactstrap";

import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../ui/Button";
import {
  faAddressCard,
  faBox,
  faBoxesStacked,
  faCircleQuestion,
  faHandshake,
  faList,
  faScroll,
  faTrophy,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const linkItems = [
    {
      name: "Dashboard",
      icon: faList,
      link: "./dashboard",
    },
    {
      name: "Orders",
      icon: faBox,
      link: "./orders",
    },
    {
      name: "Team Members",
      icon: faUserGroup,
      link: "./team-members",
    },
    {
      name: "Partners",
      icon: faHandshake,
      link: "./partners",
    },
    {
      name: "Product Listings",
      icon: faBoxesStacked,
      link: "./partners",
    },
    {
      name: "Awards & Honours",
      icon: faTrophy,
      link: "./awards-and-honours",
    },
    {
      name: "About Us",
      icon: faAddressCard,
      link: "./about",
    },
    {
      name: "Payment Info",
      icon: faScroll,
      link: "payment",
    },
  ];

  return (
    <Card className="sidebar__card">
      <CardBody className="sidebar__content">
        <div className="sidebar__logo">
          <img src={logo} alt="sidebar logo" />
        </div>

        <div className="sidebar__links">
          <ul>
            {linkItems.map((item, key) => {
              return (
                <li key={key}>
                  <NavLink
                    to={item.link}
                    className={({ isActive }) =>
                      isActive ? "sidebar__links--active" : ""
                    }
                  >
                    <i>
                      <FontAwesomeIcon icon={item.icon} />
                    </i>
                    <span>{item.name}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="sidebar__help">
          <i>
            <FontAwesomeIcon icon={faCircleQuestion} />
          </i>

          <h6>Need Help?</h6>
          <p>
            Our support team is <br />
            at your disposal
          </p>
          <Button className="sidebar__help--button">Get Help</Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default Sidebar;
