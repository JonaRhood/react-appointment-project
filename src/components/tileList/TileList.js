// Renders a Tile List 
import React from "react";
import { Tile } from "../tile/Tile"

export const TileList = ({ tiles, removeItem }) => {

  // Removes an item from the list, prop passed from ContactsPage.js and AppointmentsPage.js.
  const handleRemove = (index) => {
    removeItem(index);
  }

  return (
    <div id="divTileList">
      {tiles.map((tile, idx) => {
        const { name, ...description } = tile;
        return <Tile key={idx} name={name} description={description} handleRemove={handleRemove} index={idx}/>
      })}
    </div>
  );
};
