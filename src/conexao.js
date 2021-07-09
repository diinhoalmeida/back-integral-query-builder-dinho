const knex = require('knex')({
    client: 'pg',
    connection: {
      host : 'localhost',
      user : 'postgres',
      password : 'sua senha aqui',
      database : 'atividade01'
    }
});

module.exports = knex;