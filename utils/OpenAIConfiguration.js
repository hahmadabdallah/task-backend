require('dotenv').config()
const OpenAI =require('openai');



const OpenAI_Api = 'Mykey';

const openai = new OpenAI({
  apiKey: OpenAI_Api
});

  const generateText = async (prompt) => {
    try {
      const chatCompletion = await openai.chat.completions.create({
        model: "gpt-4o",
        messages:prompt,
      });
      return chatCompletion.choices[0].message
    } catch (error) {
      console.error('Error creating chat completion:', error);
    }
  };
  
  module.exports = { generateText };