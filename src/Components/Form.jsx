import { useState } from "react";
function InputForm() {
  return (
    <div>
      <div className="Form_Link">
        <label>
          Age :
          <input 
          type="Text"
          name="age"
          placeholder="Enter Age here"
          min={1}
          max={120}
          maxLength={3}
          pattern="[0-9]"
          required="" 
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
          placeholder="Enter height"
          min='0'
          max='500'
          maxLength='3'
          pattern="[0-9]"
          required
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
           maxLength='3'
           pattern="[0-9]"
           required
          />
        </label>
      </div>
    </div>
  );
}

export default InputForm;
