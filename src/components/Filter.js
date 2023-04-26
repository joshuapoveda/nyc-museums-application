import Display from "./Display";
import { useState } from "react";

export default function Filter(props) {
  const [results, setResults] = useState();

  const museums = props.data;
  const choice = props.choice;

  const choiceObject = museums.map((choicePicks) => {
    if (choicePicks.city === choice) {
      return {
        name: choicePicks.name,
        adress: choicePicks.adress1,
        city: choicePicks.city,
        url: choicePicks.url,
      };
    }
  });

  //console.log(choiceObject)

  return (
    <div>
      {museums ? <Display items={choiceObject}></Display> : <div></div>}
    </div>
  );
}
