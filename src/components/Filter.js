import Display from "./Display";

export default function Filter(props) {
  const museums = props.data;
  const choice = props.choice;
  const finalArr = [];

  museums.map((choicePicks) => {
    if (choicePicks.city === choice) {
      finalArr.push({
        name: choicePicks.name,
        adress: choicePicks.adress,
        city: choicePicks.city,
        url: choicePicks.url,
        tel: choicePicks.tel,
      });
    } else if (choice === "All") {
      finalArr.push({
        name: choicePicks.name,
        adress: choicePicks.adress,
        city: choicePicks.city,
        url: choicePicks.url,
        tel: choicePicks.tel,
      });
    }
  });

  return (
    <div>{museums ? <Display items={finalArr}></Display> : <div></div>}</div>
  );
}
