import React, { useState } from 'react';
import './index.css';

export const useInputParamsSettings = (props) => {
  const [inputParams, setInputParams] = useState({
    userId: "",
    firstName: "",
    lastName: ""
  });
  const setInputText = propertyWithValue => {
    setInputParams({ ...inputParams, ...propertyWithValue });
  };
  return {
    inputParamsSettings: {
      setInputText,
      inputParams
    }
  }
}

const InputComponent = (props) => {

  const { inputParamsSettings: { setInputText, inputParams }} = useInputParamsSettings(props);

  const setFormData = e => {
    setInputText({ [e.target.name]: e.target.value });
  }

  const [submitted, setSubmitted] = useState(false);

  const handleClearClick = () => {
    setSubmitted(false);
    setInputText({ userId: "", firstName: "", lastName: ""})
    console.log(inputParams)
  }

  return (
    <div className="main-container">
      <div>
        <div>
          <label>User Id</label>
          <input name="userId" type="text" onChange={setFormData} />
        </div>
        <div>
          <label>First Name</label>
          <input name="firstName" type="text" onChange={setFormData} />
        </div>
        <div>
          <label>Last Name</label>
          <input name="lastName" type="text" onChange={setFormData} />
        </div>
      </div>

      <button onClick={e => setSubmitted(true)}>Submit</button>
      <button onClick={handleClearClick}>Clear</button>

      {submitted && <div className="formOutput">
        <div>
          <label>UserId</label>
          <span className="input">{inputParams.userId}</span>
        </div>
        <div>
          <label>First Name</label>
          <span className="input">{inputParams.firstName}</span>
        </div>
        <div>
          <label>Last Name</label>
          <span className="input">{inputParams.lastName}</span>
        </div>
      </div>}
    </div>
  )
}

export default InputComponent;
