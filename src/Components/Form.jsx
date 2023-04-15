function Form({ formValue, setFormValue }) {
  const handleChange = (key, value) => {
    setFormValue((prev) => {
      const newValues = { ...prev };
      newValues[key] = value;
      return newValues;
    });
  };

  return (
    <div>
      <div className="Form_Link">
        <label>
          Age :
          <input
            type="number"
            name="age"
            placeholder="Enter Age here"
            value={formValue.age}
            onChange={(e) => handleChange("age", e.target.value)}
            min="1"
            max="120"
          />
        </label>
      </div>
      <div className="Form_Link">
        <label>
          Gender :
          <input
            type="radio"
            name="gender"
            defaultChecked={formValue.gender === "male"}
            onChange={(e) => handleChange("gender", "male")}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            defaultChecked={formValue.gender === "female"}
            onChange={(e) => handleChange("gender", "female")}
          />
          Female
        </label>
      </div>
      <div className="Form_Link">
        <label>
          Height(CM) :
          <input
            type="number"
            name="Height"
            placeholder="Enter height"
            value={formValue.height}
            onChange={(e) => handleChange("height", e.target.value)}
          />
        </label>
      </div>
      <div className="Form_Link">
        <label>
          Weight(KG):
          <input
            type="number"
            name="Weight"
            placeholder="Enter Weight"
            value={formValue.weight}
            onChange={(e) => handleChange("weight", e.target.value)}
          />
        </label>
      </div>
    </div>
  );
}
export default Form;
