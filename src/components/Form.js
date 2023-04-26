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
      <form>
        <label htmlFor="borroughs">Choose a borrough: </label>
        <br></br>
        <select onChange={borroughChoice} name="borroughs" id="borroughs">
          <option value="All">All</option>
          <option value="New York">Manhattan</option>
          <option value="Queens">Queens</option>
          <option value="Brooklyn">Brooklyn</option>
          <option value="Bronx">Bronx</option>
          <option value="Staten Island">Staten Island</option>
        </select>
      </form>

      {museums ? <Filter choice={choice} data={museums}></Filter> : <div></div>}
    </div>
  );
}
