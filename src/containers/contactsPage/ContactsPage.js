// Renders the Contact Page
import React, { useState } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact, deleteContact }) => {
 // Hook States
 const [name, setName] = useState('');
 const [phone, setPhone] = useState('');
 const [email, setEmail] = useState('');

  // Sends input data to App.js to update the contacts state array.
  const handleSubmit = (e) => {
    e.preventDefault();

      addContact(name, phone, email);
      setName('');
      setPhone('');
      setEmail('');
  };

  // Detects button event in Tile.js and sends the key name to App.js to remove a contact.
  const removeContact = (index) => {
    deleteContact(index);
  }

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
