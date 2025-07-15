const express = require('express');
const { ingestLog, getLogs } = require('../controllers/log.controller');
const validateLogSchema = require('../middleware/validateLogSchema');

const router = express.Router();

router.post('/', validateLogSchema, ingestLog);
router.get('/', getLogs);

module.exports = router;
