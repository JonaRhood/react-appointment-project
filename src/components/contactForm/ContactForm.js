import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {

  
  
  const handleText = (event) => {
    setName(event.target.value)
  }

  const handleTel = (event) => {
    const input = event.target.value;
    const filteredInput = input.replace(/[^0-9+]/g, "");
    setPhone(filteredInput)
  }

  const handleEmail = (event) => {
    setEmail(event.target.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit} id="formContacts" name="formContacts">
        <label htmlFor="inputName" >Name & Last Name:</label>
        <input id="inputName" type="text" value={name} onChange={handleText} 
        required placeholder="Type here your name and last name"
        user-scalable="no"></input>
        <label htmlFor="inputPhone">Phone: </label>
        <input
          type="tel" pattern="^\+?[0-9]{9,16}$"
          value={phone}
          onChange={handleTel}
          required
          placeholder="Type here your phone number..."
          id="inputPhone"
          >
        </input>
        <label htmlFor="inputEmail">Email:</label>
        <input id="inputEmail" type="email" value={email} onChange={handleEmail} required
         placeholder="Type here your email..."></input>
        <button type="Submit">Add Contact</button>
      </form>
    </>
  );
};

