import React from "react";
import Table from "react-bootstrap/Table";
import 'bootstrap/dist/css/bootstrap.min.css';

export const ContactTile = ({ data }) => {
    const transformContactPhone = (phoneNumber) => {
        let output = "(";
        output += phoneNumber.substring(0,3);
        output += ") ";
        output += phoneNumber.substring(3,6);
        output += " - ";
        output += phoneNumber.substring(7);
        return output;
    }
    return (
        <div className="tile-container">
            <Table responsive>
                <thead>
                <tr style={{borderBottom: "5px"}}>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                </tr>
                </thead>


                {data.map((contact, index) => {
                    return (
                        <tbody key={index}>
                        <tr>
                            <td>{contact.name}</td>
                            <td>{transformContactPhone(contact.phone)}</td>
                            <td>{contact.email}</td>
                        </tr>

                        </tbody>
                    )
                })}
            </Table>
        </div>
    );
};
