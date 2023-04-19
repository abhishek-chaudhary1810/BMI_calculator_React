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

  //initialize result prop as 0 with useState Hook
  const [result,setResult]=useState(0);
  //console.log(result);
  return (
    <div>    
      <h1>BMI Calculator</h1>
      <h3>Made in React</h3>
      <InputForm value={value} setValue={setValue}/>
      <Button value={value}  setResult={setResult} setValue={setValue}/>
      <ResultBox result={result}/>
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
