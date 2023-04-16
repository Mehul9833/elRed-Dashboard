import React, { useState, useEffect } from "react";

const PhoneSection = (props) => {
  const [phoneDetails, setPhoneDetails] = useState("");

  useEffect(() => {
    let phoneStr = "";

    props.phones.forEach((phone, index) => {
      phoneStr = index !== 0 ? `${phoneStr} / ${phone}` : `${phone}`;
    });

    setPhoneDetails(phoneStr);
  }, [props.phones]);

  return <p>{phoneDetails}</p>;
};

export default PhoneSection;
