import "./form.css";
import { useState } from "react";
import Buttons from "./Components/Buttons";
import Form from "./Components/Form";

function App() {
  const [formValue, setFormValue] = useState({
    age: "",
    gender: "Male",
    height: "",
    weight: "",
  });
  const [result, setResult] = useState(null);
  return (
    <div style={{ margin: "auto", width: "25%", marginTop: "100px" }}>
      <h1>BMI Calculator</h1>
      <h3>Made in React</h3>
      <Form formValue={formValue} setFormValue={setFormValue} />
      <Buttons formValue={formValue} setResult={setResult} />
      {result && <p>{result.toFixed(2)}</p>}
    </div>
  );
}
export default App;
