import React from "react";

export const ContactForm = ({
                                name,
                                setName,
                                phone,
                                setPhone,
                                email,
                                setEmail,
                                handleSubmit
                            }) => {
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="contactName">Name</label>
            <input id="contactName" type="text" value={name} onChange={(e) => {
                setName(e.target.value)
            }} required/><br/>
            <label htmlFor="contactPhone">Phone</label>
            <input id="contactPhone" type="tel" value={phone} onChange={(e) => {
                setPhone(e.target.value)
            }} required pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"/><br/>
            <label htmlFor="contactEmail">Email</label>
            <input id="contactEmail" type="email" value={email} onChange={(e) => {
                setEmail(e.target.value)
            }} required/><br/>
            <button type="submit">Submit</button>
        </form>
    );
};
