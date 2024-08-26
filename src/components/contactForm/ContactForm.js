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
        <input type="text" value={name} onChange={handleText}></input>
        <input
          type="tel" pattern="[1-9][0-9]{10}"
          value={phone}
          onChange={handleTel}
          >
        </input>
        <input type="email" value={email} onChange={handleEmail}></input>
        <button type="Submit">Submit</button>
      </form>
    </>
  );
};

