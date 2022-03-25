import React, {useState, useEffect} from "react";
import {ContactForm} from "../../components/contactForm/ContactForm";
import {TileList} from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
    /*
    Define state variables for
    contact info and duplicate check
    */
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [nameExisted, setNameExisted] = useState(false);

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



    const handleSubmit = (e) => {
        e.preventDefault();
        /*
        Add contact info and clear data
        if the contact name is not a duplicate
        */
        if (!nameExisted) {
            setNewContacts(name, phone, email);
            setName("");
            setPhone("");
            setEmail("");
            console.log(contactList)
        }
    };

    /*
    Using hooks, check for contact name in the
    contacts array variable in props
    */

    return (
        <div>
            <section>
                <h2>Add Contact</h2>
                <ContactForm name={name} phone={phone} email={email} handleSubmit={handleSubmit} setEmail={setEmail} setName={setName} setPhone={setPhone} />
            </section>
            <hr/>
            <section>
                <h2>Contacts</h2>
                <TileList tiles={contactList} type="contact" />
            </section>
        </div>
    );
};
