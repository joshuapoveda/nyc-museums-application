import Display from './Display';
import { useState } from 'react';

export default function Filter(props) {
  const [filter, setFilter] = useState('All')
  const museums = props.data
  
  const borroughChoice = (e)=>{
    setFilter(e.target.value)
  }
  
  for(let i = 0; i < museums.length; i++){
  if(museums[i].city === filter){
    console.log('YES')
  } else{
    console.log('NO')
    return rend()
  }
}

function rend(){
  return(
    museums ? <Display items={museums}></Display> : <div></div>
  )
}


  //console.log(museums[0].city)
  //console.log(filter)

  return (
    <div>
      <form>
        <label htmlFor="borroughs">Choose a borrough: </label>
        <br></br>
        <select onChange={borroughChoice} name="borroughs" id="borroughs">
          <option value= 'All'>All</option>
          <option value= 'New York'>Manhattan</option>
          <option value= 'Queens'>Queens</option>
          <option value= 'Brooklyn'>Brooklyn</option>
          <option value= 'Bronx'>Bronx</option>
          <option value= 'Staten Island'>Staten Island</option>
        </select>
      </form>
    </div>
  );
}
