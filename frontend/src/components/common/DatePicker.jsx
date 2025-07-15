import React from 'react';

const DatePicker = ({ label, value, onChange }) => (
  <div className="form-control">
    <label>{label}</label>
    <input
      type="datetime-local"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);


export default DatePicker;
