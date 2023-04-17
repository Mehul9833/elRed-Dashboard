import React, { useState } from "react";
import ContentCard from "../../../../components/ui/ContentCard";
import {
  FaLink,
  FaGlobe,
  FaInstagram,
  FaFacebook,
  FaTwitter
} from "react-icons/fa";
import RightSidebar from "../../../../components/ui/RightSidebar";
import EditSocialLinks from "./EditSocialLinks";

const Socials = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [socialLinks, setSocialLinks] = useState({
    instagram: "www.instagram.com/companyname",
    facebook: "www.facebook.com/companyname",
    twitter: "www.twitter.com/companyname",
    website: "www.website.com/companyname"
  });

  function handleToggleCanvase() {
    setShowSidebar(!showSidebar);
  }

  return (
    <ContentCard
      icon={<FaLink />}
      heading={"Social Media & Links"}
      handleIconClick={handleToggleCanvase}
    >
      <div className="about__info--links">
        <div className="about__info--links-link">
          <a
            href={
              socialLinks.website !== ""
                ? `https://${socialLinks.website}`
                : "#"
            }
            target="_blank"
            rel="noreferrer"
          >
            <FaGlobe />
            <span>Website</span>
          </a>
        </div>
        <div className="about__info--links-link">
          <a
            href={
              socialLinks.instagram !== ""
                ? `https://${socialLinks.instagram}`
                : "#"
            }
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
            <span>Instagram</span>
          </a>
        </div>
        <div className="about__info--links-link">
          <a
            href={
              socialLinks.facebook !== ""
                ? `https://${socialLinks.facebook}`
                : "#"
            }
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook />
            <span>Facebook</span>
          </a>
        </div>
        <div className="about__info--links-link">
          <a
            href={
              socialLinks.twitter !== ""
                ? `https://${socialLinks.twitter}`
                : "#"
            }
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter />
            <span>Twitter</span>
          </a>
        </div>
      </div>

      {showSidebar && (
        <RightSidebar
          toggle={handleToggleCanvase}
          isOpen={showSidebar}
          title="Social Media & Links"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        >
          <EditSocialLinks
            setSocialLinks={setSocialLinks}
            socialLinks={socialLinks}
            setShowSidebar={setShowSidebar}
          />
        </RightSidebar>
      )}
    </ContentCard>
  );
};

export default Socials;
