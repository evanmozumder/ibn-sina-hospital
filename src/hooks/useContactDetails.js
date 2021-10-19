import { useEffect, useState } from "react";

const useConactDetails = () => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    fetch("/contactsData.json")
      .then((res) => res.json())
      .then((data) => setContacts(data));
  }, []);

  return { contacts, setContacts };
};

export default useConactDetails;
