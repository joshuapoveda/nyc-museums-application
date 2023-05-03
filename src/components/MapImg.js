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

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

export default function MapImg(props) {
  let place = props.coords;

  let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
  });
  L.Marker.prototype.options.icon = DefaultIcon;

  return (
    <>
      {/* <div className="map-container"> */}
      {/* <Map
          className="map-item"
          view={{ projection: "EPSG:4326", center: place, zoom: 17.5 }}
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
        </Map> */}

      <div className="sticky">
        <MapContainer center={place} zoom={12.4} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={place} autoPan={true} autoPanOnFocus={true}>
            <Popup
              keepInView={true}
              autoClose={false}
              closeOnClick={false}
              autoPan={true}
              closeOnEscapeKey={false}
            >
              <h2>Follow Me!</h2>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
      {/* </div> */}
    </>
  );
}
