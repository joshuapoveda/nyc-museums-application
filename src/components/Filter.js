export default function Filter(props) {
  console.log(props.data[0].name)

  


  return (
    <div>
      <form>
        <label htmlFor="borroughs">Choose a borrough: </label>
        <select name="borroughs" id="borroughs">
          <option>Manhattan</option>
          <option>Brooklyn</option>
          <option>Queens</option>
          <option>Bronx</option>
          <option>Staten Island</option>
        </select>
        <input type="submit" value="Submit" />
      </form>
      <h1></h1>
    </div>
  );
}
