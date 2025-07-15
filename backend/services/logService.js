const fs = require('fs/promises');
const path = require('path');

const logFilePath = path.join(__dirname, '../data/logs.json');

const readLogs = async () => {
  try {
    const data = await fs.readFile(logFilePath, 'utf-8');
    return JSON.parse(data || '[]');
  } catch {
    return [];
  }
};

const writeLogs = async (logs) => {
  await fs.writeFile(logFilePath, JSON.stringify(logs, null, 2));
};

const saveLog = async (log) => {
  const logs = await readLogs();
  logs.push(log);
  await writeLogs(logs);
  return log;
};

const queryLogs = async (filters) => {
  const logs = await readLogs();

  return logs
    .filter(log => {
      if (filters.level && log.level !== filters.level) return false;
      if (filters.message && !log.message.toLowerCase().includes(filters.message.toLowerCase())) return false;
      if (filters.resourceId && log.resourceId !== filters.resourceId) return false;
      if (filters.timestamp_start && new Date(log.timestamp) < new Date(filters.timestamp_start)) return false;
      if (filters.timestamp_end && new Date(log.timestamp) > new Date(filters.timestamp_end)) return false;
      if (filters.traceId && log.traceId !== filters.traceId) return false;
      if (filters.spanId && log.spanId !== filters.spanId) return false;
      if (filters.commit && log.commit !== filters.commit) return false;
      return true;
    })
    .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
};

module.exports = {
  readLogs,
  writeLogs,
  saveLog,
  queryLogs
};
