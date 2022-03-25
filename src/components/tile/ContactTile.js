import React from "react";

export const ContactTile = ({ tile }) => {
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

                <tbody>
                <tr>
                    <td>{tile.name}</td>
                    <td>{tile.phone}</td>
                    <td>{tile.email}</td>
                </tr>
                </tbody>

            </table>
        </div>
    );
};
