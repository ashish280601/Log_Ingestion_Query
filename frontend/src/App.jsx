import React, { useEffect, useState } from 'react';
import FilterBar from './components/FilterBar/FilterBar';
import LogTable from './components/LogTable/LogTable';
import { fetchLogs } from './services/api';
import './styles.css';

const App = () => {
  const [logs, setLogs] = useState([]);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    const getLogs = async () => {
      const data = await fetchLogs(filters);
      setLogs(data);
    };
    getLogs();
  }, [filters]);

  return (
    <div className="app-container">
      <h1>Log Ingestion & Querying System</h1>
      <FilterBar onFilterChange={setFilters} />
      <LogTable logs={logs} />
    </div>
  );
};

export default App;
