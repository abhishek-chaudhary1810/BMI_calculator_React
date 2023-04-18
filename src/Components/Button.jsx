function Button({ value, setResult, setValue }) {
  const calculateResult = () => {
    console.log(value);
    if (value === null) {
      return;
    } else {
      const heightInMeters = value.heightInMeters / 100;
      const weight = value.weight;
      const bmi = weight / (heightInMeters * heightInMeters);
      setResult(bmi);
    }
  };
  const resetForm = () => {
    console.log(value);
    setValue(
     { age:"",
      height: "",
      weight: "",
     } );
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
