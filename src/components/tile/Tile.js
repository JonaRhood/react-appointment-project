import React from "react";

export const Tile = ({ name, rest }) => {
  return (
    <div className="tile-container">
      <p className="tile-title">{name}</p>
      {Object.values(rest).map((value, index) => (
        <p className="tile" key={index}>{value}</p>
      ))}
    </div>
  );
};
