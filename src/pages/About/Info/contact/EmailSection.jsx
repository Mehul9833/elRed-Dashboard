import React, { useState, useEffect } from "react";

const EmailSection = (props) => {
  const [emailDetails, setEmailDetails] = useState("");

  useEffect(() => {
    let emailDetails = "";

    props.emails.forEach((email, index) => {
      emailDetails = index !== 0 ? `${emailDetails} / ${email}` : `${email}`;
    });

    setEmailDetails(emailDetails);
  }, [props.emails]);

  return <p>{emailDetails}</p>;
};

export default EmailSection;
