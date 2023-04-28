import "./App.css";
import Form from "./components/Form";
import { useState, useEffect } from "react";
import Museum_Hat from "./img/Museum_Hat.jpg";

export default function App() {
  const [museums, setMuseum] = useState();

  const getMuseums = async () => {
    try {
      const response = await fetch(
        `https://data.cityofnewyork.us/resource/fn6f-htvy.json`
      );
      const data = await response.json();
      const museumItems = data.map((museums) => ({
        name: museums.name,
        adress: museums.adress1,
        city: museums.city,
        url: museums.url,
        tel: museums.tel,
      }));
      setMuseum(museumItems);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getMuseums();
  }, []);

  return (
    <div className="App">
      <div className="parallax">
        <img src={Museum_Hat} alt="Museum Hat Mascot" />
      </div>

      <div className="main-container">
        <p className="heading">MUSEUM HAT</p>
        <p className="blurb">
          A quick and painless way to choose a museum in one of the culture
          captials of the world: N.Y.C.
        </p>
      </div>

      {museums ? <Form data={museums}></Form> : <div></div>}
      
    </div>
  );
}
