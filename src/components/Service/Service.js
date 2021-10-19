import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Service = (props) => {
  const { id, name, img, descrption } = props.service;
  const handleServiceDetails = () => {};
  return (
    <div className="col-md-3">
      <Card style={{}}>
        <Card.Img
          style={{ width: "300px", height: "250px" }}
          variant="top"
          src={img}
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{descrption}</Card.Text>
          <Link to={`/details/${id}`}>
            <Button onClick={handleServiceDetails} variant="primary">
              Details
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
