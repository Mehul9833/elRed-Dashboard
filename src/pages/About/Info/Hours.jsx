import React from "react";
import ContentCard from "../../../components/ui/ContentCard";
import { FaBusinessTime } from "react-icons/fa";

const Hours = () => {
  return (
    <ContentCard icon={<FaBusinessTime />} heading={"Hours of operations"}>
      <div className="about__info--hours">
        <p>Monday To Friday - 09:00 Am To 06:00 pm</p>
      </div>
    </ContentCard>
  );
};

export default Hours;
