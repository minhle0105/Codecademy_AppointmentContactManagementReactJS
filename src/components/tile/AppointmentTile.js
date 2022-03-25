import React from "react";

export const AppointmentTile = ({ data }) => {
    return (
        <div className="tile-container">
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Contact Name</th>
                    <th>Date</th>
                    <th>Time</th>
                </tr>
                </thead>
                {data.map((appointment, key) => {
                    return (
                        <tbody key={key}>
                        <tr>
                            <td>{appointment.title}</td>
                            <td>{appointment.contact}</td>
                            <td>{appointment.date}</td>
                            <td>{appointment.time}</td>
                        </tr>
                        </tbody>
                    )
                })}
            </table>
        </div>
    );
};
