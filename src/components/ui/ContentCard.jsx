import React from "react";
import { Card, CardBody } from "reactstrap";

import { FaPen } from "react-icons/fa";

const ContentCard = (props) => {
  return (
    <Card className="about__info--card">
      <CardBody>
        <div className="about__info--card-header">
          <div className="about__info--card-header--title">
            {props.icon} <h5>{props.heading}</h5>
          </div>

          <FaPen
            onClick={props.handleIconClick}
            className="about__info--card-header--pencil"
          />
        </div>
        {props.children}
      </CardBody>
    </Card>
  );
};

export default ContentCard;
