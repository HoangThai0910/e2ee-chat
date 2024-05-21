// main file of app

var express = require('express');
var path = require("path");
var app = express();
var port = 3000;

var io = require('socket.io').listen(app.listen(port));



app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, 'client/views'));
app.use(express.static(path.join(__dirname, 'client')));



// Router
app.get('/', function (req, res) {
	// Render views/chat.html
	res.render('chat');
});



require('./server/server')(app, io);

console.log('Your application is running on http://localhost:' + port);
