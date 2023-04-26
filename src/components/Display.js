export default function Display(props){
    const data = props.items
    const items = data.map((museums,index) => (
       <div className = 'cards' key={index}>
        <a href={museums.url}><p>{museums.name}</p></a>
        <p>{museums.adress}</p>
        <p>{museums.city}</p>
        </div>
      ))

  return (
    <div>
       {items}
    </div>
  )
}

