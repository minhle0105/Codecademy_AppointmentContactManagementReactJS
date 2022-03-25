import React from "react";

export const ContactTile = ({ data }) => {
    return (
        <div className="tile-container">
            <table style={{borderStyle: "dashed", width: "100%"}}>
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
                            <td>{contact.phone}</td>
                            <td>{contact.email}</td>
                        </tr>

                        </tbody>
                    )
                })}
            </table>
        </div>
    );
};
