import { useState, useEffect } from "react";
import MapImg from "./MapImg";

export default function Display(props) {
  const [coordsProp, setCoordsProp] = useState([
    "-74.01375579519738",
    "40.703816216918035",
  ]);
  const [cardsProp, setCardsProp] = useState("");

  const data = props.itemsArr;

  const testFunc = (e) => {
    setCoordsProp([
      e.target.children[4].innerText,
      e.target.children[5].innerText,
    ]);
  };

  const cards = data.map((museums, index) => {
    return (
      <div className="cards" key={index} onClick={testFunc}>
        <a href={museums.url} target="_blank">
          <p>{museums.name}</p>
        </a>
        <p>{museums.adress}</p>
        <p>{museums.city}</p>
        <p>{museums.tel}</p>
        <p>{museums.coordsLong}</p>
        <p>{museums.coordsLat}</p>
      </div>
    );
  });

  useEffect(() => {
    setCardsProp(cards);
  }, []);

  return (
    <div>
      <MapImg coords={coordsProp} cards={cardsProp}></MapImg>
    </div>
  );
}
