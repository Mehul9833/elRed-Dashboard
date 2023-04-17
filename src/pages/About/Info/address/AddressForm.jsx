import React, { useState, useEffect } from "react";
import InputField from "../../../../components/ui/InputField";
import DarkRedButton from "../../../../components/ui/DarkRedButton";

const AddressForm = (props) => {
  const [onChangeAddressStore, setOnChangeAddressStore] = useState({});

  useEffect(() => {
    setOnChangeAddressStore(props.address);
  }, [props.address]);

  function handleInputChange(e) {
    const addressDup = { ...onChangeAddressStore };

    switch (e.target.id) {
      case "floor":
        setOnChangeAddressStore({
          ...addressDup,
          floor: e.target.value
        });
        break;

      case "area":
        setOnChangeAddressStore({
          ...addressDup,
          area: e.target.value
        });
        break;

      case "landmark":
        setOnChangeAddressStore({
          ...addressDup,
          landmark: e.target.value
        });
        break;

      case "town":
        setOnChangeAddressStore({
          ...addressDup,
          town: e.target.value
        });
        break;

      case "city":
        setOnChangeAddressStore({
          ...addressDup,
          city: e.target.value
        });
        break;

      case "pincode":
        setOnChangeAddressStore({
          ...addressDup,
          pincode: e.target.value
        });
        break;

      default:
        return;
    }
  }

  return (
    <>
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
      <DarkRedButton onClick={() => props.handleSubmit(onChangeAddressStore)}>
        Save
      </DarkRedButton>
    </>
  );
};

export default AddressForm;
