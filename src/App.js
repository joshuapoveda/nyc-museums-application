import { useState, useEffect} from 'react';
import './App.css';

function App() {
  //define state
  const [museum, setMuseum] = useState(null)

  //const rootUrl = 'https://api.teleport.org/api/cities/?search=san%20francisco'

  const getMuseum = async () => {
    //make fetch request and store response
    try{
    const response = await fetch(
      `https://data.cityofnewyork.us/resource/fn6f-htvy.json?name=Alexander Hamilton U.S. Custom House`
    );
    //parse JSON response into a js object
    const data = await response.json();
    return data[0].name
    } catch(e){
      console.error(e)
    }
  };
  
  useEffect(()=>{getMuseum().then(response =>{
    setMuseum(response)
  })},[])
  
  console.log(museum)

  
  

  return (
    <div className="App">
      <h1>Hello World</h1>
      <h2>{museum}</h2>
    </div>
  );
}

export default App;
