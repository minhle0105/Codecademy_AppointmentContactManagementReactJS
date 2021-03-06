import React, {useState, useEffect} from "react";
import {ContactForm} from "../../components/contactForm/ContactForm";
import {TileList} from "../../components/tileList/TileList";
import 'bootstrap/dist/css/bootstrap.min.css';
import SweetAlert2 from 'react-sweetalert2';

export const ContactsPage = (props) => {
    /*
    Define state variables for
    contact info and duplicate check
    */
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [nameExisted, setNameExisted] = useState(false);
    const [swalProps, setSwalProps] = useState({});

    const contactList = props.currentContactList;
    const setNewContacts = props.setNewContacts;

    useEffect(() => {
        const nameIsDuplicate = () => {
            const found = contactList.find((contact) => contact.name === name);
            return found !== undefined;
        };

        if (nameIsDuplicate()) {
            setNameExisted(true);
        } else {
            setNameExisted(false);
        }
    }, [name, contactList, nameExisted]);


    const showSuccessAlert = () => {
        setSwalProps({
            show: true,
            title: `Successfully added ${name}`,
            icon: 'success',
            showConfirmButton: false,
        });
        setTimeout(() => setSwalProps({
            show: false,
            title: `Successfully added ${name}`,
            icon: 'success',
            showConfirmButton: false,
        }), 1500);
    }

    const showContactExistedAlert = () => {
        setSwalProps({
            show: true,
            title: `Contact already existed`,
            icon: 'error',
            showConfirmButton: false,
        });
        setTimeout(() => setSwalProps({
            show: false,
            title: `Contact already existed`,
            icon: 'error',
            showConfirmButton: false,
        }), 1500);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        /*
        Add contact info and clear data
        if the contact name is not a duplicate
        */
        if (!nameExisted) {
            setNewContacts(name, phone, email);
            showSuccessAlert();
            setName("");
            setPhone("");
            setEmail("");
        }
        else {
            showContactExistedAlert();
        }
    };

    /*
    Using hooks, check for contact name in the
    contacts array variable in props
    */

    return (
        <div className="container" style={{borderStyle: "dashed"}}>
            <section style={{marginTop: 5}}>
                <h2>Add Contact</h2>
                <ContactForm name={name} phone={phone} email={email} handleSubmit={handleSubmit} setEmail={setEmail} setName={setName} setPhone={setPhone} />
            </section>
            <hr/>
            <section style={{marginBottom: 5}}>
                <h2>Contacts</h2>
                <TileList handleDelete={props.handleDelete} tiles={contactList} type="contact" />
            </section>
            <SweetAlert2 title={swalProps.title} show={swalProps.show} icon={swalProps.icon} showConfirmButton={swalProps.showConfirmButton} />
        </div>
    );
};
