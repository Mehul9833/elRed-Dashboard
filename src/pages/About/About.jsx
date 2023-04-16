import React from "react";
import logo from "../../assets/logo.png";
import { MdVerified } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import { Link } from "react-router-dom";
import AboutActions from "./AboutActions";
import { Card, CardBody } from "reactstrap";

const About = () => {
  const companyDescription =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae rerum odio aperiam totam soluta amet explicabo impedit tempora.";

  return (
    <Card className="about">
      <CardBody>
        <h3 className="about__heading">About Us</h3>
        <div className="about__logo">
          <img src={logo} alt="logo" />
          <div className="about__logo--name">
            <h3>A.T. Inks</h3>
            <p>Digital Inks</p>
          </div>
          <div className="about__logo--verify">
            <i>
              <MdVerified />
            </i>
            <Link to="/">Verify Company</Link>
          </div>
        </div>
        <div className="about__description">
          <p>{companyDescription}</p>
          <sup>
            {" "}
            <FaPen />
          </sup>
        </div>
        <AboutActions />
      </CardBody>
    </Card>
  );
};

export default About;
