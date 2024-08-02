const mongoose = require("mongoose");

// ChatHistory model
const ChatHistorySchema = new mongoose.Schema({
    userId:{ type: String},
    message: { type: String},
    timestamp: { type: Date},
    artist: { type: String},
  });


const ChatHistory =  new mongoose.model("ChatHistory",ChatHistorySchema);

module.exports = ChatHistory;