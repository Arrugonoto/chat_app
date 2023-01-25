require("dotenv").config();
const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    const connectionId = await mongoose.connect(process.env.MONGO_URI);

    console.log(
      `Connected to DataBase: ${connectionId.connection.host}`.blue.underline
    );
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectToDatabase;
