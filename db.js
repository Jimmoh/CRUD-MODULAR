const mysql=require('mysql');
const conn=mysql.createConnection({
    host:'localhost',
    port:'3306',
    user:'root',
    password:'',
    database:'crud_db'
  });
conn.connect((err) => {
    if(err) throw err;
    console.log('MYSQL is now Connected!:)');
})
module.exports = conn; 
