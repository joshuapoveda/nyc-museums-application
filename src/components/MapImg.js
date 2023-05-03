

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
      
    </>
  );
}
