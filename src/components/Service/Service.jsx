import {useEffect, useState} from "react";
import ServiceCard from "./ServiceCard";

const Service = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <div className="text-center w-1/2 mx-auto space-y-4 mb-10">
        <p className="text-[#FF3811] text-xl font-bold">Service</p>
        <h1 className="text-5xl font-bold">Our Service Area</h1>
        <p>
          The majority have suffered alteration in some form, by injected
          humour, or randomized words which don`t look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="text-center my-6">
        <button className="btn btn-outline text-[#FF3811]">
          More Services
        </button>
      </div>
    </div>
  );
};

export default Service;
