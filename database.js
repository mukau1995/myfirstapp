/*
var mysql = require('mysql');
var conn = mysql.createConnection({
  host: 'localhost', // Replace with your host name
  user: 'root',      // Replace with your database username
  password: 'mysql',      // Replace with your database password
  database: 'qr_project' // // Replace with your database Name
}); 
conn.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});
module.exports = conn;
*/
const {Pool} = require('pg');
const pool = new Pool({
  user: 'tfhqovyjoefkkc',
  host: 'ec2-54-247-79-178.eu-west-1.compute.amazonaws.com',
  database: 'df6alk7pgpju9i',
  password: '53120d60cbb844252909ef290cfd7ad0923b4dfbdd5600903f075e8a3a234861',
  port: '5432'
})
pool.query('CREATE TABLE Test', (err, res)=>{
  console.log(err, res)
  pool.end();
})