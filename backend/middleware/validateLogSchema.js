module.exports = (req, res, next) => {
  const { level, message, resourceId, timestamp, traceId, spanId, commit, metadata } = req.body;

  const validLevels = ['error', 'warn', 'info', 'debug'];
  if (
    !validLevels.includes(level) ||
    !message || !resourceId || !timestamp || !traceId ||
    !spanId || !commit || typeof metadata !== 'object'
  ) {
    return res.status(400).json({ error: 'Invalid log schema' });
  }
  next();
};
