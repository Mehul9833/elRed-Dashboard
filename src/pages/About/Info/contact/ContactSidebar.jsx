import React from "react";
import { Card, CardBody } from "reactstrap";
import { AiFillDelete } from "react-icons/ai";
import {
  FaAddressBook,
  FaEnvelope,
  FaPencilAlt,
  FaPhone
} from "react-icons/fa";
import EmailSection from "./EmailSection";
import PhoneSection from "./PhoneSection";

const ContactSidebar = (props) => {
  return (
    <>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      <div className="about__info--contact-details">
        {props.contactDetails.map((details, index) => (
          <Card key={index}>
            <CardBody className="about__info--contact-details__card">
              <div className="about__info--contact-details--header">
                <div className="about__info--contact-details--header__name">
                  <FaAddressBook />
                  <p>{details.name}</p>
                </div>
                <div className="about__info--contact-details--header__actions">
                  <AiFillDelete className="about__info--contact-details--header__delete" />
                  <FaPencilAlt
                    className="about__info--contact-details--header__pencil"
                    onClick={() => {
                      props.setShowForm(true);
                      props.setEditId(details.id);
                    }}
                  />
                </div>
              </div>
              <div className="about__info--contact-details__information">
                <FaEnvelope />
                <div className="about__info--contact-details__information--info">
                  <EmailSection emails={details.emails} />
                </div>
              </div>
              <div className="about__info--contact-details__information">
                <FaPhone />
                <div className="about__info--contact-details__information--info">
                  <PhoneSection phones={details.phones} />
                </div>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </>
  );
};

export default ContactSidebar;
