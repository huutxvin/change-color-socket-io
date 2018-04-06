var express = require('express'); // su dung thu vien express
var app = express();// su dung package express
app.use(express.static('public')); //folder luu tru request tu browser
app.set('view engine', 'ejs'); // Set view engine
app.set('views', 'views');//Tao view

var server = require('http').Server(app);//tao bien server
var io = require('socket.io')(server); //ket noi voi socket.io
server.listen(2000);// Server nghe port (port tu chon)

io.on('connection', function(socket){//ham ket noi server	
    console.log('Has a new connection :' + socket.id);
    
    socket.on('client-send-mau', function(data){
    console.log(data);
    io.sockets.emit('server-send-mau', data);
    });
 
});

app.get('/', function(req, res){
	res.render('trangchu');
});