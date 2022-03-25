import React from "react";

export const ContactPicker = (props) => {
    const contactList = props.contactList;
    const handleChange = props.handleChange;
    const name = props.name;
    return (
        <div style={{marginBottom: 10}}>
            <label htmlFor="contactPickerInput">Choose Contact</label>
            <select name={name} id="contactPickerInput" onChange={handleChange}>
                <option defaultValue value={""} key={-1}>No Contact Selected</option>
                {contactList.map((value, key) => {
                    return (
                        <option value={value.name} key={key}>{value.name}</option>
                    )
                })}
            </select>
        </div>

    );
};
