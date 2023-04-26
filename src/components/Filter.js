import Display from "./Display";

export default function Filter(props) {

  const museums = props.data;
  const choice = props.choice;
  const finalArr = []
  
  const choiceObject = museums.map((choicePicks) => {
    if (choicePicks.city === choice) {
      finalArr.push({
        name: choicePicks.name,
        adress: choicePicks.adress1,
        city: choicePicks.city,
        url: choicePicks.url
      })
    }
  });

  return (
    <div>
      {museums ? <Display items={finalArr}></Display> : <div></div>}
    </div>
  );
}
