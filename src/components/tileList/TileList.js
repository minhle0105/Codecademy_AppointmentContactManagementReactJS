import React from "react";
import {Tile} from "../tile/Tile";

export const TileList = (props) => {

    let tiles = props.tiles;

    return (
        <div>
            {tiles.map((tile, index) => {
                <Tile key={index} tile={tile} />
            })}
        </div>
    );
};
