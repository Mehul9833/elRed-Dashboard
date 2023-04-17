import React, { useState } from "react";
import { Card, CardBody } from "reactstrap";
import ContentCard from "../../../../components/ui/ContentCard";
import { FaQuoteLeft, FaPlusCircle } from "react-icons/fa";
import RightSidebar from "../../../../components/ui/RightSidebar";
import { AiFillDelete } from "react-icons/ai";
import { TbPencil } from "react-icons/tb";

const Statements = () => {
  const [statements, setStatements] = useState([
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditii dolorem, reiciendis ipsa.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditii dolorem, reiciendis ipsa."
  ]);

  const [showSidebar, setShowSidebar] = useState(false);

  function handleToggleCanvase() {
    setShowSidebar(!showSidebar);
  }

  const AddStatements = () => {
    return (
      <>
        <FaPlusCircle setStatements={setStatements} />
        Add
      </>
    );
  };

  return (
    <>
      <ContentCard
        icon={<FaQuoteLeft />}
        heading={"Statements"}
        handleIconClick={handleToggleCanvase}
      >
        <div className="about__info--statements">
          <div className="about__info--statements-statement">
            <p>{statements[0]}</p>
          </div>
          {statements.length > 1 && (
            <div className="about__info--statements-count">
              <p>+{statements.length - 1}</p>
            </div>
          )}
        </div>
      </ContentCard>
      {showSidebar && (
        <RightSidebar
          toggle={handleToggleCanvase}
          isOpen={showSidebar}
          title={"Statement"}
          description="Write down the statements of the company in to convey your vision to the potential customer"
          headerAction={<AddStatements />}
        >
          {statements.map((statement) => (
            <Card>
              <CardBody>
                <div className="about__info--statements-sidebar">
                  <div className="about__info--statements-sidebar__header">
                    <FaQuoteLeft />
                    <div className="about__info--statements-sidebar__header--actions">
                      <AiFillDelete />
                      <TbPencil />
                    </div>
                  </div>
                  <div className="about__info--statements-sidebar__content">
                    {statement}
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </RightSidebar>
      )}
    </>
  );
};

export default Statements;
