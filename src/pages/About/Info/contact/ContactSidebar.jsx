import React from "react";
import { Card, CardBody } from "reactstrap";
import { AiFillDelete } from "react-icons/ai";
import { FaAddressBook, FaEnvelope, FaPhone, FaPen } from "react-icons/fa";
import EmailSection from "./EmailSection";
import PhoneSection from "./PhoneSection";

import DarkRedButton from "../../../../components/ui/DarkRedButton";

const ContactSidebar = (props) => {
  return (
    <>
      <div>
        {props.contactDetails.map((details, index) => (
          <Card className="about__info--contact-card">
            <CardBody>
              <div className="about__info--contact__details">
                <div className="about__info--contact__header">
                  <div className="about__info--contact__header--title">
                    <FaAddressBook />
                    <p>{details.name}</p>
                  </div>
                  <div className="about__info--contact__header--actions">
                    <AiFillDelete
                      className="about__info--contact-details--header__delete"
                      onClick={() => props.handleDeleteContact(index)}
                    />

                    <FaPen
                      onClick={() => {
                        props.setShowForm(true);
                        props.setEditId(details.id);
                      }}
                      className="pencil"
                    />
                  </div>
                </div>
                <div className="about__info--contact__details--info">
                  <FaEnvelope />
                  <EmailSection emails={details.emails} />
                </div>
                <div className="about__info--contact__details--info">
                  <FaPhone />
                  <PhoneSection phones={details.phones} />
                </div>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>

      {props.error.length !== 0 && (
        <span className="text-danger">props.error</span>
      )}

      <DarkRedButton onClick={props.handleSaveContacts}>Save</DarkRedButton>
    </>
  );
};

export default ContactSidebar;
