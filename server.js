"use strict";

const express     = require("express");
const http        = require("http");
const app         = express();
const port        = process.env.PORT || 3000;
const server      = http.createServer(app);
const io          = require("socket.io")(server);

// Socket Connections - All sockets connected will be stored in this connections array
const connections = [];
const rooms = [];

function findConnection(id){
  return connections.filter(function(connection) {return connection.id === id;})[0];
}
function findRoom(secretCode){
  return rooms.filter(function(room) {return room.secretCode === secretCode;})[0];
}

// generate secret code
function secretCodeGenerator() {
 var availableCodeList = ['martini','mystical','faith','diagonal','magic','booze','master','sprite','heroic','logic','perfect','channel','hustle','code','ruby','paradox','canvas','baseline','island','wonder'];
 var usedCodeList = [];
 //take first element of availableCodeList array,
 //add to end of usedCodeList
 //when close room, filter by secretcode, remove from usedCodeList and push to availableCodeList
 var secretCode = availableCodeList.shift();
 usedCodeList.push(secretCode);
 return secretCode;
}

//start ther server listening
server.listen(port, ()=>{
    console.log(
      "Server listening on port: ", server.address().port
    );
});

//serve static files with express
app.use(express.static("./public"));

//listen for a socket io connection event
io.on("connection", (socket) => {
  //new connection, save the socket to them
  connections.push({id: socket.id});
  console.log(`## New connection (${socket.id}). Total: ${connections.length}.`);

  //listen for a disconnect event
  socket.once('disconnect', () => {
    //find the connection and remove  from the collection
    let connection = findConnection(socket.id);
    if (connection){
      connections.splice(connections.indexOf(connection), 1);
      // if (connection.user){
        // socket.broadcast.emit("left", connection.user);
        // socket.broadcast.emit("online", connections);
        // console.log(`## ${connection.user.name}(${connection.id}) disconnected. Remaining: ${connections.length}.`);
      // } else {
        console.log(`## Connection (${connection.id}) (${socket.id}) disconnected. Remaining: ${connections.length}.`);
      // }
    }
    socket.disconnect();
  });

  socket.on('submitClassName', (className) => {
    socket.join(className)
    // this connection guy does nothing yet (just put here in case)
    let connection = findConnection(socket.id);
    console.log(connection)
    var room = {
      name: className,
      // pass in secretcodefunction
      secretCode: secretCodeGenerator()
    }
    rooms.push(room);
    socket.emit('secretCode', room)
  })



// list of secret codes

// student submit secret code
// if secret code exist
// let him join room

});
