var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var url = require('url');

app.use(express.static('public'));
app.use(express.json());

app.use(bodyParser.urlencoded({extended: true}));

// app.post('/user', function (req, res){
//     var user = req.body;
//     localStorage.setItem('email', user.email);
//     localStorage.setItem('password', user.password);
//     res.status(401).send(new Error('errooooo'))
// })

var server = app.listen(3000, function () {
   var host = server.address().address;
   var port = server.address().port;
   console.log("Example app listening at http://%s:%s", host, port);
   console.log(server.address())
});

