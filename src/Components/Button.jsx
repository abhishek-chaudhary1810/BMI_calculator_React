function Button({value, setResult}) {  
const result =()=>{
const heightInMeters= value.heightInMeters/100;
const weight= value.weight;
const bmi= weight / (heightInMeters * heightInMeters); 
setResult(bmi);
 }
  return (
        <div>
      <button className="Button" onClick={result}  >
        Calculate
      </button>
      <button className="Button" onClick={setResult(null)}>Clear</button>
      </div>
    );
  }
  export default Button;

 