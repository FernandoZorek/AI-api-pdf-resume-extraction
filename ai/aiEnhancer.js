const fs = require('fs/promises');
const chatGpt = require('./chatGpt');
const gemini = require('./gemini');

class AiEnhancer {

  async enhanceResumeData(resumeText) {
    const prompt = await fs.readFile('./files/prompt.txt', 'utf8');
    return process.env.CHATGPT_API_KEY ? await chatGpt(prompt + resumeText) : await gemini(prompt + resumeText);
  }
}

module.exports = AiEnhancer;