import React from "react";
import useAuth from "../../hooks/useAuth";
import Service from "../Service/Service";

const Home = () => {
  const { services } = useAuth();
  const main_services = services.slice(0, 4);
  return (
    <div>
      <img
        style={{ objectFit: "contain" }}
        src="https://www.ibnsinatrust.com/image/slider/3.png"
        alt=""
      />
      <div className="container mt-5">
        <div className="row ">
          {main_services.map((service) => (
            <Service service={service} key={service.id}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
