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
        <div className="offcanvas__header--content">
          <div className="offcanvas__header">
            <div className="offcanvas__header--title">
              <div className="offcanvas__header--title-name">
                <RiArrowLeftLine onClick={props.toggle} />
                <h3>{props.title}</h3>
              </div>
              {props.headerAction !== undefined && (
                <div className="offcanvas__header--title-action">
                  {props.headerAction}
                </div>
              )}
            </div>

            <p>{props.description}</p>
          </div>
          <div className="offcanvas__content">{props.children}</div>
        </div>
      </OffcanvasBody>
    </Offcanvas>
  );
};

export default RightSidebar;
