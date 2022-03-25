import React from "react";
import {AppointmentTile} from "../tile/AppointmentTile";
import {ContactTile} from "../tile/ContactTile";

export const TileList = (props) => {

    let tiles = props.tiles;
    let type = props.type;

    return (
        <div>
            {tiles.map((tile, index) => (
                type === "appointment" ? <AppointmentTile tile={tile} key={index} /> : <ContactTile tile={tile} key={index} />
            ))}
        </div>
    );
};
