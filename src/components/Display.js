
export default function Display(props) {
  const data = props.itemsArr;
 
  const cards = data.map((museums, index) => {
    return (
      <div className="cards" key={index}>
        <a href={museums.url} target="_blank">
          <p>{museums.name}</p>
        </a>
        <p>{museums.adress}</p>
        <p>{museums.city}</p>
        <p>{museums.tel}</p>
        <p>{museums.coordsLong}</p>
        <p>{museums.coordsLat}</p>
        <button>Click</button>
      </div>
    );
  });

  return <div className="card-container">{cards}</div>;
}
