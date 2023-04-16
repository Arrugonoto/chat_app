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

router.get('/', getMessages);

router.post('/', createNewMessage);

router.patch('/:id/text', editMessageText);

router.patch('/:id/reactions', editMessageReactions);

router.delete('/:id', deleteMessage);

module.exports = router;
