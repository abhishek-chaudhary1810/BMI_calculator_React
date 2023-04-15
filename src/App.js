import "./form.css";
import { useState } from "react";
import CalculateButton from "./Components/Button";
import InputForm from "./Components/Form";
import Button from "./Components/Button";


function CalculateBmi() {
  return (
    <div>    
      <h1>BMI Calculator</h1>
      <h3>Made in React</h3>
      <InputForm />
      <Button />
      </div>
  );
}

function App() {
  return (
    <div  style= {{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      }}>
      <CalculateBmi />
      <p>Your BMI is : </p>
    </div>
  );
}
export default App;
