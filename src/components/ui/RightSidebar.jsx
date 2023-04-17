import React from "react";
import { Offcanvas, OffcanvasBody } from "reactstrap";
import { RiArrowLeftLine } from "react-icons/ri";

const RightSidebar = (props) => {
  return (
    <Offcanvas
      toggle={props.toggle}
      isOpen={props.isOpen}
      direction="end"
      className="offcanvas"
    >
      <OffcanvasBody>
        <div className="offcanvas__header">
          <div className="offcanvas__header--title">
            <RiArrowLeftLine onClick={props.toggle} />
            <h3>{props.title}</h3>
          </div>
          <p>{props.description}</p>
        </div>

        {props.children}
      </OffcanvasBody>
    </Offcanvas>
  );
};

export default RightSidebar;
