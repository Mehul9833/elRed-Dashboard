import React from "react";
import { FaPen } from "react-icons/fa";
import { Card, CardBody } from "reactstrap";

const TableContent = (props) => {
  function handleScrollToElement(id) {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behaviour: "smooth" });
    }
  }

  return (
    <div className="table-content">
      <div className="table-content__content">
        <div className="table-content__content--title">
          <h5>{props.title}</h5>
          <FaPen />
        </div>
        <div className="table-content__content--body">
          {props.data.map((ele, index) => (
            <div
              className="table-content__content--section"
              key={index}
              id={ele.id}
            >
              <h5>
                {index + 1}. {ele.label}
              </h5>
              <p>{ele.content}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="table-content__table">
        <Card>
          <CardBody className="table-content__table--card">
            <h6>Table of Contents: </h6>
            <ul>
              {props.data.map((ele) => (
                <li onClick={() => handleScrollToElement(ele.id)}>
                  {ele.label}
                </li>
              ))}
            </ul>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default TableContent;
