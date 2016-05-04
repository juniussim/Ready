"use strict";

const express     = require("express");
const http        = require("http");
const app         = express();
const port        = process.env.PORT || 3000;
const server      = http.createServer(app);
const io          = require("socket.io")(server);
const socketController = require ('./socketController');

var path = require('path');

//start ther server listening
server.listen(port, ()=>{
    console.log(
      "Server listening on port: ", server.address().port
    );
});

//serve static files with express
app.get('/menu', function(req,res){
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.use(express.static("./public"));


//listen for a socket io connection event
io.on("connection", (socket) => {
  socketController.connect(socket);

  //Something we can share with interviewers - reference to socketController.js
  //Creating an anonymous function within a function allows it to access the function scope - and thus know what the socket variable is
  //listen for a disconnect event
  socket.once('disconnect', () => {
    socketController.disconnect(socket);
  })

  // INSTRUCTOR SOCKET

  socket.on('submitClassName', (className) => {
    socketController.submitClassName(socket, className);
  })

  socket.on('closeRoom', (room) => {
    socketController.closeRoom(socket, room);
  })

  // STUDENT SOCKET
  socket.on('submitProfileName', (profileName) => {
    socketController.submitProfileName(socket, profileName);
  })

  socket.on('submitSecretCode', (secretCode) => {
    socketController.submitSecretCode(socket, secretCode);
  })

// list of secret codes

// student submit secret code
// if secret code exist
// let him join room

});
