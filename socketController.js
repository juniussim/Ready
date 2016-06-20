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
//     userType: string;
// }
const rooms = [];
// room: Room
// Room {
  // name: string;
  // secretCode: string;
  // readySessionEnabled: boolean;
// }
var availableCodeList = ['GROWTH','AMAZE','REFRESH','MAGIC','BOOZE','MASTER', 'HEROIC','HUSTLE','TEQUILA','POLISH','PARADOX','CANVAS','ISLAND','WONDER'];
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
function resetAllStatusForRoomConnections(socket,secretCode){
  var allRoomConnections = connections.filter(function(connection) {return connection.secretCode === secretCode;});
  allRoomConnections.forEach(function(element){
    // may not necessarily want to reset profile name in future
    element.profileName = null;
    element.secretCode = null;
    element.ready = null;
    element.userType = null;
    // we need to get all sockets to leave
  })
}
function resetReadyStatusForRoomConnections(socket,secretCode){
  var allRoomConnections = connections.filter(function(connection) {return connection.secretCode === secretCode;});
  allRoomConnections.forEach(function(element){
    // may not necessarily want to reset profile name in future
    element.ready = null;
  })
}
function socketsLeaveRoom(secretCode){
  var allRoomConnections = connections.filter(function(connection) {return connection.secretCode === secretCode;});
  allRoomConnections.forEach(function(element){
    element.socket.leave(secretCode)
  })
}
function secretCodeGenerator(availableList, usedList) {
 //take first element of availableCodeList array,
 //add to end of usedCodeList
 var secretCode = availableList.splice(Math.floor(Math.random() * availableList.length), 1);
 console.log('secret code is ' + secretCode);
 usedList.push(secretCode);
 return secretCode;
}
function returnBackSecretCode(availableList, usedList, secretCode){
  var indexOfRemovedCode = usedList.indexOf(secretCode);
  usedCodeList.splice(indexOfRemovedCode, 1);
  availableList.push(secretCode);
}

// =================================== Socket Controller Functions =================================

function connect(socket){
  //new connection, save the socket to them
  // when a socket first connects, provide all these attributes so that you would not get error when you do a status reset
  connections.push({
    socket: socket,
    id: socket.id,
    profileName: null,
    secretCode: null,
    ready: null,
    userType: null
  });
  console.log(`## New connection (${socket.id}). Total: ${connections.length}.`);
}

function disconnect(socket,io){
  //find the connection and remove  from the collection
  let connection = findConnection(socket.id);
  if (connection){
    if (connection.userType === "instructor") {
      let room = findRoom(connection.secretCode);
      if (room.readySessionEnabled === true) {
        instructorEndsReadySession(socket)
      }
      closeClass(socket,io);
    }
    if (connection.userType === "student") {
      if (connection.ready === true) {
        studentNotReady(socket, io)
      }
      studentLeaveClass(socket,io)
    }
    connections.splice(connections.indexOf(connection), 1);
    console.log(`## Connection (${connection.id}) (${socket.id}) disconnected. Remaining: ${connections.length}.`);
  }
  socket.disconnect();
}
      // =================================== Instructor ===========================

function submitClassName(socket, className){
  // this connection guy does nothing yet (just put here in case)
  var room = {
    name: className,
    // pass in secretcodefunction
    secretCode: secretCodeGenerator(availableCodeList,usedCodeList)
  }
  socket.join(room.secretCode)
  rooms.push(room);
  let connection = findConnection(socket.id);
  if (connection){
    connection.secretCode = room.secretCode;
    connection.userType = "instructor";
    socket.emit('createSecretCode', room)
  }
}

function closeClass(socket,io){
  let connection = findConnection(socket.id);
  if (connection) {
    let room = findRoom(connection.secretCode);
    if (room){
      console.log(`## Room (${room.name}) closed. Remaining: ${rooms.length}.`);
      rooms.splice(rooms.indexOf(room), 1);
      returnBackSecretCode(availableCodeList,usedCodeList,room.secretCode);
      // you want to find all connections in the room with a ready status and set them all to false
      resetAllStatusForRoomConnections(socket,room.secretCode)
      // reset room connection back to 0 for everyone when room is closed so that when you start a new room, the room starts with 0 connection
      io.to(room.secretCode).emit("updateNumberOfRoomConnections", (findNumberOfRoomConnections(room.secretCode)));
      // this socketsLeaveRoom function must come after the io because if it comes first, we would not be able to emit to all sockets in that room anymore
      socketsLeaveRoom(room.secretCode)
      socket.broadcast.to(room.secretCode).emit('studentsCloseClass')
    }
  }
}

function instructorCallReady(socket){
  // use the classroomService to emit instructorReady() to the server that we are starting are u ready
  // use the server to emit startStudentReady() to all those in the room (excluding instructor) - use broadcast
  // and in the service (listen for an emit)
  // in the emit (reroute the student into student ready)
  let connection = findConnection(socket.id);
  if (connection) {
    let room = findRoom(connection.secretCode);
    if (room) {
      room.readySessionEnabled = true;
      socket.broadcast.to(room.secretCode).emit('startStudentReady')
    }
  }
}

function instructorEndsReadySession(socket){
  let connection = findConnection(socket.id);
  if (connection){
    let room = findRoom(connection.secretCode);
    if (room) {
      // you want to find all connections in the room with a ready status and set them all to false
      room.readySessionEnabled = false;
      resetReadyStatusForRoomConnections(socket,room.secretCode)
      socket.broadcast.to(room.secretCode).emit('studentsEndReadySession')
    }
  }
}
      // =================================== Student ===========================

function submitProfileName(socket, profileName){
  let connection = findConnection(socket.id);
  if (connection){
    connection.profileName = profileName;
  }
}

function submitSecretCode(socket, secretCode, io){
  // this connection guy does nothing yet (just put here in case)
  let room = findRoom(secretCode);
  if (room) {
    let connection = findConnection(socket.id);
    if (connection){
      connection.secretCode = secretCode;
      connection.userType = "student"
      socket.join(room.secretCode)
      // emit something back so that we can route him to the next page
      // =>> added this shit in when we were sleepy
      socket.emit('secretCodeExist', {secretCodeExist: true, room: room})
      // connections should be number of sockets who are joined to the room - 1 (instructor)
      io.to(room.secretCode).emit("updateNumberOfRoomConnections", (findNumberOfRoomConnections(secretCode)-1));
    }
  } else {
    // emit him some message so that client knows that the secret code is wrong
    socket.emit('secretCodeExist', false)
  }
}

function studentLeaveClass(socket,io){
  let connection = findConnection(socket.id);
  if (connection){
    var secretCodeOfPreviousRoom = connection.secretCode
    connection.secretCode = null;
    if (connection.ready){
      connection.ready = null;
    }
    io.to(secretCodeOfPreviousRoom).emit("updateNumberOfRoomConnections", (findNumberOfRoomConnections(secretCodeOfPreviousRoom)-1))
    socket.leave(connection.secretCode)
  }
}

function studentReady(socket,io){
  let connection = findConnection(socket.id);
  if (connection){
    // the difference between studentReady and studentNotReady is setting connection.ready true and false
    connection.ready = true;
    // end of difference
    let room = findRoom(connection.secretCode);
    if (room) {
      // this socket emit is for the individual student's ready toggle button
      socket.emit("RecievedYourLovelyReadyResponse")
      // this socket broadcast is for everyone in the room so that everyone knows the number of students who are ready
      io.to(room.secretCode).emit("updateStudentReady", findNumberOfReadyConnections(connection.secretCode))
      // on the client side, it is waiting for updatestudentready
      // it will save a property for the number of studentready
      // display it on both the instructor and student dashboard
      // so we need to use the service reference hack so that both student and instructor ready component will be able to access the updated property
      // 1)Once i receive the emit, i need to save that argument that is passed to me under a property object
      // 2)I need to create a getProperty in the service (just above the constructor)
      // 3)In my two components, i need to make a getPropertyRequest
    }
  }
}

function studentNotReady(socket, io){
  let connection = findConnection(socket.id);
  if (connection){
    connection.ready = false;
    let room = findRoom(connection.secretCode);
    if (room) {
      // this socket emit is for the individual student's ready toggle button
      socket.emit("RecievedYourLovelyNotReadyResponse")
      console.log("server received lovely not ready response")
      // this socket broadcast is for everyone in the room so that everyone knows the number of students who are ready
      io.to(room.secretCode).emit("updateStudentReady", findNumberOfReadyConnections(connection.secretCode))
      console.log("studentNotReady completed run")
    }
  }
}

// Functions we are exporting to (server.js)
module.exports = {
  connect: connect,
  disconnect: disconnect,
  submitClassName: submitClassName,
  closeClass: closeClass,
  instructorEndsReadySession: instructorEndsReadySession,
  submitProfileName: submitProfileName,
  submitSecretCode: submitSecretCode,
  studentLeaveClass: studentLeaveClass,
  instructorCallReady: instructorCallReady,
  studentReady: studentReady,
  studentNotReady: studentNotReady
}
