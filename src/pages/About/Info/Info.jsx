import React from "react";
import Contact from "./contact/Contact";
import Address from "./Address";
import Hours from "./Hours";
import Socials from "./Socials";
import Statements from "./Statements";

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
