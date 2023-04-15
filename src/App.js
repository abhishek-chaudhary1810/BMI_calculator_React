import "./form.css";
import { useState } from "react";
function Calculate(){

}
function CalculateButton() {
  return (
    <button className="Button" onClick={() => Calculate()}>
      Calculate
    </button>
  );
}
function ClearButton() {
  return <button className="Button">Clear</button>;

}
function InputForm() {
  return (
    <div>
      <div className="Form_Link">
        <label>
          Age :
          <input type="number" name="age" placeholder="Enter Age here" />
        </label>
      </div>
      <div className="Form_Link">
        <label>
          Gender :
          <input
            type="radio"
            name="gender"
            value="male"
            defaultChecked={true}
          />
          Male
        </label>
        <label>
          <input type="radio" name="gender" value="female" />
          Female
        </label>
      </div>
      <div className="Form_Link">
        <label>
          Height :
          <input type="number" name="Height" placeholder="Enter height" />
        </label>
      </div>
      <div className="Form_Link">
        <label>
          Weight:
          <input type="number" name="Weight" placeholder="Enter Weight" />
        </label>
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
  const [formvalue,setFormValue]=useState();
  return (
    <>
      <CalculateBmi />
    </>
  );
}
export default App;