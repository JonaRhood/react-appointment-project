import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact, deleteContact }) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
 const [name, setName] = useState('');
 const [phone, setPhone] = useState('');
 const [email, setEmail] = useState('');
 const [duplicatedName, setDuplicatedName] = useState(false);

  // useEffect(() => {
  //   const isDuplicate = contacts.some(contact => contact.name === name);
  //   setDuplicatedName(isDuplicate);
  // }, [name, contacts])


  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (!duplicatedName) {
      addContact(name, phone, email);
      setName('');
      setPhone('');
      setEmail('');
    } else {
      alert("Contact name already exists.")
    }
  };

  const removeContact = (name) => {
    deleteContact(name);
  }

  

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 
        name={name} setName={setName} 
        phone={phone} setPhone={setPhone} 
        email={email}  setEmail ={setEmail}
        handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={contacts} removeItem={removeContact} />
      </section>
    </div>
  );
};
