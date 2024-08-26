import React from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";
import { useState } from "react";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  /*
  Implement functions to add data to
  contacts and appointments
  */
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

  contacts.reverse();

  const addAppointment = (appointmentName, contact, date, time) => {
    setAppointments(prevAppointments => [...prevAppointments, {
      name: appointmentName,
      contact: contact,
      date: date,
      time: time
    }])
  }

  console.log(contacts);

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Navigate to={ROUTES.CONTACTS} replace />} />
      <Route path={ROUTES.CONTACTS} element={<ContactsPage contacts={contacts} addContact={addContact} /> /* Add props to ContactsPage */} />
      <Route path={ROUTES.APPOINTMENTS} element={<AppointmentsPage contacts={contacts} appointments={appointments} addAppointment={addAppointment} /> /* Add props to AppointmentsPage */} />
    </Route>
  ));

  return (
    <RouterProvider router={router} />
  );
}

export default App;
