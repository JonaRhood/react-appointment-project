import React from "react";
import { Tile } from "../tile/Tile"

export const TileList = ({ tiles, removeItem }) => {

  const handleRemove = (name) => {
    removeItem(name);
  }

  return (
    <div id="divTileList">
      {tiles.map((tile, idx) => {
        const { name, ...description } = tile;
        return <Tile key={idx} name={name} description={description} handleRemove={handleRemove} />
      })}
    </div>
  );
};
