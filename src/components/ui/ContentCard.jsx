import React from "react";
import { Card, CardBody } from "reactstrap";

import { TbPencil } from "react-icons/tb";

const ContentCard = (props) => {
  return (
    <Card className="about__info--card">
      <CardBody>
        <div className="about__info--card-header">
          <div className="about__info--card-header--title">
            {props.icon} <h5>{props.heading}</h5>
          </div>

          <TbPencil
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
