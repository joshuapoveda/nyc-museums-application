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

export default function MapImg(props) {
  const place = props.coords;
  console.log(props.coords);
  return (
    <div>
      <div className="map-container">
        <Map view={{ projection: "EPSG:4326", center: place, zoom: 18 }}>
          <Layers>
            <layer.Tile></layer.Tile>
          </Layers>
        </Map>
      </div>
      <div className="card-container">{props.cards}</div>;
    </div>
  );
}
