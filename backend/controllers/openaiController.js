// backend/controllers/openaiController.js
const { fetchOpenAIResponse } = require('../services/openaiService');

const getOpenAIResponse = async (req, res) => {
  const { prompt } = req.body;
  console.log('Received prompt:', prompt);
  try {
    const response = await fetchOpenAIResponse(prompt);
    res.json(response);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { getOpenAIResponse };