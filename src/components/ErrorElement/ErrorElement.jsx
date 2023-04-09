import { faBusinessTime } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../ui/Button";

const ErrorElement = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  let locationArr = pathname.slice(1, pathname.length).split("");
  locationArr[0] = locationArr[0].toUpperCase();
  let location = locationArr.join("");

  return (
    <div className="error-page">
      <div className="error-page__container">
        <i>
          {" "}
          <FontAwesomeIcon icon={faBusinessTime} />
        </i>

        <h4>{location} Coming Soon</h4>
        <Button
          onClick={() => {
            navigate("/about");
          }}
        >
          Go Back
        </Button>
      </div>
    </div>
  );
};

export default ErrorElement;
