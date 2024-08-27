// Renders the Appointment Page
import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({ contacts, appointments, addAppointment, deleteAppointment }) => {
 // Hook States
 const [title, setTitle] = useState([]);
 const [contact, setContact] = useState([]);
 const [date, setDate] = useState([]);
 const [time, setTime] = useState([]);

  // Sends input data to App.js to update the appointments state array.
  const handleSubmit = (e) => {
    e.preventDefault();
    
   addAppointment(title, contact, date, time);
   setTitle('');
   setContact('')
   setDate('')
   setTime('')
  };

  // Detects button event in Tile.js and sends the key name to App.js to remove an appointment.
  const removeAppointment = (name) => {
    deleteAppointment(name);
  }

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm  contacts={contacts} title={title} setTitle={setTitle} contact={contact} setContact={setContact}
        date={date} setDate={setDate} time={time} setTime={setTime} handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList tiles={appointments} removeItem={removeAppointment}/>
      </section>
    </div>
  );
};