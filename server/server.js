const dotenv = require('dotenv').config();
const colors = require('colors');
const express = require('express');
const http = require('http');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const credentialsMiddleware = require('./middleware/credentialsMiddleware');
const { Server } = require('socket.io');
const { createSocketServer } = require('./config/socket');
const connectToDataBase = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const messageRoutes = require('./routes/messageRoutes');

const PORT = process.env.PORT || 5000;

const app = express();
app.use(credentialsMiddleware);
app.use(cors(corsOptions));

// check if any data is send to server if true, attach this data to request.body property
app.use(express.json());

// initialize socket.io server
const server = http.createServer(app);
const io = createSocketServer(server);
global.io = io;

app.use((req, res, next) => {
   console.log(req.path, req.method);
   next();
});

io.on('connection', socket => {
   console.log(`Client connected with id: ${socket.id}`);

   socket.on('disconnect', () => {
      console.log('User disconnected');
   });
});

// connect to Database
connectToDataBase();

// routes
app.use('/api/users', userRoutes);
app.use('/api/messages', messageRoutes);

// start server
server.listen(PORT, () => {
   console.log(`Server listening at port: ${PORT}`.blue);
});
