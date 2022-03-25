import React from "react";
import {ContactPicker} from "../contactPicker/ContactPicker";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button"
import {Form} from "react-bootstrap";

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

    const handleReset = () => {
        setTitle('');
        setContact('');
        setDate('');
        setTime('');
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="appTitle">Title</Form.Label>
                <input id="appTitle" type="text" value={title} onChange={(e) => {setTitle(e.target.value)}} required />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Choose Contact</Form.Label>
                <ContactPicker contactList={contacts} name={contact} handleChange={(e) => {setContact(e.target.value)}} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="appDate">Date</Form.Label>
                <input id="appDate" type="date" min={getTodayString()} value={date} onChange={(e) => {setDate(e.target.value)}} required />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="appTime">Time</Form.Label>
                <input id="appTime" type="time" value={time} onChange={(e) => {setTime(e.target.value)}} required />
            </Form.Group>
            <Button style={{marginTop: 5, width: 200}} variant="outline-success" type="submit">Book Appointment</Button>
            <Button style={{marginLeft: 10, marginTop: 5, width: 200}} variant="outline-danger" onClick={handleReset}>Reset Form</Button>
        </Form>
    );
};
