const express = require('express');
const {getChatHistoryUserIdController,getChatHistorySaveController,getChatController} = require('../controllers/chatAIController');

const router = express.Router();

router.get('/chat-history/:userId/:artistId', getChatHistoryUserIdController);
router.post('/chat-history', getChatHistorySaveController);
router.post('/chat', getChatController);

module.exports = router;