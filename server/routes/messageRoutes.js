const express = require('express');
const requireAuth = require('../middleware/authMiddleware');

// controller functions
const {
   getMessages,
   createNewMessage,
   editMessage,
   deleteMessage,
} = require('../controllers/messageController');

const router = express.Router();

// protect routes
router.use(requireAuth);

router.get('/', getMessages);

router.post('/', createNewMessage);

router.patch('/:id', editMessage);

router.delete('/:id', deleteMessage);

module.exports = router;
