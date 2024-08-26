import React from "react";
import { Tile } from "../tile/Tile"

export const TileList = ({ contacts, appointments }) => {
  return (
    <div>
      {contacts.map(function (obj, idx) {
        const { name, ...rest } = obj;
        
        return (
          <div key={idx}>
            <ul>
              <li><h4>{name}</h4></li>
              {Object.values(rest).map((value) => (
                <li>{`${value}`}</li>
              ))}
            </ul>
          </div>
        )
      })}
    </div>
  );
};
