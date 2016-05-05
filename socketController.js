"use strict";

// Socket Connections - All sockets connected will be stored in this connections array
const connections = [];
// This is the interface of connections (Just for our reference becos we love typescript so much)
// Connections: []Connection
// Connection {
//     id: string;
//     profileName: string;
//     secretCode: string;
//     ready: boolean
// }
const rooms = [];
// room: Room
// Room {
  // name: string;
  // secretCode: string;
// }
var availableCodeList = ['martini','mystical','faith','diagonal','magic','booze','master','sprite','heroic','logic','perfect','channel','hustle','code','ruby','paradox','canvas','baseline','island','wonder'];
var usedCodeList = [];

function findConnection(id){
  return connections.filter(function(connection) {return connection.id === id;})[0];
}
function findRoom(secretCode){
  return rooms.filter(function(room) {return room.secretCode === secretCode;})[0];
}
function findNumberOfRoomConnections(secretCode){
  var roomConnections = connections.filter(function(connection) {return connection.secretCode === secretCode})
  return roomConnections.length;
}
function findNumberOfReadyConnections(secretCode){
  var readyConnections = connections.filter(function(connection) {return (connection.ready === true && connection.secretCode === secretCode)})
  return readyConnections.length;
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
  var room = {
    name: className,
    // pass in secretcodefunction
    secretCode: secretCodeGenerator(availableCodeList,usedCodeList)
  }
  rooms.push(room);
  let connection = findConnection(socket.id);
  connection.secretCode = room.secretCode;

  socket.emit('createSecretCode', room)
}

function closeRoom(socket, room){
  // we will receive the room object with secret code and name
  // we want to remove this room object from the room array
  // we want to remove the secret code from the usedCodeList
  // we want to add it back the secret code back to the availableList
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
}

function instructorCallReady(socket){
  // use the classroomService to emit instructorReady() to the server that we are starting are u ready
  // use the server to emit startStudentReady() to all those in the room (excluding instructor) - use broadcast
  // and in the service (listen for an emit)
  // in the emit (reroute the student into student ready)
  let connection = findConnection(socket.id);
  let room = findRoom(connection.secretCode);
  socket.broadcast.to(room.name).emit('startStudentReady')
}


      // =================================== Student ===========================

function submitProfileName(socket, profileName){
  let connection = findConnection(socket.id);
  connection.profileName = profileName;
  // console.log('connection:', connection)
  // console.log('connections:', connections)
}

function submitSecretCode(socket, secretCode, io){
  // this connection guy does nothing yet (just put here in case)
  let room = findRoom(secretCode);
  if (room) {
    let connection = findConnection(socket.id);
    connection.secretCode = secretCode;

    socket.join(room.name)
    // emit something back so that we can route him to the next page
    socket.emit('secretCodeExist', true)
    // connections should be number of sockets who are joined to the room - 1 (instructor)
    io.to(room.name).emit("newStudentConnection", (findNumberOfRoomConnections(secretCode)-1));
  } else {
    // emit him some message so that client knows that the secret code is wrong
    socket.emit('secretCodeExist', false)
  }

}

function studentReady(socket,io){
  let connection = findConnection(socket.id);
  connection.ready = true;
  let room = findRoom(connection.secretCode);
  // socket.emit("RecievedYourLovelyReadyResponse")
  io.to(room.name).emit("updateStudentReady", findNumberOfReadyConnections(connection.secretCode))
  // on the client side, it is waiting for updatestudentready
  // it will save a property for the number of studentready
  // display it on both the instructor and student dashboard
  // so we need to use the service reference hack so that both student and instructor ready component will be able to access the updated property
  // 1)Once i receive the emit, i need to save that argument that is passed to me under a property object
  // 2)I need to create a getProperty in the service (just above the constructor)
}

function studentNotReady(socket){

}

// Functions we are exporting to (server.js)
module.exports = {
  connect: connect,
  disconnect: disconnect,
  submitClassName: submitClassName,
  closeRoom: closeRoom,
  submitProfileName: submitProfileName,
  submitSecretCode: submitSecretCode,
  instructorCallReady: instructorCallReady,
  studentReady: studentReady,
  studentNotReady: studentNotReady
}
