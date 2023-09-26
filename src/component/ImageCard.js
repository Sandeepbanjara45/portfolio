import React from "react";
import Card from "react-bootstrap/Card";

const ImageCard = ({ skillIcon, skillTitle }) => {
  return (
    <>
      <div className="col-sm-12 col-md-4 col-lg-4 col-12 mb-5 d-flex justify-content-center">
        <Card style={{ width: "18rem" }} className="bb zoom  fontIcon">
          <Card.Body>
            {skillIcon}
            <Card.Title className="text-white text-center title">
              {skillTitle}
            </Card.Title>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};
export default ImageCard;
