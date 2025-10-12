const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('nodemvc2', 'root', '9139', {
    host: 'localhost',
    dialect: 'mysql'
});

try{
    sequelize.authenticate();
    console.log('Conexão com o banco de dados realizada com sucesso!');
}catch(err){
    console.log('Conexão com o banco de dados falhou:', err);
}

module.exports = sequelize;