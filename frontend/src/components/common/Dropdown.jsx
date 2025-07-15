import React from 'react';

const Dropdown = ({ label, value, options, onChange }) => (
  <div className="form-control">
    <label>{label}</label>
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      <option value="">All</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>{opt}</option>
      ))}
    </select>
  </div>
);


export default Dropdown;
