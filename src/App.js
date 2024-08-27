import React, { useEffect } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";
import { useState } from "react";

function App() {

  const [contacts, setContacts] = useState(() => {
    const saved = localStorage.getItem("contact");
    const initialValue = JSON.parse(saved);
    if (initialValue === undefined || initialValue === null) {
      return [];
    } else {
      return initialValue;
    }
  });
  
  const [appointments, setAppointments] = useState(() => {
    const saved = localStorage.getItem("appointment")
    const initialValue = JSON.parse(saved);
    if (initialValue === undefined || initialValue === null) {
      return [];
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem("contact", JSON.stringify(contacts));
  }, [contacts]);

  useEffect(() => {
    localStorage.setItem("appointment", JSON.stringify(appointments));
  }, [appointments])

  const addContact = (contactName, contactPhone, contactEmail) => {
    const capitalizeName = (name) => {
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

  const deleteContact = (name) => {
    setContacts(prevContact => prevContact.filter((contacts) => contacts.name !== name))
  }

  const addAppointment = (appointmentName, contact, date, time) => {
    setAppointments(prevAppointments => [...prevAppointments, {
      name: appointmentName,
      contact: contact,
      date: date,
      time: time
    }])
  }

  const deleteAppointment = (name) => {
    setAppointments(prevAppointment => 
      prevAppointment.filter((appointments) => appointments.name !== name))
  }

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
