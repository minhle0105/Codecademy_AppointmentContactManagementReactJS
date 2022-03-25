import React from "react";
import {AppointmentTile} from "../tile/AppointmentTile";
import {ContactTile} from "../tile/ContactTile";

export const TileList = (props) => {

    let tiles = props.tiles;
    let type = props.type;
    if (type === "appointment") {
        console.log(`TileList, contact name chosen : ${tiles.contact}`)
    }

    return (
        <div>
            {type === "appointment" ? <AppointmentTile data={tiles} /> : <ContactTile data={tiles} /> }
        </div>
    );
};
