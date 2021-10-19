import React from "react";
import useAuth from "../../hooks/useAuth";
import Service from "../Service/Service";

const Services = () => {
  const { services } = useAuth();
  return (
    <div className="container">
      <h3 className="text-center">All of our Services</h3>
      <div className=" row mt-5">
        {services.map((service) => (
          <Service service={service} key={service.id} />
        ))}
      </div>
    </div>
  );
};

export default Services;
