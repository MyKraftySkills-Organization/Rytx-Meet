// import files
const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./routes/router');

const { addUsers, removeUser, getUser, getUsersInRoom } = require('./users');
const server = require('http').Server(app);
const io = require('socket.io')(server);
const { ExpressPeerServer } = require('peer');
const peerServer = ExpressPeerServer(server, {
    debug: true
});

// setup view engine
app.set('view engine', 'ejs');
// set static folder
app.use(express.static('public'));
// path for peerjs
app.use('/peerjs', peerServer);
app.use(cors())
app.use(router);

// Socket Functions
io.on('connect', (socket) => {
    socket.on('join-room', ({ name, room }, callback) => {
        const { error, user } = addUsers({ id: socket.id, name, room, role: 'user' });

        if (error) return callback(error);

        socket.join(room);

        socket.emit('message', { user: 'admin', text: `${user.name}, welcome to room ${user.room}.` });
        socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined!` });

        io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

        socket.to(roomId).broadcast.emit('user-connected', userId);
        socket.on('message', message => {
            io.to(roomId).emit('createMessage', message);
        })
        socket.on('disconnect', () => {
            console.log('user disconnected');
        });

        callback();

    });

    socket.on('disconnect', () => {
        const user = removeUser(socket.id);

        if (user) {
            io.to(user.room).emit('message', { user: 'Admin', text: `${user.name} has left.` });
            io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });
        }
    })
})


// Server start
server.listen(process.env.PORT || 3030);
