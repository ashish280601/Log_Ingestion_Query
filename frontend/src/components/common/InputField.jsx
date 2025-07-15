import React from 'react';

const InputField = ({ label, value, onChange }) => (
  <div className="form-control">
    <label>{label}</label>
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);


export default InputField;
