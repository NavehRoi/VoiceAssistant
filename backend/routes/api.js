// backend/routes/api.js
const express = require('express');
const router = express.Router();
const { getOpenAIResponse } = require('../controllers/openaiController');

router.post('/openai', getOpenAIResponse);

module.exports = router;