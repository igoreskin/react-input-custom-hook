import React, { useState } from 'react';
import './index.css';

const InputComponent = () => {
  return (
    <div>
      <div>
        <label >User Id</label>
        <input name="userId" type="text" />
      </div>
      <div>
        <label >First Name</label>
        <input name="firstName" type="text" />
      </div>
      <div>
        <label >Last Name</label>
        <input name="lastName" type="text" />
      </div>
    </div>
  )
}

export default InputComponent;
