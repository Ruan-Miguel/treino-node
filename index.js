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
    Post.findAll({order: [['id', 'DESC']]}).then( (posts) => {
        res.render('home', { posts });
    })
})

app.get('/cad', (req, res) => {
    res.render('formulario');
})

app.post('/add', (req, res) => {
    const { body } = req;

    Post.create({
        titulo: body.titulo,
        conteudo: body.conteudo
    }).then( () => {
        res.redirect('/');
    }).catch( (error) => {
        res.send('Houve um erro: ' + error);
    })
})

app.listen(8081, () => {
    console.log('Servidor rodando na url http://localhost:8081');
})