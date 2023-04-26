import "./App.css";
import Display from "./components/Display";
import Form from "./components/Form";
import Filter from "./components/Filter";

import { useState, useEffect } from "react";

export default function App() {
  const [museums, setMuseum] = useState();

  const getMuseums = async () => {
    try {
      const response = await fetch(
        `https://data.cityofnewyork.us/resource/fn6f-htvy.json`
      );
      const data = await response.json();
      //console.log(data)
      const museumItems = data.map((museums) => ({
        name: museums.name,
        adress: museums.adress1,
        city: museums.city,
        url: museums.url,
      }));
      setMuseum(museumItems);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getMuseums();
  }, []);
  //{museums ? <Filter data={museums}></Filter> : <div></div>}
  //{museums ? <Display items={museums}></Display> : <div></div>}
  return (
    <div className="App">
      <h1>MUSEUM HAT</h1>
      {museums ? <Form data={museums}></Form> : <div></div>}
      {museums ? <Filter data={museums}></Filter> : <div></div>}
    </div>
  );
}
