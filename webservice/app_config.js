var express = require('express');

var app = module.exports =  express();

var bodyParser = require('body-parser');

var porta = 5000;

app.listen(porta);
console.log("Rodando servidor na porta "+porta+" as "+new Date())
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
    next();
});


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
	extended: true
}));
