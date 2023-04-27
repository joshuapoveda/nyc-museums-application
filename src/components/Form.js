import { useState } from "react";
import Filter from "./Filter";

export default function Form(props) {
  const museums = props.data;
  const [choice, setChoice] = useState("All");

  const borroughChoice = (e) => {
    setChoice(e.target.value);
  };

  const getRandomInt = () => {
    let min = Math.ceil(0);
    let max = Math.floor(131);
    const randInt = Math.floor(Math.random() * (max - min) + min);
    setChoice(randInt);
  };


  return (
    <div>
      <div className="options">
        <div >
          <form>
            <label>BY BOROUGH</label>
            <br></br>
            <select className="button" onChange={borroughChoice}>
              <option value="All">All</option>
              <option value="New York">Manhattan</option>
              <option value="Queens">Queens</option>
              <option value="Brooklyn">Brooklyn</option>
              <option value="Bronx">Bronx</option>
              <option value="Staten Island">Staten Island</option>
            </select>
          </form>
        </div>

        <div >
          <form>
            <label>OR AT RANDOM</label>
            <br></br>
            <button className="button" type="button" onClick={getRandomInt}>
              Click Me
            </button>
          </form>
        </div>
      </div>

      {museums ? <Filter choice={choice} data={museums}></Filter> : <div></div>}
    </div>
  );
}
