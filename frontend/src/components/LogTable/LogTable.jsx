import React from 'react';

const LogTable = ({ logs }) => {
  if (!logs.length) return <p>No logs found.</p>;

  return (
    <table className="log-table">
      <thead>
        <tr>
          <th>Timestamp</th>
          <th>Level</th>
          <th>Message</th>
          <th>Resource ID</th>
        </tr>
      </thead>
      <tbody>
        {logs.map((log, idx) => (
          <tr key={idx} className={`log-row ${log.level}`}>
            <td>{new Date(log.timestamp).toLocaleString()}</td>
            <td>{log.level}</td>
            <td>{log.message}</td>
            <td>{log.resourceId}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LogTable;
