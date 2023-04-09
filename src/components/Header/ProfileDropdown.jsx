import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

import { Dropdown, DropdownToggle, DropdownMenu } from "reactstrap";

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownState = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Dropdown
      toggle={handleDropdownState}
      isOpen={isOpen}
      className="header__profile--dropdown"
    >
      <DropdownToggle
        data-toggle="dropdown"
        tag="span"
        className="header__profile--dropdown-button"
      >
        <img
          src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg"
          alt="profile"
        />
        <span>User Admin</span>
        {isOpen ? (
          <FontAwesomeIcon icon={faChevronUp} />
        ) : (
          <FontAwesomeIcon icon={faChevronDown} />
        )}
      </DropdownToggle>
      <DropdownMenu className="header__profile--dropdown--menu">
        <div>Lorem Ipsum</div>

        <div>Lorem Ipsum</div>
        <div>Lorem Ipsum</div>
      </DropdownMenu>
    </Dropdown>
  );
};

export default ProfileDropdown;
