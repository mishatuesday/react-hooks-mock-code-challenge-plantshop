import React from "react";

function PlantCard({plant}) {
  // let plantOutOfStock = false

  // function toggleStock() {
  //   if (plantOutOfStock) {
  //     plantOutOfStock = false
  //   } else {
  //     plantOutOfStock = true
  //   }
  // }

  return (
    <li className="card">
      <img src={plant.image} alt={"plant name"} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {false ? (
        <button>Out Of Stock</button>
      ) : (
        <button className="primary">In Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
