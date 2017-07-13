var express = require('express');
var app = express();

app.use('/static', express.static(__dirname+'/node_modules'));
app.use('/static', express.static(__dirname+'/assets'));
app.use('/data', express.static(__dirname+'/data'));

app.get('/',(req, res) => {
	res.sendFile(__dirname+'/index.html');
	console.log('escuchando servidor');
});

app.listen(8080);
