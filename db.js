const mysql=require('mysql');
const conn=mysql.createConnection({
    host:'localhost',
    port:'3306',
    user:'root',
    password:'',
    database:'crud_db'
  });
conn.connect(function(error){
    if(!!error){
        console.log(error);
    }else{
        console.log('MYSQL sasa iko Connected!:)');
    }
})
module.exports = conn; 
