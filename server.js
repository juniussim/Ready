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
app.get('/instructor-class-name', function(req,res){
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})
app.get('/instructor-dashboard', function(req,res){
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})
app.get('/instructor-ready', function(req,res){
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})
app.get('/student-profile', function(req,res){
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})
app.get('/student-join', function(req,res){
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})
app.get('/student-dashboard', function(req,res){
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})
app.get('/student-ready', function(req,res){
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
    socketController.disconnect(socket,io);
  })

  // INSTRUCTOR SOCKET

  socket.on('submitClassName', (className) => {
    socketController.submitClassName(socket, className);
  })

  socket.on('closeClass', () => {
    socketController.closeClass(socket,io);
  })

  // STUDENT SOCKET
  socket.on('submitProfileName', (profileName) => {
    socketController.submitProfileName(socket, profileName);
  })

  socket.on('submitSecretCode', (secretCode) => {
    socketController.submitSecretCode(socket, secretCode, io);
  })

  // STUDENT SOCKET

  socket.on('instructorCallReady', () => {
    socketController.instructorCallReady(socket);
  })

  socket.on('instructorEndsReadySession', () => {
    socketController.instructorEndsReadySession(socket);
  })

  socket.on('studentLeaveClass', () => {
    socketController.studentLeaveClass(socket,io);
  })

  socket.on('studentReady', () => {
    socketController.studentReady(socket,io);
  })

  socket.on('studentNotReady', () => {
    socketController.studentNotReady(socket,io);
  })

// End of io on connection
});
