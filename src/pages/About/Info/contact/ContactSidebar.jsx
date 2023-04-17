import React from "react";
import { Card, CardBody } from "reactstrap";
import { AiFillDelete } from "react-icons/ai";
import { FaAddressBook, FaEnvelope } from "react-icons/fa";
import EmailSection from "./EmailSection";
import PhoneSection from "./PhoneSection";

import { TbPencil } from "react-icons/tb";
import DarkRedButton from "../../../../components/ui/DarkRedButton";

const ContactSidebar = (props) => {
  return (
    <>
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

                  <TbPencil
                    onClick={() => {
                      props.setShowForm(true);
                      props.setEditId(details.id);
                    }}
                  />
                </div>
              </div>
              <div className="about__info--contact__details--info">
                <FaEnvelope />
                <EmailSection emails={details.emails} />
              </div>
              <div className="about__info--contact__details--info">
                <FaEnvelope />
                <PhoneSection phones={details.phones} />
              </div>
            </div>
          </CardBody>
        </Card>
      ))}

      <span className="text-danger">
        {props.error.length !== 0 && props.error}
      </span>

      <DarkRedButton>Save</DarkRedButton>
    </>
  );
};

export default ContactSidebar;
