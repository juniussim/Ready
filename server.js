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
  return connections.filter(function(c) {return c.id === id;})[0];
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
  socket.once("disconnect", () => {
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

  socket.once("submitClassName", (className) => {
    socket.join(className)
    let connection = findConnection(socket.id);
    console.log(connection)
    // generate secret code
    // pass the secret code back to the instructor so that he can show it on the next page
    rooms.push({
      name: className,
      secretCode: secretCode
    });
  })

// generate secret code
secretCodeGenerator() {
 var secretCodeList = [
  'chicken',
  'fish',
  'dog',
]
secretCode = secretCodeList[0]
}
// list of secret codes

// student submit secret code
// if secret code exist
// let him join room

});
