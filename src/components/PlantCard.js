import React from "react";

function PlantCard({plant, toggleStock, deletePlant}) {
  return (
    <li className="card">
      <img src={plant.image} alt={"plant name"} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {plant.outOfStock ? (
        <button onClick={() => toggleStock(plant)}>Out Of Stock</button>
      ) : (
        <button onClick={() => toggleStock(plant)} className="primary">In Stock</button>
      )}
      <button onClick={() => deletePlant(plant)}>X</button>
    </li>
  );
}

export default PlantCard;
