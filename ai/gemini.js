const { GoogleGenerativeAI } = require("@google/generative-ai");

module.exports = (async (content) => { 

  console.log('Starting GEMINI AI Process...')
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});
  const result = await model.generateContent(content);
  const response = await result.response;

  function extractJSON(text) {
    const prefixRegex = /^(JSON| JSON|json| json)\s*/;
    const inner = text.replace(/```(.*?)```/s, '$1');
    return inner.replace(prefixRegex, ''); 
  }

  const text = extractJSON(response.text());
  console.log('...Finished AI Process!', text)
  return JSON.parse(text);
  })