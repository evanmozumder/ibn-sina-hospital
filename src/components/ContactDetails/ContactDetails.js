import React from "react";
import { Card } from "react-bootstrap";

const ContactDetails = (props) => {
  const { name, location, phone } = props.contact;
  return (
    <div className="col-md-3">
      <Card style={{}}>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{location}</Card.Text>
          <Card.Text>{phone}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ContactDetails;
