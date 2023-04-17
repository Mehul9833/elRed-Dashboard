import React from "react";
import Contact from "./contact/Contact";
import Address from "./address/Address";
import Hours from "./Hours";
import Socials from "./socials/Socials";
import Statements from "./statements/Statements";

const Info = () => {
  return (
    <div className="about__info">
      <Contact />
      <Address />
      <Hours />
      <Socials />
      <Statements />
    </div>
  );
};

export default Info;
