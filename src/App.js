import "./form.css";
import { useState } from "react";
import InputForm from "./Components/Form";
import Button from "./Components/Button";
import ResultBox from "./Components/Result";
//Single Responsibility principle for building components 
function CalculateBmi(){
  //DRY(Dont Repeat Yourself priciple for state )
  //state is a component Memory
  //props are just Function Arguments 
  const [value, setValue]= useState({
      age: '',
      height: '',
      weight :''
  });
  const [result,setResult]=useState({
    calculatedbmi : ''
  });
  return (
    <div>    
      <h1>BMI Calculator</h1>
      <h3>Made in React</h3>
      <InputForm value={value} setValue={setValue}/>
      <Button value={value}
      result={result} setResult={setResult} setValue={setValue}/>
      <ResultBox value={result} setResult={setResult}/>
      </div>
  );
}
function App() { 
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
