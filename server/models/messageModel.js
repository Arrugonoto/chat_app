const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema(
   {
      text: {
         type: String,
         required: true,
      },
      username: {
         type: String,
         required: true,
      },
      user_id: {
         type: String,
         required: true,
      },
      userColor: {
         type: String,
         required: true,
      },
      reactions: {
         like: String,
         funny: String,
         wholesome: String,
         fear: String,
         astonished: String,
      },
   },
   {
      timestamps: true,
   }
);

module.exports = mongoose.model('Message', messageSchema);
