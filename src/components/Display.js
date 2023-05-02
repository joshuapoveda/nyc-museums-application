import { useState, useEffect } from "react";
import MapImg from "./MapImg";

export default function Display(props) {
  const [coordsProp, setCoordsProp] = useState([
    -73.99392890421056, 40.738015384101416,
  ]);
  const [cardsProp, setCardsProp] = useState([]);

  const data = props.itemsArr;

  const coordsFunc = (e) => {
    console.log(e.currentTarget.children[4].innerText);
    setCoordsProp([
      parseFloat(e.currentTarget.children[4].innerText),
      parseFloat(e.currentTarget.children[5].innerText),
    ]);
  };

  const cards = data.map((museums, index) => {
    return (
      <div className="cards" key={index} onClick={coordsFunc}>
        <a href={museums.url} target="_blank">
          <p>{museums.name}</p>
        </a>
        <p>{museums.adress}</p>
        <p>{museums.city}</p>
        <p>{museums.tel}</p>

        <button name="map-btn">
          {museums.coordsLong}<br></br>{museums.coordsLat}
        </button>
        <p className="none">{museums.coordsLat}</p>
        <p className="none">{museums.coordsLong}</p>
      </div>
    );
  });

  useEffect(() => {
    setCardsProp(cards);
  }, []);

  return (
    <div>
      {/* <MapImg coords={coordsProp} cards={cardsProp}></MapImg> */}
      <div className="card-container">{cards}</div>
    </div>
  );
}
