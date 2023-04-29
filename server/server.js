/* eslint-disable no-unused-vars */
const dotenv = require('dotenv').config();
const colors = require('colors');
/* eslint-enable no-unused-vars */
const express = require('express');
const http = require('http');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const credentialsMiddleware = require('./middleware/credentialsMiddleware');
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
      console.log(`User: ${socket.id} disconnected`);
   });
});

// connect to Database
connectToDataBase();

// routes
app.use('/api/users', userRoutes);
app.use('/api/messages', messageRoutes);

// Run production build via server-side
// serve static front-end
// if (process.env.NODE_ENV === 'production') {
//    app.use(express.static(path.join(__dirname, '../client/build')));

//    app.get('*', (req, res) =>
//       res.sendFile(
//          path.resolve(__dirname, '../', 'client', 'build', 'index.html')
//       )
//    );
// } else {
//    app.get('/', (req, res) =>
//       res.send('Set working environment to production.')
//    );
// }

// start server
server.listen(PORT, () => {
   console.log(`Server listening at port: ${PORT}`.blue);
});
