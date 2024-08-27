import React from "react";

export const ContactPicker = ({ contacts, handleContactInput, contact }) => {
  return (
    <>
      <select onChange={handleContactInput} value={contact.name} form="formAppointments" required id="picker">  
        <option value="">No Contact Selected</option>
        {contacts.map((value, idx) => (
          <option key={idx} value={value.name}>
            {value.name}
          </option>
        ))}
      </select>
    </>
  );
};
