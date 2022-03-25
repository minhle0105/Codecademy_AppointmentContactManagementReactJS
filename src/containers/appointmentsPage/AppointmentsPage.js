import React, {useState} from "react";
import {AppointmentForm} from "../../components/appointmentForm/AppointmentForm";
import {TileList} from "../../components/tileList/TileList";

export const AppointmentsPage = (props) => {

    const appointmentList = props.currentAppointmentList;
    const contactList = props.currentContactList;
    const addAppointment = props.setNewAppointments;

    /*
    Define state variables for
    appointment info
    */
    const [contact, setContact] = useState('');
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        /*
        Add contact info and clear data
        */
        addAppointment(title, contact, date, time);
        setContact('');
        setTitle('');
        setDate('');
        setTime('');

    };

    return (
        <div>
            <section>
                <h2>Add Appointment</h2>
                <AppointmentForm time={time} date={date} title={title} contact={contact} setContact={setContact}
                                 setDate={setDate} setTitle={setTitle} setTime={setTime} handleSubmit={handleSubmit}
                                 contacts={contactList}/>
            </section>
            <hr/>
            <section>
                <h2>Appointments</h2>
                <TileList tile={appointmentList} />
            </section>
        </div>
    );
};
