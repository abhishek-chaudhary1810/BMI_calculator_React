function Buttons({ formValue, setResult }) {
  const calculate = () => {
    const heightInMeter = formValue.height / 100;
    const bmi = formValue.weight / (heightInMeter * heightInMeter);
    setResult(bmi);
  };
  return (
    <>
      <button className="Button" onClick={() => calculate()}>
        Calculate
      </button>
      <button className="Button" onClick={() => setResult(null)}>
        Clear
      </button>
    </>
  );
}
export default Buttons;
