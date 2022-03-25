import React from "react";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form} from "react-bootstrap";

export const ContactForm = ({
                                name,
                                setName,
                                phone,
                                setPhone,
                                email,
                                setEmail,
                                handleSubmit
                            }) => {

    const handleResetButton = () => {
        setName('');
        setPhone('');
        setEmail('');
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="contactName">Name</Form.Label>
                <input id="contactName" type="text" value={name} onChange={(e) => {
                    setName(e.target.value)
                }} required/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="contactPhone">Phone</Form.Label>
                <input id="contactPhone" type="tel" value={phone} onChange={(e) => {setPhone(e.target.value)}} required pattern="[1-9][0-9]{2}[1-9][0-9]{2}[0-9]{4}"/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="contactEmail">Email</Form.Label>
                <input id="contactEmail" type="email" value={email} onChange={(e) => {
                    setEmail(e.target.value)
                }} required/>
            </Form.Group>
            <Button style={{width: 100}} variant="outline-success" type="submit">Submit</Button>
            <Button style={{marginLeft: 10, width: 100}} variant="outline-danger" onClick={handleResetButton}>Reset</Button>
        </Form>
    );
};
