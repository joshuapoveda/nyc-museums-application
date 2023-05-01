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

export default function MapImg() {

  const place = [-73.99392890421056, 40.738015384101416];

  return (
    <>
      <div className="map-container">
        <Map view={{ projection: "EPSG:4326", center: place, zoom: 18 }}>
          <Layers>
            <layer.Tile></layer.Tile>
          </Layers>
        </Map>
      </div>
    </>
  );
}
