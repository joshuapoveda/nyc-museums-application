import Display from "./Display";

export default function Filter(props) {
  const museums = props.data;
  console.log(museums);
  const choice = props.choice;
  const finalArr = [];

  museums.map((choicePicks, index) => {
    if (choicePicks.city === choice) {
      finalArr.push({
        name: choicePicks.name,
        adress: choicePicks.adress,
        city: choicePicks.city,
        url: choicePicks.url,
        tel: choicePicks.tel,
        coordsLong: choicePicks.coords[0],
        coordsLat: choicePicks.coords[1],
        key: index,
      });
    } else if (choice === "All") {
      finalArr.push({
        name: choicePicks.name,
        adress: choicePicks.adress,
        city: choicePicks.city,
        url: choicePicks.url,
        tel: choicePicks.tel,
        coordsLong: choicePicks.coords[0],
        coordsLat: choicePicks.coords[1],
        key: index,
      });
    } else if (index === choice) {
      finalArr.push({
        name: choicePicks.name,
        adress: choicePicks.adress,
        city: choicePicks.city,
        url: choicePicks.url,
        tel: choicePicks.tel,
        coordsLong: choicePicks.coords[0],
        coordsLat: choicePicks.coords[1],
        key: index,
      });
    }
  });

  return (
    <div>{museums ? <Display itemsArr={finalArr}></Display> : <div></div>}</div>
  );
}
