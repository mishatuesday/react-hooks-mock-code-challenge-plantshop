import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
const dataUrl = 'http://localhost:6001/plants/'

function PlantPage() {
  const [plantData, setPlantData] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetch(dataUrl)
    .then(r => r.json())
    .then(data => setPlantData(data))
  }, [])

  function addNewPlant(plant) {
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

  function toggleStock(plant) {
    const newPlantData = plantData.map(thisPlant => {
      if (thisPlant.id === plant.id) {
        return {...plant, outOfStock: !thisPlant.outOfStock}
      } else {
        return thisPlant
      }
    })
    setPlantData(newPlantData)
  }

  function deletePlant(plant) {
    fetch(`${dataUrl}${plant.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
    const newList = plantData.filter(thisPlant => thisPlant.id !== plant.id)
    setPlantData(newList)
  }

  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant} />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <PlantList deletePlant={deletePlant} toggleStock={toggleStock} searchTerm={searchTerm} plantData={plantData} />
    </main>
  );
}

export default PlantPage;
