const mysql = require('mysql');

module.exports = () => {
  return mysql.createConnection({
    host: '104.214.109.199',
    port: '33061',
    user: 'root',
    password: 'esPAda2020orja',
    database: 'spoyifyBB'
  });
}
