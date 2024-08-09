// backend/services/openaiService.js
const OpenAI = require("openai");

console.log( 'OpenAI API Key in React :', process.env.OPENAI_API_KEY)

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY // Use the API key from environment variables
});

const fetchOpenAIResponse = async (prompt) => {
  const response = await openai.chat.completions.create({
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: prompt }
    ],
    model: "gpt-3.5-turbo",
  });
  console.log("the rsponse is:", response.choices[0].message.content.trim() )
  return response.choices[0].message.content.trim();
};

module.exports = { fetchOpenAIResponse };