export default function Form (){
  return (
    <div>
    <form>
      <label htmlFor="borroughs">Choose a borrough: </label>
      <br></br>
      <select  name="borroughs" id="borroughs">
        <option value= 'All'>All</option>
        <option value= 'New York'>Manhattan</option>
        <option value= 'Queens'>Queens</option>
        <option value= 'Brooklyn'>Brooklyn</option>
        <option value= 'Bronx'>Bronx</option>
        <option value= 'Staten Island'>Staten Island</option>
      </select>
    </form>
  </div>
  )
}
