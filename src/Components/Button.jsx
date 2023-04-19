function Button({ value, setResult, setValue }) {
 /*Event handler set on every button
 Calculate Button : Calculate BMI -> Update data in result prop -> set all input fields to initial
 setResult hook will update the calculated bmi in prop result
 Clear Button : reset the state to initial, Mutated input fields
 */ 

 const calculateResult = () => {
    if (value === null) {
      return;
    } else {
      const heightInMeters = value.height / 100;
      const weight = value.weight;
      const bmi = weight / (heightInMeters * heightInMeters);
      setResult(bmi);
      setValue({ age: "", height: "", weight: "" });
    }
  };
  const resetForm = () => {
    // console.log(value);
    //set value to initial state
    setValue({ age: "", height: "", weight: "" });
    //console.log(value);
    setResult(0);
  };

  return (
    <div>
      <button className="Button" onClick={calculateResult}>
        Calculate
      </button>
      <button className="Button" onClick={resetForm}>
        Clear
      </button>
    </div>
  );
}
export default Button;
