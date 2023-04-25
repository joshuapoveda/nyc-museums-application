import { useState, useEffect} from 'react';
import './App.css';

function App() {
  //define state
  const [city, setCity] = useState(null)

  //const rootUrl = 'https://api.teleport.org/api/cities/?search=san%20francisco'

  const getCity = async () => {
    //make fetch request and store response
    try{
    const response = await fetch(
      `https://data.cityofnewyork.us/resource/fn6f-htvy.json?name=Alexander Hamilton U.S. Custom House`
    );
    //parse JSON response into a js object
    const data = await response.json();
    setCity(data);
    } catch(e){
      console.error(e)
    }
  };
  
  useEffect(()=>{getCity()},[])
  
  console.log(city)
  console.log(typeof city)
  
  

  return (
    <div className="App">
      <h1>Hello World</h1>
      <ul>

      </ul>
    </div>
  );
}

export default App;
