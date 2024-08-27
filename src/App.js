import React, { useEffect } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";
import { useState } from "react";

function App() {
  // Constant to save the list of contacts, searches localStorage first for default, 
  // if not returns empty Array:
  const [contacts, setContacts] = useState(() => {
    const saved = localStorage.getItem("contact");
    const initialValue = JSON.parse(saved);
    if (initialValue === undefined || initialValue === null) {
      return [];
    } else {
      return initialValue;
    }
  });

  // Constant to save the list of appointments, searches localStorage first for default, 
  // if not returns empty Array:
  const [appointments, setAppointments] = useState(() => {
    const saved = localStorage.getItem("appointment")
    const initialValue = JSON.parse(saved);
    if (initialValue === undefined || initialValue === null) {
      return [];
    } else {
      return initialValue;
    }
  });

  // Effects to store contacts and appointments to the localStorage when they get updated:
  useEffect(() => {
    localStorage.setItem("contact", JSON.stringify(contacts));
  }, [contacts]);

  useEffect(() => {
    localStorage.setItem("appointment", JSON.stringify(appointments));
  }, [appointments])

  // Function to add a contact to contacts:
  const addContact = (contactName, contactPhone, contactEmail) => {
    const capitalizeName = (name) => { // Capitalizes the first letter of each word.
      return name.split(' ')
                 .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                 .join(' ');
    }
    setContacts(prevContacts => [...prevContacts, {
      name: capitalizeName(contactName),
      phone: contactPhone,
      email: contactEmail.toLowerCase()
    }]);
  }
  // Function to delete contacts:
  const deleteContact = (index) => {
    setContacts(prevContact => prevContact.filter((_, i) => i !== index))
  }

  // Function to add an appointment to appointments:
  const addAppointment = (appointmentName, contact, date, time) => {
    setAppointments(prevAppointments => [...prevAppointments, {
      name: appointmentName,
      contact: contact,
      date: date,
      time: time
    }])
  }
  // Function to delete an appointment:
  const deleteAppointment = (index) => {
    setAppointments(prevAppointment => 
      prevAppointment.filter((_, i) => i !== index))
  }

  // Map routing from REACT Router:
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Navigate to={ROUTES.CONTACTS} replace />} />
      <Route path={ROUTES.CONTACTS} element={<ContactsPage 
      contacts={contacts} addContact={addContact} deleteContact={deleteContact}/> /* Add props to ContactsPage */} />
      <Route path={ROUTES.APPOINTMENTS} element={<AppointmentsPage 
      contacts={contacts} appointments={appointments} addAppointment={addAppointment} 
      deleteAppointment={deleteAppointment}/> /* Add props to AppointmentsPage */} />
    </Route>
  ));

  return (
    <RouterProvider router={router} />
  );
}

export default App;
