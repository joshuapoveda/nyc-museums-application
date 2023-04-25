
import { useState, useEffect } from "react";
import "./App.css";
import Filter from "./components/Filter";

function App() {
  //define state
  const [museums, setMuseums] = useState(null);
  //define async function
  const getMuseum = async () => {
    //make fetch request and store response (try/catch to set error handling)
    try {
      const response = await fetch(
        `https://data.cityofnewyork.us/resource/fn6f-htvy.json`
      );
      //parse JSON response into a js object and return data
      const data = await response.json();
      return data;
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getMuseum().then((dataResponse) => {
      //console.log(dataResponse);
      const museumItems = dataResponse.map((museum) => (
        <div key={museum.the_geom.coordinates[0]}>
         <a href={museum.url}><p>{museum.name}</p></a>
          <p>{museum.adress1}</p>
          <p>{museum.city}</p>
        </div>
        
      ));
      setMuseums(museumItems);
      //console.log(museumItems);
    });
  }, []);

 
  return (
    <div className="App">
      <h1>Museums</h1>
      <Filter museums = {museums}></Filter>
    </div>
  );
}

export default App;
