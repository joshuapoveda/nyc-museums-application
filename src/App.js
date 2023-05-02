import "./App.css";
import Museum_Hat from "./img/Museum_Hat.jpg";
import Form from "./components/Form";

import {
  interaction,
  layer,
  custom,
  control,
  Interactions,
  Overlays,
  Controls,
  Map,
  Layers,
  Overlay,
  Util,
  Tile,
  Vector,
} from "react-openlayers";

import { useState, useEffect } from "react";

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
      <div className="map-container">
        <Map
          className="map-item"
          view={{
            projection: "EPSG:4326",
            center: [-73.92079629906307, 40.644340681393366],
            zoom: 17.5,
          }}
          style={{ height: "400px", width: "400px" }}
        >
          <Controls>
            <control.FullScreen />
            <control.ZoomSlider />
            <control.ZoomToExtent />
            <control.Zoom />
          </Controls>
          <Interactions
            mouseWheelZoom={false}
            dragAndDrop={false}
            dragPan={false}
            KeyboardPan={true}
          ></Interactions>
          <Layers>
            <layer.Tile></layer.Tile>
          </Layers>
        </Map>
      </div>
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
