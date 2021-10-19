import React from "react";
import { Button, Card } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const ServiceDetails = (props) => {
  const { services } = useAuth();
  const { serviceId } = useParams();
  const details = services.find((service) => service.id == serviceId);
  console.log("details", details);
  console.log("services from details", services);
  return (
    <div className="">
      <h3>Details of {serviceId}</h3>
      <Card style={{ width: "30rem" }} className="me-auto ms-auto">
        <Card.Img variant="top" src={details?.img} />
        <Card.Body>
          <Card.Title>{details?.name}</Card.Title>
          <Card.Text>{details?.description}</Card.Text>
          <Link to="/services">
            <Button variant="primary">All Services</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ServiceDetails;
