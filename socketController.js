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
 var secretCode = availableList.shift();
 usedList.push(secretCode);
 return secretCode;
}

function returnBackSecretCode(availableList, usedList, secretCode){
  console.log(usedList);
  var indexOfRemovedCode = usedList.indexOf(secretCode);
  usedCodeList.splice(indexOfRemovedCode, 1);
  console.log(usedList);
  availableList.push(secretCode);
  console.log(availableList);
}

// =================================== Socket Controller Functions =================================


      // =================================== Instructor ===========================

function connect(socket){
  //new connection, save the socket to them
  connections.push({id: socket.id});
  console.log(`## New connection (${socket.id}). Total: ${connections.length}.`);
}

function disconnect(socket){
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

function submitClassName(socket, className){
  socket.join(className)
  // this connection guy does nothing yet (just put here in case)
  let connection = findConnection(socket.id);
  var room = {
    name: className,
    // pass in secretcodefunction
    secretCode: secretCodeGenerator(availableCodeList,usedCodeList)
  }
  rooms.push(room);
  socket.emit('createSecretCode', room)
}

function closeRoom(socket, room){
  var room = findRoom(room.secretCode);
  if (room){
    rooms.splice(rooms.indexOf(room), 1);
    // if (connection.user){
      // socket.broadcast.emit("left", connection.user);
      // socket.broadcast.emit("online", connections);
      // console.log(`## ${connection.user.name}(${connection.id}) disconnected. Remaining: ${connections.length}.`);
    // } else {
    console.log(`## Room (${room.name}) closed. Remaining: ${rooms.length}.`);
    returnBackSecretCode(availableCodeList,usedCodeList,room.secretCode);
    // might want to broadcast some stuff
    // }
  }
  // we will receive the room object with secret code and name
  // we want to remove this room object from the room array
  // we want to remove the secret code from the usedCodeList
  // we want to add it back the secret code back to the availableList
}

      // =================================== Student ===========================

function submitProfileName(socket, profileName){
  // this connection guy does nothing yet (just put here in case)
  let connection = findConnection(socket.id);
  connection.profileName = profileName;
  // console.log('connection:', connection)
  // console.log('connections:', connections)

}

function submitSecretCode(socket, secretCode){
  // this connection guy does nothing yet (just put here in case)
  // let connection = findConnection(socket.id);
  // connection.secretCode = secretCode;

  let room = findRoom(secretCode);
  if (room) {
    socket.join(room.name)
    // emit something back so that we can route him to the next page
    socket.emit('secretCodeExist', true)
  } else {
    // emit him some message so that client knows that the secret code is wrong
    socket.emit('secretCodeExist', false)
  }

}

// Functions we are exporting to (server.js)
module.exports = {
  connect: connect,
  disconnect: disconnect,
  submitClassName: submitClassName,
  closeRoom: closeRoom,
  submitProfileName: submitProfileName,
  submitSecretCode: submitSecretCode
}
