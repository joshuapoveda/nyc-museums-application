import Display from "./Display";

export default function Filter(props) {
  const museums = props.data;
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
        key: index,
      });
    } else if (choice === "All") {
      finalArr.push({
        name: choicePicks.name,
        adress: choicePicks.adress,
        city: choicePicks.city,
        url: choicePicks.url,
        tel: choicePicks.tel,
        key: index,
      });
    } else if (index === choice) {
      finalArr.push({
        name: choicePicks.name,
        adress: choicePicks.adress,
        city: choicePicks.city,
        url: choicePicks.url,
        tel: choicePicks.tel,
        key: index,
      });
    }
  });

  return (
    <div>{museums ? <Display itemsArr={finalArr}></Display> : <div></div>}</div>
  );
}
