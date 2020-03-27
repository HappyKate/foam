import React from "react";
import { CardBody, CardImg, CardTitle } from "reactstrap";

function ServicesList({ element }) {
  const { image, title } = element;
  return (
    <div className="col-md-4">
      <div className="card  mt-3">
        <CardImg top width="100%"  src={image} alt="img" />
        <CardBody>
          <CardTitle>{title}</CardTitle>
        </CardBody>
      </div>
      <style global jsx>{`
        .card-title {
          color: #ffd178;
          text-align: center;
        }
        .card {
        border: none}
      `}</style>
    </div>
  );
}
export default ServicesList;
