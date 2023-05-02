import "./App.css";
import Museum_Hat from "./img/Museum_Hat.jpg";
import Form from "./components/Form";
import { useState, useEffect } from "react";
// import {
//   interaction,
//   layer,
//   custom,
//   control,
//   Interactions,
//   Overlays,
//   Controls,
//   Map,
//   Layers,npm
//   Overlay,
//   Util,
//   Tile,
//   Vector,
// } from "react-openlayers";

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
        coords: museums.the_geom.coordinates,
      }));
      setMuseum(museumItems);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getMuseums();
  }, []);

  //longitude, latitude
  //const place = [-73.92079629906307, 40.644340681393366];
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
