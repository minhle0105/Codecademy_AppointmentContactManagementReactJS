import React from "react";

export const ContactTile = ({ tile }) => {
    return (
        <div className="tile-container">
            <p>{tile.name}</p>
            <p>{tile.email}</p>
            <p>{tile.phone}</p>
        </div>
    );
};
