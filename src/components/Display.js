export default function Display(props) {
  const data = props.items;

  const items = data.map((museums, index) => {
    if (museums) {
      return (
        <div className="cards" key={index}>
          <p>{museums.name}</p>
          <p>{museums.adress}</p>
          <p>{museums.city}</p>
        </div>
      );
    }
  });

  return <div>{items}</div>;
}
