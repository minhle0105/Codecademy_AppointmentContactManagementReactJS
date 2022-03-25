import React, {useState} from "react";
import {AppointmentForm} from "../../components/appointmentForm/AppointmentForm";
import {TileList} from "../../components/tileList/TileList";
import 'bootstrap/dist/css/bootstrap.min.css';
import SweetAlert2 from 'react-sweetalert2';

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
    const [swalProps, setSwalProps] = useState({});


    const handleSubmit = (e) => {
        e.preventDefault();
        /*
        Add contact info and clear data
        */
        addAppointment(title, contact, date, time);
        setSwalProps({
            show: true,
            title: `Your appointment with ${contact} is successfully booked on ${date} at ${time}.`,
            text: 'Hello World',
            timer: 2000,
            showConfirmButton: false,
            icon: 'success',
        });
        setContact('');
        setTitle('');
        setDate('');
        setTime('');
    };

    return (
        <div className="container" style={{borderStyle: "dashed"}}>
            <section style={{marginTop: 5}}>
                <h2>Add Appointment</h2>
                <AppointmentForm time={time} date={date} title={title} contact={contact} setContact={setContact}
                                 setDate={setDate} setTitle={setTitle} setTime={setTime} handleSubmit={handleSubmit}
                                 contacts={contactList}/>
            </section>
            <hr/>
            <section style={{marginBottom: 5}}>
                <h2>Appointments</h2>
                <TileList tiles={appointmentList} type="appointment"/>
            </section>
            <SweetAlert2 {...swalProps} />
        </div>
    );
};
