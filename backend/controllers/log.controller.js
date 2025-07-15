const logService = require('../services/logService');

exports.ingestLog = async (req, res) => {
  try {
    const newLog = await logService.saveLog(req.body);
    res.status(201).json(newLog);
  } catch (err) {
    res.status(500).json({ error: 'Failed to ingest log.' });
  }
};

exports.getLogs = async (req, res) => {
  try {
    const filteredLogs = await logService.queryLogs(req.query);
    res.status(200).json(filteredLogs);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve logs.' });
  }
};
