import React, { useState } from "react";

import Info from "./Info/Info";
import PrivacyPolicy from "./privacyPolicy/PrivacyPolicy";
import TermsAndConditions from "./TermsAndCondition/TermsAndConditions";

const AboutActions = () => {
  const tabes = [
    "Info",
    "FAQ",
    "Complaints and feedback",
    "Privacy Policy",
    "Terms & Conditions"
  ];

  const panels = [
    <Info />,
    <p>Coming Soon</p>,
    <p>Coming Soon</p>,
    <PrivacyPolicy />,
    <TermsAndConditions />
  ];

  const [activeIndex, setActiveIndex] = useState(0);
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
