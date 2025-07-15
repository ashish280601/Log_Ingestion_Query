import React, { useState } from 'react';
import InputField from '../common/InputField';
import Dropdown from '../common/Dropdown';
import DatePicker from '../common/DatePicker';

const FilterBar = ({ onFilterChange }) => {
  const defaultFilters = {
    message: '',
    level: '',
    resourceId: '',
    timestamp_start: '',
    timestamp_end: ''
  };

  const [filters, setFilters] = useState(defaultFilters);

  const handleChange = (key, value) => {
    const updated = { ...filters, [key]: value };
    setFilters(updated);
  };

  const applyFilters = () => {
    onFilterChange(filters);
  };

  const clearFilters = () => {
    setFilters(defaultFilters);
    onFilterChange({});
  };

  return (
    <>
      <div className="filter-bar">
        <InputField
          label="Search Message"
          value={filters.message}
          onChange={(val) => handleChange('message', val)}
        />
        <Dropdown
          label="Log Level"
          value={filters.level}
          options={['error', 'warn', 'info', 'debug']}
          onChange={(val) => handleChange('level', val)}
        />
        <InputField
          label="Resource ID"
          value={filters.resourceId}
          onChange={(val) => handleChange('resourceId', val)}
        />
        <DatePicker
          label="Start Time"
          value={filters.timestamp_start}
          onChange={(val) => handleChange('timestamp_start', val)}
        />
        <DatePicker
          label="End Time"
          value={filters.timestamp_end}
          onChange={(val) => handleChange('timestamp_end', val)}
        />
      </div>

      <div className="action-buttons">
        <button className="apply" onClick={applyFilters}>Apply Filters</button>
        <button className="clear" onClick={clearFilters}>Clear</button>
      </div>
    </>
  );
};

export default FilterBar;
