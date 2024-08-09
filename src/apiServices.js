import axios from 'axios';

export const fetchOpenAIResponse = async (prompt) => {
  const response = await axios.post('/api/openai', { prompt });
  return response.data;
};