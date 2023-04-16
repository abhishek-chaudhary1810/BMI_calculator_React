import "./form.css";
import { useState } from "react";
import InputForm from "./Components/Form";
import Button from "./Components/Button";
import ResultBox from "./Components/Result";


function CalculateBmi() {
  return (
    <div>    
      <h1>BMI Calculator</h1>
      <h3>Made in React</h3>
      <InputForm />
      <Button />
      <ResultBox />
      </div>
  );
}

function App() {
  const [value,setValue]=useState({
    age : '',
    Height : '',
    Weight : ''
  })
  console.log(value);
  return (
    <div  style= {{
      display: "flex",
      flexDirection:"column",
      alignItems: "center",
      justifyContent: "center",
      }}>
      <CalculateBmi />
    </div>
  );
}
export default App;
