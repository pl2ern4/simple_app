var path = require('path'),
    fs = require('fs'),
    http = require('http'),
    express = require('express'),
	bodyParser = require('body-parser'),
	browserify = require('browserify');
	
var app = express();
app.set('port',process.env.Port||1337);	
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'public'));

app.set('view engine', 'html');


app.get('/', function(req, res){
    res.render('index.html');
});

http.createServer(app).listen(app.get('port'),()=> { console.log('listening '+app.get('port'));});	