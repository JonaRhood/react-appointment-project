// Renders Tiles
import React from "react";

export const Tile = ({ name, description, handleRemove, index }) => {
  return (
    <div className="tile-container" key={index}>
      <div className="tile-nameX"><p className="tile-title">{name}</p>
      <button type="submit" id="xButton" onClick={() => handleRemove(index)}>X</button></div>
      {Object.values(description).map((value, index) => (
        <p key={index} className="tile">{value}</p>
      ))}
    </div>
  );
};
