import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantData}) {
  return (
    <ul className="cards">{plantData.map(plant => {
      return <PlantCard key={plant.id} plant={plant} />
    })}</ul>
  );
}

export default PlantList;
