const knex = require('knex')({
    client: 'pg',
    connection: {
      host : 'localhost',
      user : 'postgres',
      password : 'Ee@12leti',
      database : 'atividade01'
    }
});

module.exports = knex;