import React from "react";
import { Tile } from "../tile/Tile"

export const TileList = ({ tiles }) => {
  return (
    <div>
      {tiles.map((tile, idx) => {
        const { name, ...description } = tile;
        return <Tile key={idx} name={name} description={description} />
      })}
    </div>
  );
};
