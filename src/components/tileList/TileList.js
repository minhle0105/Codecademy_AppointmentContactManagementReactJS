import React from "react";
import {AppointmentTile} from "../tile/AppointmentTile";
import {ContactTile} from "../tile/ContactTile";

export const TileList = (props) => {

    let tiles = props.tiles;
    let type = props.type;

    return (
        <div>
            {type === "appointment" ? <AppointmentTile data={tiles} handleDelete={props.handleDelete} /> : <ContactTile handleDelete={props.handleDelete} data={tiles} /> }
        </div>
    );
};
