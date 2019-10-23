const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

//Config
//Template engine
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Conexao com o banco de dados
const sequelize = new Sequelize('treino-node', 'postgres', '1234', {
    host: 'localhost',
    dialect: 'postgresql'
})

//Rotas
app.get('/cad', (req, res) => {
    res.render('formulario');
})

app.post('/add', (req, res) => {
    res.send(`Texto: ${req.body.titulo} Conteúdo: ${req.body.conteudo}`);
})

app.listen(8081, () => {
    console.log('Servidor rodando na url http://localhost:8081');
})