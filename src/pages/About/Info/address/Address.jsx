import React, { useState, useEffect } from "react";
import ContentCard from "../../../../components/ui/ContentCard";
import { MdLocationPin } from "react-icons/md";
import RightSidebar from "../../../../components/ui/RightSidebar";
import InputField from "../../../../components/ui/InputField";
import DarkRedButton from "../../../../components/ui/DarkRedButton";

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
  const [onChangeAddressStore, setOnChangeAddressStore] = useState({
    ...address
  });

  function handleToggleCanvase() {
    setShowSidebar(!showSidebar);
  }

  function handleInputChange(e) {
    const addressDup = { ...address };
    console.log("here i am", e.target.id);
    switch (e.target.id) {
      case "floor":
        addressDup["floor"] = e.target.value;
        break;

      case "area":
        addressDup["area"] = e.target.value;
        break;

      case "landmark":
        addressDup["landmark"] = e.target.value;
        break;

      case "town":
        addressDup["town"] = e.target.value;
        break;

      case "city":
        addressDup["city"] = e.target.value;
        break;

      case "pincode":
        addressDup["pincode"] = e.target.value;
        break;

      default:
        return;
    }

    setOnChangeAddressStore(addressDup);
  }

  function handleSubmit() {
    setAddress(onChangeAddressStore);
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
        >
          <div className="about__info--location--form">
            <InputField
              placeholder={"Floor Number / Block no / Office Name"}
              value={onChangeAddressStore.floor}
              id={"floor"}
              type="text"
              name="floor"
              onChange={(e) => {
                handleInputChange(e);
              }}
            />
            <InputField
              placeholder={"Area / Locality"}
              value={onChangeAddressStore.area}
              id={"area"}
              type="text"
              name="area"
              onChange={(e) => {
                handleInputChange(e);
              }}
            />
            <InputField
              placeholder={"Nearest Landmark"}
              value={onChangeAddressStore.landmark}
              id={"landmark"}
              type="text"
              name="landmark"
              onChange={(e) => {
                handleInputChange(e);
              }}
            />
            <InputField
              placeholder={"Town / City"}
              value={onChangeAddressStore.town}
              id={"town"}
              type="text"
              name="town"
              onChange={(e) => {
                handleInputChange(e);
              }}
            />
            <InputField
              placeholder={"City"}
              value={onChangeAddressStore.city}
              id={"city"}
              type="text"
              name="city"
              onChange={(e) => {
                handleInputChange(e);
              }}
            />
            <InputField
              placeholder={"Pincode"}
              value={onChangeAddressStore.pincode}
              id={"pincode"}
              type="text"
              name="pincode"
              onChange={(e) => {
                handleInputChange(e);
              }}
            />
          </div>
          <DarkRedButton onClick={handleSubmit}>Save</DarkRedButton>
        </RightSidebar>
      )}
    </ContentCard>
  );
};

export default Address;
