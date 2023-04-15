import "./form.css";
function CalculateButton() {
  return <button className="Button">Calculate</button>;
}
function ClearButton() {
  return <button className="Button">Clear</button>;
}
function InputForm() {
  return (
    <div>
      <div className="Form_Link">
      <label>Age : </label>
      <input type="number" placeholder="Enter Age here"/>
    </div>
      <div className="Form_Link">
        <label>Gender : </label>
      <input type="radio" name="gender" value="male"/>Male
      <input type="radio" name="gender" value="female"/>Female
    </div>
      <div className="Form_Link">
      <label>Height :</label>
      <input type="number" placeholder="Enter height"/>
      </div>
     <div className="Form_Link">
      <label> Weight:</label>
      <input type="number" placeholder="Enter Weight"/>
    </div>
    </div>
  );
}
function CalculateBmi() {
  return (
    <>
      <h1>BMI Calculator</h1>
      <h3>Made in React</h3>
      <InputForm />
      <CalculateButton />
      <ClearButton />
    </>
  );
}

function App() {
  return (
    <>
      <CalculateBmi />
    </>
  );
}
export default App;
