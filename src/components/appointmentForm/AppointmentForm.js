import React from "react";
import {ContactPicker} from "../contactPicker/ContactPicker";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button"
import './AppointmentForm.css'

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
            <ContactPicker contactList={contacts} name={contact} handleChange={(e) => {setContact(e.target.value)}} />
            <label htmlFor="appDate">Date</label>
            <input id="appDate" type="date" min={getTodayString()} value={date} onChange={(e) => {setDate(e.target.value)}} />
            <label htmlFor="appTime">Time</label>
            <input id="appTime" type="time" value={time} onChange={(e) => {setTime(e.target.value)}} />
            <Button style={{marginTop: 5, width: 200}} variant="outline-success" type="submit">Book Appointment</Button>
            <Button style={{marginLeft: 10, marginTop: 5, width: 200}} variant="outline-danger" type="reset">Reset Form</Button>
        </form>
    );
};
