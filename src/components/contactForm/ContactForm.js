import React, { useEffect } from "react";

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
    setPhone(event.target.value)
  }

  const handleEmail = (event) => {
    setEmail(event.target.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="inputName" >Name:</label>
        <input id="inputName" type="text" value={name} onChange={handleText} required></input>
        <label htmlFor="inputPhone">Phone: </label>
        <input
          type="tel" pattern="[0-9]{9}"
          value={phone}
          onChange={handleTel}
          required
          >
        </input>
        <label htmlFor="inputEmail">Email:</label>
        <input id="inputEmail" type="email" value={email} onChange={handleEmail} required></input>
        <button type="Submit">Submit</button>
      </form>
    </>
  );
};

