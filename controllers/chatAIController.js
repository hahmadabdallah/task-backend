const ChatHistory = require('../models/chatHistory');
const {generateText} = require('../utils/OpenAIConfiguration');


const getChatHistoryUserIdController = async (req, res) => {
  // Fetch chat history from the database and send it to the frontend
  const { userId, artistId } = req.params;
  const chatHistory = await ChatHistory.find({ userId, artist: artistId }).sort({ timestamp: 1 });
  res.json(chatHistory);
  
};

const getChatHistorySaveController = async (req, res) => {
   // Save the user's message to the database
  const { userId, message, artist } = req.body;
  const chatMessage = new ChatHistory({ userId, message, timestamp: new Date(), artist });
  await chatMessage.save();
  res.status(201).json(chatMessage);
    
  };

  const getChatController = async (req, res) => {
    const { message, artist } = req.body;
    const prompt = `User: ${message}\nAI: Based on the information provided, I can only answer questions related to the artist and their music. Could you please ask me something about the ${artist}?`;
    const generatedText = await generateText(prompt);
  
    res.json({ message: generatedText });
     
   };

module.exports = {
    getChatHistoryUserIdController,
    getChatHistorySaveController,
    getChatController
  };