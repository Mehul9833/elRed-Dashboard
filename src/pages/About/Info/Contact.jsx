import React from "react";
import ContentCard from "../../../components/ui/ContentCard";
import { RiContactsBookLine } from "react-icons/ri";
import { FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <ContentCard icon={<RiContactsBookLine />} heading={"Contact"}>
      <div className="about__info--contact">
        <div className="about__info--contact-email">
          <i>
            <FaEnvelope />
          </i>
          <div className="about__info--contact-emailId">
            <p>salesteam@br.in/</p>
            <p>salesteam2@br.in/</p>
          </div>
        </div>
        <span className="about__info--contact-count">+5</span>
      </div>
      <div className="about__info--contact-phone">
        <i>
          <FaPhone />
        </i>

        <p>+91 9833240843</p>
      </div>
    </ContentCard>
  );
};

export default Contact;
