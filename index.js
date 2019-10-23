const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Post = require('./models/Post');

//Config
//Template engine
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Rotas

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/cad', (req, res) => {
    res.render('formulario');
})

app.post('/add', (req, res) => {
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then( () => {
        res.redirect('/');
    }).catch( (error) => {
        res.send('Houve um erro: ' + error);
    })
})

app.listen(8081, () => {
    console.log('Servidor rodando na url http://localhost:8081');
})