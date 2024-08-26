import React from "react";

export const Tile = ({ key, name, description }) => {
  return (
    <div className="tile-container">
      <p className="tile-title">{name}</p>
      {Object.values(description).map((value, index) => (
        <p key={key} className="tile">{value}</p>
      ))}
    </div>
  );
};
