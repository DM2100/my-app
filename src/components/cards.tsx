import React, { useEffect, useState } from "react";
import {Types} from "./filters";

const Cards = ({ name, price, image }: Types) => {
  return (
    <div className="card-container">
      <div className="card">
        <img
          className="card-img-top"
          src={"./img/" + image + ".png"}
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{price}$</p>
        </div>
      </div>
    </div>
    
  );
};
export default Cards;
