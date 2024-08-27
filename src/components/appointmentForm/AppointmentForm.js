// Renders the Appointment Form
import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker"

// Function to set today's date as the minimum value for the "min" attribute in the input:
const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  // Constants to handle input onChange's and uptade the different states:
  const handleTitleInput = (e) => {
    setTitle(e.target.value);
  }
  const handleDateInput = (e) => {
    setDate(e.target.value);
  }
  const handleTimeInput = (e) => {
    setTime(e.target.value);
  }
  const handleContactInput = (e) => {
    setContact(e.target.value);
  }

  return (
    <>
    <div>
      <form onSubmit={handleSubmit} id="formAppointments" name="formAppointments">
        <label htmlFor="titleInput">Title:</label>
        <input type="text" id="titleInput" value={title} onChange={handleTitleInput} 
        required placeholder="Type here the title of your appointment..."></input>
        <label htmlFor="picker">Contact:</label>
        <ContactPicker contacts={contacts} handleContactInput={handleContactInput} contact={contact} picker />
        <label htmlFor="dateInput">Date:</label>
        <input type="date" id="dateInput" min={getTodayString()} value={date} onChange={handleDateInput} required></input>
        <label htmlFor="timeInput">Time:</label>
        <input type="time" id="timeInput" value={time} onChange={handleTimeInput} required></input>
        <button type="submit">Add appointment</button>
      </form>
    </div>
    </>
  );
};
