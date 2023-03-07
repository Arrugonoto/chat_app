const Message = require('../models/messageModel');
const { filterText } = require('../utils/profanityFilter');
const mongoose = require('mongoose');

// get messages
// @route GET /api/messages
// @access Private
const getMessages = async (req, res, next) => {
   // const pageNumber = req.query.page || 0;
   // const resultsPerPage = 30;

   const messages = await Message.find().sort({ createdAt: -1 });
   // .skip(pageNumber * resultsPerPage)
   // .limit(resultsPerPage);

   res.status(200).json(messages);
};

// create new message
// @route POST /api/messages
// @access Private
const createNewMessage = async (req, res, next) => {
   const { text } = req.body;
   const user_id = req.user._id;
   const username = req.user.name;
   const userColor = req.user.color;

   const filteredText = filterText(text);

   // create new message / add document to database
   try {
      const message = await Message.create({
         username,
         text: filteredText,
         user_id,
         userColor,
      });

      res.status(200).json(message);
      global.io.emit('resend_messages', {});
   } catch (error) {
      res.status(400).json({ error: error.message });
   }
};

// edit message
// @route PATCH /api/messages/:id
// @access Private
const editMessage = async (req, res, next) => {
   const { id } = req.params;
   const { text } = req.body;
   const filteredText = filterText(text);

   if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
         .status(404)
         .json({ error: `Message has been deleted or doesn't exist` });
   }

   try {
      if (text) {
         const message = await Message.findOneAndUpdate(
            { _id: id },
            { text: filteredText },
            { new: true }
         );
         if (!message) {
            return res
               .status(400)
               .json({ error: `Message has been deleted or doesn't exist` });
         }
         res.status(200).json(message);
         global.io.emit('resend_messages', {});
      }
   } catch (error) {
      res.status(400).json({ error: error.message });
   }
};

// delete message
// @route DELETE /api/messages/:id
// @access Private
const deleteMessage = async (req, res, next) => {
   const { id } = req.params;

   if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
         .status(404)
         .json({ error: `Message has been deleted or doesn't exist` });
   }

   const message = await Message.findOneAndDelete({ _id: id });

   if (!message) {
      return res
         .status(400)
         .json({ error: `Message has been deleted or doesn't exist` });
   }

   res.status(200).json(message);
   global.io.emit('resend_messages', {});
};

module.exports = {
   getMessages,
   createNewMessage,
   editMessage,
   deleteMessage,
};
