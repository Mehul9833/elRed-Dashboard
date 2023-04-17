import React, { useState } from "react";
import DarkRedButton from "../../../../components/ui/DarkRedButton";
import InputField from "../../../../components/ui/InputField";

const EditSocialLinks = (props) => {
  const [instagramLink, setInstagramLink] = useState(
    props.socialLinks.instagram
  );
  const [facebookLink, setFacebookLink] = useState(props.socialLinks.facebook);
  const [websiteLink, setWebsiteLink] = useState(props.socialLinks.website);
  const [twitterLink, setTwitterLink] = useState(props.socialLinks.twitter);

  function handleSaveLinks() {
    props.setSocialLinks({
      website: websiteLink,
      facebook: facebookLink,
      twitter: twitterLink,
      instagram: instagramLink
    });
    props.setShowSidebar(false);
  }

  function handleLinkChange(e) {
    switch (e.target.id) {
      case "facebook":
        setFacebookLink(e.target.value);
        break;

      case "instagram":
        setInstagramLink(e.target.value);
        break;

      case "twitter":
        setTwitterLink(e.target.value);
        break;

      case "website":
        setWebsiteLink(e.target.value);
        break;

      default:
        return;
    }
  }

  return (
    <>
      <div className="about__info--links__form">
        <InputField
          type="text"
          id="instagram"
          name="instagram"
          placeholder="eg. www.instagram.com/companyname"
          label="Instagram"
          value={instagramLink}
          onChange={(e) => handleLinkChange(e)}
        />
        <InputField
          type="text"
          id="facebook"
          name="facebook"
          placeholder="eg. www.facebook.com/companyname"
          label="Facebook"
          value={facebookLink}
          onChange={(e) => handleLinkChange(e)}
        />
        <InputField
          type="text"
          id="twitter"
          name="twitter"
          placeholder="eg. www.twitter.com/companyname"
          label="Twitter"
          value={twitterLink}
          onChange={(e) => handleLinkChange(e)}
        />
        <InputField
          type="text"
          id="website"
          name="website"
          placeholder="eg. www.website.com/companyname"
          label="Website"
          value={websiteLink}
          onChange={(e) => handleLinkChange(e)}
        />
      </div>
      <DarkRedButton onClick={handleSaveLinks}>Save</DarkRedButton>
    </>
  );
};

export default EditSocialLinks;
