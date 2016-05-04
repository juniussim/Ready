"use strict";

// Socket Connections - All sockets connected will be stored in this connections array
const connections = [];
const rooms = [];
var availableCodeList = ['martini','mystical','faith','diagonal','magic','booze','master','sprite','heroic','logic','perfect','channel','hustle','code','ruby','paradox','canvas','baseline','island','wonder'];
var usedCodeList = [];

function findConnection(id){
  return connections.filter(function(connection) {return connection.id === id;})[0];
}
function findRoom(secretCode){
  return rooms.filter(function(room) {return room.secretCode === secretCode;})[0];
}

function secretCodeGenerator(availableList, usedList) {

 //take first element of availableCodeList array,
 //add to end of usedCodeList
 //when close room, filter by secretcode, remove from usedCodeList and push to availableCodeList
 var secretCode = availableList.shift();
 usedList.push(secretCode);
 return secretCode;
}

// =================================== Socket Controller Functions =================================

function connect(socket){
  //new connection, save the socket to them
  connections.push({id: socket.id});
  console.log(`## New connection (${socket.id}). Total: ${connections.length}.`);
}

function disconnect(socket){
  console.log('look here guys', socket)
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
}

function submitClassName (socket, className){
  console.log('from set class room name', socket)
  socket.join(className)
  // this connection guy does nothing yet (just put here in case)
  let connection = findConnection(socket.id);
  console.log(connection)
  var room = {
    name: className,
    // pass in secretcodefunction
    secretCode: secretCodeGenerator( availableCodeList, usedCodeList )
  }
  rooms.push(room);
  socket.emit('secretCode', room)
}

// Functions we are exporting to (server.js)
module.exports = {
  connect: connect,
  disconnect: disconnect,
  submitClassName: submitClassName
}
