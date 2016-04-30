"use strict";

const express     = require("express");
const http        = require("http");
const app         = express();
const port        = process.env.PORT || 3000;
const server      = http.createServer(app);
const io          = require("socket.io")(server);
const connections = [];

//start ther server listening
server.listen(port, ()=>{
    console.log("Server listening on port: ", server.address().port);
});

//serve static files with express
app.use(express.static("./public"));

//listen for a socket io connection event
io.on("connection", (socket) => {



});
