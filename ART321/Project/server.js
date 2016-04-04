// Tutorial from: http://code-and.coffee/post/2015/collaborative-drawing-canvas-node-websocket/
// Modified by Lester Dela Vega
// Server side for node.js drawing application

/* REQUIRE
Here we import the modules we added to our dependencies earlier (package.json).
We also import the built-in http module to create a webserver.
*/
var express = require('express'),
    app = express(),
    http = require('http'),
    socketIo = require('socket.io');

/* CREATING THE HTTP SERVER AND INITIALIZING SOCKET.IO
Next up we start the webserver and initialize socket.io.
We also tell express to look in our ./public-directory
for requested files.
*/
var server = http.createServer(app);
var io = socketIo.listen(server);

// Have the http server listen on port 3000
server.listen(3000);

/*
server.listen(3000, 'pages.cpsc.ucalgary.ca/~ljdelave/ART321/Project/Project.html', function(){
      // process http requests here
      res.send("Just do it!");
    });
*/
//file:///Users/ljdelavega/Documents/ART321/Art321Repo/ART321/Project/public/index.html
//http://pages.cpsc.ucalgary.ca/~ljdelave/ART321/Project/Project.html

/*
We define a route handler / that gets called when we hit our website home.
Serve the folder "public" to clients using the Express "static" function.
*/
app.use(express.static(__dirname + '/public'));
console.log("Server running on 127.0.0.1:3000");

/* SOCKET SENDING AND RECEIVING
We declare an array line_history where we keep track
of all lines ever drawn.
*/
var line_history = [];
/*
Here a handler for new incoming connections is registered.
Whenever a new client connects, this function is called
and the socket of the new client is passed as an argument.
*/
io.on('connection', function (socket) {
  // Log when a user connects
  console.log('a user connected');
  // Log when a user disconnects
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
  /*
  Bringing new clients up to date
  Inside the handler we first send all the lines in our
  line_history to the new client. That way a client who joins late will
  see the whole doodle and not just the lines drawn since they joined.
  */
  for (var i in line_history) {
    socket.emit('draw_line', { line: line_history[i] } );
  }
  /*
  Finally we add a handler for our own message-type draw_line to the new client.
  Each time we receive a line we add it to the line_history and send it
  to all connected clients so they can update their canvases.
  */
  socket.on('draw_line', function (data) {
    line_history.push(data.line);
    io.emit('draw_line', { line: data.line });
  });
});
