import React, { useState } from "react";

import Info from "./Info/Info";

const AboutActions = () => {
  const tabes = [
    "Info",
    "FAQ",
    "Complaints and feedback",
    "privacy Policy",
    "Terms & Conditions"
  ];

  const panels = [
    <Info />,
    <p>Heyy</p>,
    <p>Hii</p>,
    <p>Hello</p>,
    <p>Hello</p>
  ];

  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index, className) =>
    activeIndex === index ? className : "";

  return (
    <React.Fragment>
      <div className="about__tabs">
        <ul>
          {tabes.map((tab, key) => (
            <li
              className={`about__tabs--tab ${checkActive(key, "active")}`}
              onClick={() => handleClick(key)}
              key={key}
            >
              {tab}
            </li>
          ))}
        </ul>
      </div>

      <div className="about__tabs--panels">
        {panels.map((panel, index) => {
          return (
            <div
              className={`about__tabs--panels-panel ${checkActive(
                index,
                "active"
              )}`}
              key={index}
            >
              {panel}
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default AboutActions;
