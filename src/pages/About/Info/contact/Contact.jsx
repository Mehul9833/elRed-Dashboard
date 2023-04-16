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
      emails: [
        "salesteam01@gmail.com",
        "aasthadoshi@gmail.com",
        "mehulchaudhary330@gmail.com"
      ],
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

  function handleToggleCanvase() {
    setShowSidebar(!showSidebar);
    setShowForm(false);
  }

  return (
    <>
      <ContentCard
        icon={<RiContactsBookLine />}
        heading={"Contact"}
        handleIconClick={handleToggleCanvase}
      >
        <div className="about__info--contact-details__information">
          <div className="about__info--contact-details__information--email">
            <FaEnvelope />
            <div className="about__info--contact-details__information--info">
              <EmailSection emails={contactDetails[0].emails} />
            </div>
          </div>

          <span className="about__info--contact-details__information--email-count">
            +5
          </span>
        </div>

        <div className="about__info--contact-details__information">
          <FaPhone />
          <div className="about__info--contact-details__information--info">
            <PhoneSection phones={contactDetails[0].phones} />
          </div>
        </div>
      </ContentCard>
      {showSidebar && (
        <RightSidebar toggle={handleToggleCanvase} isOpen={showSidebar}>
          {!showForm && (
            <ContactSidebar
              contactDetails={contactDetails}
              setShowForm={setShowForm}
              setEditId={setEditId}
            />
          )}

          {showForm && (
            <EditContactDetails
              id={editId}
              contactDetails={contactDetails}
              setContactDetails={setContactDetails}
              setShowForm={setShowForm}
            />
          )}
        </RightSidebar>
      )}
    </>
  );
};

export default Contact;
