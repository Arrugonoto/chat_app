const express = require('express');
const requireAuth = require('../middleware/authMiddleware');

// controller functions
const {
   getMessages,
   createNewMessage,
   editMessageText,
   editMessageReactions,
   deleteMessage,
} = require('../controllers/messageController');

const router = express.Router();

// protect routes
router.use(requireAuth);

// get messages
router.get('/', getMessages);

// create new message
router.post('/', createNewMessage);

// edit message
router.patch('/:id/text', editMessageText);

// add / edit / delete message reaction
router.patch('/:id/reactions', editMessageReactions);

// delete message
router.delete('/:id', deleteMessage);

module.exports = router;
