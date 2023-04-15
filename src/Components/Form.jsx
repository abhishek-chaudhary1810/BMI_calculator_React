function InputForm() {
  return (
    <div>
      <div className="Form_Link">
        <label>
          Age :
          <input 
          name="age"
          placeholder="Enter Age here"
          type="text"
          min='0'
          max='120'
          maxLength='3'
          />
        </label>
      </div>
      <div className="Form_Link">
        <label>
          Select Gender :
          <input type="radio" name="gender" defaultChecked={true} />
          Male
        </label>
        <label>
          <input type="radio" name="gender" />
          Female
        </label>
      </div>
      <div className="Form_Link">
        <label>
          Height(cm) :
          <input type="text" 
          name="Height" 
          placeholder="Enter height"
          min='0'
          max='120'
          maxLength='3'
          />
        </label>
      </div>
      <div className="Form_Link">
        <label>
          Weight(in Kg):
          <input type="text"
           name="Weight" 
           placeholder="Enter Weight"
           min='0'
           max='120'
           maxLength='3'
          />
        </label>
      </div>
    </div>
  );
}

export default InputForm;
