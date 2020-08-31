var mysql = require('mysql');
// var conn = mysql.createConnection({
//   host: 'localhost', // Replace with your host name
//   user: 'root',      // Replace with your database username
//   password: 'mysql',      // Replace with your database password
//   database: 'qr_project' // // Replace with your database Name
// }); 
// conn.connect(function(err) {
//   if (err) throw err;
//   console.log('Database is connected successfully !');
// });
// module.exports = conn;

var conn = mysql.createConnection('mysql://b0604f855687f6:988398b8@eu-cdbr-west-03.cleardb.net/heroku_ddd16763701e251?reconnect=true');
conn.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});

module.exports = conn;