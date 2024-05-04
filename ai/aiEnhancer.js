const OpenAI = require('openai');
const fs = require('fs/promises');

class AiEnhancer {
  constructor() {
    this.chatgpt = new OpenAI({
        apiKey: process.env.CHATGPT_API_KEY
      });
  }

  async enhanceResumeData(resumeText) {
    console.log('Starting AI Process...')
    const prompt = await fs.readFile('./files/prompt.txt', 'utf8');
    const content = prompt + resumeText;
    const chatgptResponse = await this.chatgpt.chat.completions.create({        
        messages: [{ 
            role: 'user',
            content
        }],
        model: 'gpt-3.5-turbo',
      });
      console.log(chatgptResponse.usage)
      console.log('...Finished AI Process!')
    const enhancedData = chatgptResponse.choices[0].message.content;
    return enhancedData;
  }
}

module.exports = AiEnhancer;