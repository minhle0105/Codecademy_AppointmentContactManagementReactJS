import React, {useState, useEffect} from "react";
import {Switch, Route, Redirect, NavLink} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {AppointmentsPage} from "./containers/appointmentsPage/AppointmentsPage";
import {ContactsPage} from "./containers/contactsPage/ContactsPage";

function App() {
    /*
    Define state variables for
    contacts and appointments
    */
    const [contacts, setContacts] = useState(JSON.parse(sessionStorage.getItem("contacts")) ? JSON.parse(sessionStorage.getItem("contacts")) : []);
    const [appointments, setAppointments] = useState(JSON.parse(sessionStorage.getItem("appointments")) ? JSON.parse(sessionStorage.getItem("appointments")) : []);
    const
        ROUTES = {
            CONTACTS: "/contacts",
            APPOINTMENTS: "/appointments",
        };

    useEffect(() => {
        sessionStorage.setItem("contacts", JSON.stringify(contacts))
        sessionStorage.setItem("appointments", JSON.stringify(appointments))
    }, [contacts, appointments])

    /*
    Implement functions to add data to
    contacts and appointments
    */
    const setNewAppointments = (title, contact, date, time) => {
        setAppointments([
            ...appointments,
            {
                title: title,
                contact: contact,
                date: date,
                time: time,
            },
        ]);
    };

    const setNewContacts = (name, phone, email) => {
        setContacts([
            ...contacts,
            {
                name: name,
                phone: phone,
                email: email,
            },
        ]);
    };

    const handleDeleteContact = (i) => {
        contacts.splice(i, 1);
        setContacts(contacts);
    }

    const handleDeleteAppointment = (i) => {
        appointments.splice(i, 1);
        setAppointments(appointments);
    }

    return (
        <>
            <nav>
                <NavLink to={ROUTES.CONTACTS} activeClassName="active">
                    Contacts
                </NavLink>
                <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
                    Appointments
                </NavLink>
            </nav>
            <main>
                <Switch>
                    <Route exact path="/">
                        <Redirect to={ROUTES.CONTACTS}/>
                    </Route>
                    <Route path={ROUTES.CONTACTS}>
                        {/* Add props to ContactsPage */}
                        <ContactsPage currentContactList={contacts} handleDelete={handleDeleteContact} setNewContacts={setNewContacts}/>
                    </Route>
                    <Route path={ROUTES.APPOINTMENTS}>
                        {/* Add props to AppointmentsPage */}
                        <AppointmentsPage currentAppointmentList={appointments} handleDelete={handleDeleteAppointment} currentContactList={contacts} setNewAppointments={setNewAppointments} />
                    </Route>
                </Switch>
            </main>
        </>
    );
}

export default App;
