const OpenAI = require('openai');

module.exports = (async (content) => { 

  const chatgpt = new OpenAI({
        apiKey: process.env.CHATGPT_API_KEY
      });

    console.log('Starting CHATGPT AI Process...')
    const chatgptResponse = await chatgpt.chat.completions.create({        
        messages: [{ 
            role: 'user',
            content
        }],
        model: 'gpt-3.5-turbo',
      });
      console.log('...Finished AI Process!')
    return JSON.parse(chatgptResponse.choices[0].message.content);
  })