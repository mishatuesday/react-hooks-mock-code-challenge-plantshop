import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
const dataUrl = 'http://localhost:6001/plants/'

function PlantPage() {
  const [plantData, setPlantData] = useState([])

  useEffect(() => {
    fetch(dataUrl)
    .then(r => r.json())
    .then(data => setPlantData(data))
  }, [])

  function addNewPlant(plant) {
    console.log("adding new plant", plant)
    // POST to db.json
    fetch(dataUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(plant)
    })
    .then(r => r.json())
    .then(data => setPlantData([
      ...plantData,
      data
    ]))
    
  }

  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant} />
      <Search />
      <PlantList plantData={plantData} />
    </main>
  );
}

export default PlantPage;
