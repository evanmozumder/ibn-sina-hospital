import { useEffect, useState } from "react";

const useCourses = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/fakeData.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return { services, setServices };
};

export default useCourses;
