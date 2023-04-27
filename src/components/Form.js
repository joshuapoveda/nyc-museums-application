import { useState } from "react";
import Filter from "./Filter";

export default function Form(props) {
  const museums = props.data;
  const [choice, setChoice] = useState("All");
  const borroughChoice = (e) => {
    setChoice(e.target.value);
  };
  return (
    <div>
        <div className='label'>
      <form>
        <label htmlFor="borroughs">CHOOSE A BOROUGH: </label>
        <br></br>
        <select className="dropper" onChange={borroughChoice} name="borroughs" id="borroughs">
          <option value="All">All</option>
          <option value="New York">Manhattan</option>
          <option value="Queens">Queens</option>
          <option value="Brooklyn">Brooklyn</option>
          <option value="Bronx">Bronx</option>
          <option value="Staten Island">Staten Island</option>
        </select>
      </form>
      </div>

      {museums ? <Filter choice={choice} data={museums}></Filter> : <div></div>}
    </div>
  );
}
