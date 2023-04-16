import React from "react";
import { Card, CardBody } from "reactstrap";

import { TbPencil } from "react-icons/tb";

const ContentCard = (props) => {
  return (
    <Card className="about__info--card">
      <CardBody>
        <div className="about__info--card-header">
          <div className="about__info--card-header--title">
            <i>{props.icon}</i> <h5>{props.heading}</h5>
          </div>
          <i
            className="about__info--card-header--pencil"
            onClick={props.handleIconClick}
          >
            <TbPencil />
          </i>
        </div>
        {props.children}
      </CardBody>
    </Card>
  );
};

export default ContentCard;
