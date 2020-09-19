// import files
const express = require('express');
const app = express();
const server = require('http').Server(app);
const { v4: uuidv4 } = require('uuid');
const io = require('socket.io')(server);
const { ExpressPeerServer } = require('peer');
const peerServer = ExpressPeerServer(server, {
    debug:true
});

// setup view engine
app.set('view engine', 'ejs');
// set static folder
app.use(express.static('public'));
// path for peerjs
app.use('/peerjs', peerServer);


// Routing 
app.get('/', (req, res) => {
    res.render('home');
});

app.post('/join', (req, res) => {
    let code = req.query['code'];
    res.redirect(`/${code}`);
});

app.get('/create', (req, res) => {
    res.redirect(`/${uuidv4()}`);
});

app.get('/:room', (req, res) => {
    res.render('room', { roomId: req.params.room })
});

// Socket Functions
io.on('connection', socket => {
    socket.on('join-room', (roomId, userId ) => {
        console.log('a user connected');
        socket.join(roomId);
        socket.to(roomId).broadcast.emit('user-connected', userId);
        socket.on('message', message => {
            io.to(roomId).emit('createMessage', message); 
        })
        socket.on('disconnect', () => {
            console.log('user disconnected');
          });
    })
})


// Server start
server.listen(process.env.PORT || 3030);
