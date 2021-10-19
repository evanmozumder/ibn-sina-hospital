import React from "react";
import useAuth from "../../hooks/useAuth";
import ContactDetails from "../ContactDetails/ContactDetails";

const ContactUs = () => {
  const { contacts } = useAuth();
  return (
    <div className="container mt-3">
      <div className="row">
        {contacts.map((contact) => (
          <ContactDetails contact={contact} key={contact.id} />
        ))}
      </div>
    </div>
  );
};

export default ContactUs;
