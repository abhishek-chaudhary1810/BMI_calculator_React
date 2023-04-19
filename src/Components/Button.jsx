function Button({ result, value, setResult, setValue }) {
  const calculateResult = () => {
    if (value === null) {
      return;
    } else {
      const heightInMeters = value.height / 100;
      const weight = value.weight;
      const bmi = weight / (heightInMeters * heightInMeters);
      setResult(result.calculatedbmi = bmi);
      setValue({ age: "", height: "", weight: "" });
      console.log(result);
    }
  };
  const resetForm = () => {
    console.log(value);
    //set value to initial state
    setValue({ age: "", height: "", weight: "" });
    console.log(value);
    setResult("null");
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
