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
// const {Client } = require('pg');

// const client = new Client({
//   user: "kzgnhfmsccbjbj",
//   host: "ec2-176-34-123-50.eu-west-1.compute.amazonaws.com",
//   database: "debrurlm7aobrm",
//   password: "8e290c82e2cbbf7f59e681a3f71ab6435f493136e4d723166a3c23e9134db148",
//   port: "5432"
// });
// client.connect(function(err) {
//   if (err) throw err;
//   console.log('Database is connected successfully !');
//   });
