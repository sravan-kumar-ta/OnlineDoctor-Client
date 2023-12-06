let express = require('express')
let app = express();

let http = require('http');
let server = http.Server(app);

let socketIO = require('socket.io');
var io = socketIO(server, {
    cors: {
        origin: '*',
    }
});

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.write(`<h1>Sockert IO start on port : ${port}</h1>`);
    res.end();
})

server.listen(port, () => {
    console.log(`started on port: ${port}`);
})

io.on('connection', function(socket) {
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    socket.on('join', function(data) {
        
        socket.join(data.userid);
    });

    socket.on('new-message', function(data) {
        io.to(data.receiverid).emit('new-msg', {msg: data.msg, senderid: data.senderid, receiverid: data.receiverid});
        console.log('new-message')
    })
})