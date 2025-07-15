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

module.exports = { readLogs, writeLogs };
