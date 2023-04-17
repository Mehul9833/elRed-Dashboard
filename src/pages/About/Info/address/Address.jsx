import React, { useState, useEffect } from "react";
import ContentCard from "../../../../components/ui/ContentCard";
import { MdLocationPin } from "react-icons/md";
import RightSidebar from "../../../../components/ui/RightSidebar";

import AddressForm from "./AddressForm";

const Address = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const [address, setAddress] = useState({
    floor: "C-1/351/4",
    area: "GIDC Makarpura",
    landmark: "",
    town: "Vadodara",
    city: "Gujurat",
    pincode: "390010"
  });

  const [addressString, setAddressString] = useState("");

  function handleToggleCanvase() {
    setShowSidebar(!showSidebar);
  }

  function handleSubmit(data) {
    setAddress(data);
    setShowSidebar(false);
  }

  useEffect(() => {
    const updatedAddress = `${address.floor.length !== 0 && address.floor}, ${
      address.area.length !== 0 && address.area
    }, ${address.landmark.length !== 0 && address.landmark}, ${
      address.town.length !== 0 && address.town
    } ${address.pincode.length !== 0 && -address.pincode}, ${
      address.city.length !== 0 && address.city
    }, India`;

    setAddressString(updatedAddress);
  }, [address]);

  return (
    <ContentCard
      icon={<MdLocationPin />}
      heading={"Location"}
      handleIconClick={handleToggleCanvase}
    >
      <div className="about__info--location">
        <p>{addressString}</p>
      </div>
      {showSidebar && (
        <RightSidebar
          toggle={handleToggleCanvase}
          isOpen={showSidebar}
          title="Location"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        >
          <AddressForm address={address} handleSubmit={handleSubmit} />
        </RightSidebar>
      )}
    </ContentCard>
  );
};

export default Address;
