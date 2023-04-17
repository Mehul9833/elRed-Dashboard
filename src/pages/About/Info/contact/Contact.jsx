import React, { useState } from "react";
import ContentCard from "../../../../components/ui/ContentCard";
import { RiContactsBookLine } from "react-icons/ri";
import { FaEnvelope, FaPhone } from "react-icons/fa";

import RightSidebar from "../../../../components/ui/RightSidebar";

import EmailSection from "./EmailSection";
import PhoneSection from "./PhoneSection";
import ContactSidebar from "./ContactSidebar";
import EditContactDetails from "./EditContactDetails";

const Contact = () => {
  const [contactDetails, setContactDetails] = useState([
    {
      id: 1,
      name: "Sales Team",
      emails: ["salesteam01@gmail.com", "aasthadoshi@gmail.com"],
      phones: ["9833240843", "8879882527", "5698547859"]
    },
    {
      id: 2,
      name: "Marketing Team",
      emails: ["mehulchaudhary330@gmail.com", "aasthadoshi@gmail.com"],
      phones: ["9833240843", "8879882527"]
    },
    {
      id: 3,
      name: "Developing Team",
      emails: ["mehulchaudhary330@gmail.com", "aasthadoshi@gmail.com"],
      phones: ["9833240843", "8879882527"]
    }
  ]);

  const [showSidebar, setShowSidebar] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);
  const [error, setError] = useState("");

  function handleToggleCanvase() {
    setShowSidebar(!showSidebar);
    setShowForm(false);
    setError("");
  }

  function handleDeleteContact(index) {
    if (contactDetails.length === 1) {
      return;
    }

    const contactDetailsDup = [...contactDetails];
    contactDetailsDup.splice(index, 1);

    setContactDetails(contactDetailsDup);
  }

  function handleSaveContacts() {
    const contactDetailsDup = [...contactDetails];
    setContactDetails(contactDetailsDup);
    setShowSidebar(false);
  }

  return (
    <>
      <ContentCard
        icon={<RiContactsBookLine />}
        heading={"Contact"}
        handleIconClick={handleToggleCanvase}
      >
        <div className="about__info--contact">
          <div className="about__info--contact__information">
            <FaEnvelope />
            <EmailSection emails={contactDetails[0].emails} />
          </div>
          {contactDetails.length > 1 && (
            <div className="about__info--contact__action">
              <span className="about__info--contact__count">
                +{contactDetails.length}
              </span>
            </div>
          )}
        </div>
        <div className="about__info--contact">
          <div className="about__info--contact__information">
            <FaPhone />
            <PhoneSection phones={contactDetails[0].phones} />
          </div>
        </div>
      </ContentCard>
      {showSidebar && (
        <RightSidebar
          toggle={handleToggleCanvase}
          isOpen={showSidebar}
          title={"Contacts"}
          description="Please provide the company's email & contacts"
        >
          {!showForm && (
            <ContactSidebar
              contactDetails={contactDetails}
              setShowForm={setShowForm}
              setEditId={setEditId}
              handleDeleteContact={handleDeleteContact}
              error={error}
              handleSaveContacts={handleSaveContacts}
            />
          )}

          {showForm && (
            <EditContactDetails
              id={editId}
              contactDetails={contactDetails}
              setContactDetails={setContactDetails}
              setShowForm={setShowForm}
              error={error}
              setError={setError}
            />
          )}
        </RightSidebar>
      )}
    </>
  );
};

export default Contact;
