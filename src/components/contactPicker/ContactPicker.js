import React from "react";

export const ContactPicker = (props) => {
    const contactList = props.contactList;
    const handleChange = props.handleChange;
    const name = props.name;
    return (
        <div>
            <select name={name} id="contactPickerInput" onChange={handleChange} required>
                <option selected={!name} defaultValue value={""} key={-1}>No Contact Selected</option>
                {contactList.map((value, key) => {
                    return (
                        <option value={value.name} key={key}>{value.name}</option>
                    )
                })}
            </select>
        </div>

    );
};
