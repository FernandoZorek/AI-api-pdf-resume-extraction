const { GoogleGenerativeAI } = require("@google/generative-ai");

module.exports = (async (content) => { 

  console.log('Starting GEMINI AI Process...')
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});
  const result = await model.generateContent(content);
  const response = await result.response;
  const text = response.text().replace(/```json\n(.*?)\n```/s, '$1').replace(/``` JSON\n(.*?)\n```/s, '$1');
  console.log('...Finished AI Process!')
  return JSON.parse(text);
  })