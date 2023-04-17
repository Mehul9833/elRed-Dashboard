import React, { useState } from "react";
import ContentCard from "../../../../components/ui/ContentCard";
import { RiContactsBookLine } from "react-icons/ri";
import { FaEnvelope } from "react-icons/fa";

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
    if (index === 0) {
      setError("Cannot Delete Last Details");
      return;
    }

    const contactDetailsDup = [...contactDetails];
    contactDetailsDup.splice(index, 1);

    setContactDetails(contactDetailsDup);
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
          <div className="about__info--contact__action">
            <span className="about__info--contact__count">+5</span>
          </div>
        </div>
        <div className="about__info--contact">
          <div className="about__info--contact__information">
            <FaEnvelope />
            <PhoneSection phones={contactDetails[0].phones} />
          </div>
        </div>
      </ContentCard>
      {showSidebar && (
        <RightSidebar
          toggle={handleToggleCanvase}
          isOpen={showSidebar}
          title={"Contacts"}
        >
          {!showForm && (
            <ContactSidebar
              contactDetails={contactDetails}
              setShowForm={setShowForm}
              setEditId={setEditId}
              handleDeleteContact={handleDeleteContact}
              error={error}
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
