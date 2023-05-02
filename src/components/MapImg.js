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
} from "react-openlayers"

export default function MapImg(props) {
  const place = props.coords;

  return (
    <>
      <div className="map-container">
        <Map
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
        </Map>
      </div>
    </>
  );
}
