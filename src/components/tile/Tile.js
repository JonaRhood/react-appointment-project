import React from "react";

export const Tile = ({ name, description, handleRemove }) => {
  return (
    <div className="tile-container" >
      <div className="tile-nameX"><p className="tile-title">{name}</p>
      <button type="submit" id="xButton" onClick={() => handleRemove(name)}>X</button></div>
      {Object.values(description).map((value, index) => (
        <p key={index} className="tile">{value}</p>
      ))}
    </div>
  );
};
