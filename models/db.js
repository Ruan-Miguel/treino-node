const Sequelize = require('sequelize');

//Conexao com o banco de dados
const sequelize = new Sequelize('treino-node', 'postgres', '1234', {
    host: 'localhost',
    dialect: 'postgresql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}