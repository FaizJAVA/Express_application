const mysql=require('mysql');

let conn=mysql.createPool({
    connectionLimit: 100,
    host: 'localhost',
    user:'root',
    password:'root@123',
    database:'expressDB'
});

module.exports=conn;