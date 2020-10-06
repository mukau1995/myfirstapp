var mysql = require('mysql');

let conn = mysql.createConnection({
  user: 'root',
  password: 'mysql',
  database: 'restaurant',
  host: 'localhost'
});
conn.connect(function(err){
  if(err){
    console.log(err)
  }
  else{
    console.log("Connected!")
  }
})

module.exports = conn;