import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantData, searchTerm}) {
  const searchedList = plantData.filter(plant => {
    return (plant.name.toLowerCase().includes(searchTerm.toLowerCase()))
  })
  return (
    <ul className="cards">{searchedList.map(plant => {
      return <PlantCard key={plant.id} plant={plant} />
    })}</ul>
  );
}

export default PlantList;
