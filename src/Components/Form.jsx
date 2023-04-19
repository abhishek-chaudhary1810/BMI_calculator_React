function InputForm({value , setValue}) {
 /* 
 -UI and Styling 
 -on change event Handler set with key value pair passed as arguments (Callback Function is used)
 spread operator is used to copy and create new state snapshot
 -onchange handler is set as key value fair.
 */
  const handleChange = (key, value) => {
    setValue((prev) => {
      const newValues = { ...prev };
      newValues[key] = value;
      return newValues;
    });
  }
  return (
    <div>
      <div className="Form_Link">
        <label>
          Age :
          <input type="text" 
          name="age"
          value={value.age} 
          placeholder="Enter Age"
          min='0'
          max='500'
          maxLength='3'
          required
          onChange={(e)=>handleChange("age", e.target.value)}
          />
        </label>
      </div>
      {/* <div className="Form_Link">
        <label>
          Select Gender :
          <input type="radio" name="gender" id="male"defaultChecked={true} />
          Male
        </label>
        <label>
          <input type="radio" name="gender" id="female"/>
          Female
        </label>
      </div> */}
      <div className="Form_Link">
        <label>
          Height(cm) :
          <input type="text" 
          name="Height"
          value={value.height} 
          placeholder="Enter height"
          min='0'
          max='500'
          maxLength='3'
          required
          onChange={(e)=>handleChange("height", e.target.value)}
          />
        </label>
      </div>
      <div className="Form_Link">
        <label>
          Weight(Kg):
          <input type="text"
           name="Weight" 
           placeholder="Enter Weight"
           min='0'
           max='250'
           value={value.weight}
           maxLength='3'
           pattern="[0-9]"
           onChange={(e)=>handleChange("weight",e.target.value)}
           required
          />
        </label>
      </div>
    </div> 
  );
}
export default InputForm;
