import React, { useEffect, useState } from "react";
import LightRedButton from "../../../../components/ui/LightRedButton";
import DarkRedButton from "../../../../components/ui/DarkRedButton";

const EditContactDetails = (props) => {
  const [currentFormData, setCurrentFormData] = useState({});
  const [emailData, setEmailData] = useState([]);
  const [phoneData, setPhoneData] = useState([]);

  useEffect(() => {
    const filterFormData = props.contactDetails.filter(
      (detail) => detail.id === props.id
    );

    if (filterFormData.length !== 0) {
      setCurrentFormData(filterFormData[0]);
      setEmailData(filterFormData[0].emails);
      setPhoneData(filterFormData[0].phones);
    }
  }, [props.id, props.contactDetails]);

  function handleMoreEmail() {
    const emailDataCopy = [...emailData];
    emailDataCopy.push("");
    setEmailData(emailDataCopy);
  }

  function handleMorePhone() {
    const phoneDataCopy = [...phoneData];
    phoneDataCopy.push("");
    setPhoneData(phoneDataCopy);
  }

  function handleSaveContacts() {
    const contactDetailsDup = [...props.contactDetails];

    const removeBlankEmails = emailData.filter((email) => email !== "");
    const removeBlankPhones = phoneData.filter((phone) => phone !== "");

    contactDetailsDup.forEach((contact, index) => {
      if (contact.id === props.id) {
        contactDetailsDup[index].emails = removeBlankEmails;
        contactDetailsDup[index].phones = removeBlankPhones;
      }
    });

    props.setContactDetails(contactDetailsDup);
    props.setShowForm(false);
  }

  function handleInputChange(e, index) {
    if (e.target.id === "email") {
      const finalEmailArr = [...emailData];
      finalEmailArr[index] = e.target.value;
      setEmailData(finalEmailArr);
    }

    if (e.target.id === "phone") {
      const finalPhoneArr = [...phoneData];
      finalPhoneArr[index] = e.target.value;
      setPhoneData(finalPhoneArr);
    }
  }

  return (
    <>
      <div className="about-contact">
        <p>Please provide the company's email & contacts</p>

        <div className="about-contact-form">
          <div className="about-contact-form-input-box">
            <label for="email">Email ID</label>
            <br />
            {emailData.map((email, index) => (
              <input
                type="email"
                id="email"
                name="email"
                placeholder="e.g. salesteam@br.in"
                value={email}
                onChange={(e) => {
                  handleInputChange(e, index);
                }}
              />
            ))}

            <LightRedButton onClick={handleMoreEmail}>
              <span>Add More</span>
            </LightRedButton>
          </div>

          <div className="about-contact-form-input-box">
            <label for="phone">Contact Number</label>
            <br />
            {phoneData.map((phone, index) => (
              <input
                type="phone"
                id="phone"
                name="phone"
                placeholder="e.g. 9866325874"
                value={phone}
                onChange={(e) => {
                  handleInputChange(e, index);
                }}
              />
            ))}

            <LightRedButton onClick={handleMorePhone}>
              <span>Add More</span>
            </LightRedButton>
          </div>
        </div>
        <DarkRedButton onClick={handleSaveContacts}>Save</DarkRedButton>
      </div>
    </>
  );
};

export default EditContactDetails;
