import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantData, searchTerm, toggleStock, deletePlant}) {
  const searchedList = plantData.filter(plant => {
    return (plant.name.toLowerCase().includes(searchTerm.toLowerCase()))
  })
  return (
    <ul className="cards">{searchedList.map(plant => {
      return <PlantCard deletePlant={deletePlant} key={plant.id} plant={plant} toggleStock={toggleStock} />
    })}</ul>
  );
}

export default PlantList;
