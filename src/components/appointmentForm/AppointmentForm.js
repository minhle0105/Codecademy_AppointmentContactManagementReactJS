import React from "react";
import {ContactPicker} from "../contactPicker/ContactPicker";

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
    const getTodayString = () => {
        const [month, day, year] = new Date()
            .toLocaleDateString("en-US")
            .split("/");
        return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="appTitle">Title</label>
            <input id="appTitle" type="text" value={title} onChange={(e) => {setTitle(e.target.value)}} />
            <ContactPicker contactList={contacts} name={contact} handleChange={setContact} />
            <label htmlFor="Date">Date</label>
            <input id="appDate" type="date" min={getTodayString()} value={date} onChange={(e) => {setDate(e.target.value)}} />
            <label htmlFor="appTime">Time</label>
            <input id="appTime" type="time" value={time} onChange={(e) => {setTime(e.target.value)}} />
            <button type="submit">Book Appointment</button>
        </form>
    );
};
