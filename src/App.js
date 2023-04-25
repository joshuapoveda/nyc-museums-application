import { useState, useEffect} from 'react';
import './App.css';

function App() {
  //define state
  const [museums, setMuseums] = useState(null)

  //const rootUrl = 'https://api.teleport.org/api/cities/?search=san%20francisco'

  const getMuseum = async () => {
    //make fetch request and store response
    try{
    const response = await fetch(
      `https://data.cityofnewyork.us/resource/fn6f-htvy.json`
    );
    //parse JSON response into a js object
    const data = await response.json();
    return data
    } catch(e){
      console.error(e)
    }
  };
  
  useEffect(()=>{getMuseum().then(re =>{
    const museumItems = re.map(museum => 
      <li
      key = {museum.name}
      >
        {museum.name}
  
      </li>
      )
      setMuseums(museumItems)
  })},[])
  
 

    console.log(museums)
  
  

  return (
    <div className="App">
      <h1>Hello World</h1>
    <ul>
      {museums}
    </ul>
    </div>
  );
}

export default App;
