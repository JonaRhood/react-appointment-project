import React from "react";
import { Tile } from "../tile/Tile"

export const TileList = ({ contacts }) => {

  

  return (
    <div>
      {contacts.reverse().map(function (obj) {
        return (
          <ul>
            <li>Name: {obj.name}</li>
            <li>Phone: {obj.phone}</li>
            <li>Email: {obj.email}</li>
          </ul>
        )
      })}
    </div>
  );
};
