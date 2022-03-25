import React from "react";

export const ContactPicker = (props) => {
    const contactList = props.contactList;
    const handleChange = props.handleChange;
    const name = props.name;
    return (
        <div>
            <label htmlFor="contactPicker">Choose Contact</label>
            <select name={name} id="contactPicker" onChange={handleChange}>
                <option selected="selected" value={""} key={-1}>No Contact Selected</option>
                {contactList.map((value, key) => {
                    return (
                        <option value={value} key={key}>{value}</option>
                    )
                })}
            </select>
        </div>

    );
};
