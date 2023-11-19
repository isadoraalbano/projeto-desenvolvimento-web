var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var url = require('url');

var depoimentos = [
   {
      id: 1,
      data: new Date(),
      texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
   }
]
var users = [
    {
    email: "teste@email.com",
    password: "senha123"
    }
];

app.use(express.static('public'));
app.use(express.json());

app.use(bodyParser.urlencoded({extended: true}));

// Cadastro usuário

app.post("/user", function (req, res) {
    var newUser = req.body;
    users.push(newUser)
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end('{ "msg": "Usuário Cadastrado com sucesso!" }');
})

// Login Usuário

app.post('/login', function (req, res){
    var userExists = false;
    var userLogin = req.body;
    users.forEach(user => {
        if(user.email == userLogin.email && user.password == userLogin.password){
            userExists = true;
        }
    });
    if(userExists){
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end('{ "msg": "Usuário logado!" }');
    } else {
        res.writeHead(401, {'Content-Type': 'application/json'});
        res.status(401).send(new Error())
    }

})

//Depoimentos
app.get("/depoimento", (req, res) => {
   var query = url.parse(req.url, true).query;
   var sortFunc;

   if (query.order === 'asc')
      sortFunc = (a, b) => a.data.getTime() - b.data.getTime();   
   else if (query.order === 'desc')
      sortFunc = (a, b) => b.data.getTime() - a.data.getTime();   

   res.json(depoimentos.sort(sortFunc));
});

app.post("/depoimento", (req, res) => {
   var ultimoDepoimento = depoimentos[depoimentos.length - 1];
   var novoDepoimento = {
      id: ultimoDepoimento.id + 1,
      data: new Date(),
      texto: req.body.texto
   }
    
   depoimentos.push(novoDepoimento);

   res.send(novoDepoimento);
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port);
    console.log(server.address())
 });
 