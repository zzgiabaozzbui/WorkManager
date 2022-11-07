var mysql=require('mysql');
var connection=mysql.createPool({
 
    host:'localhost',
    user:'root',
    password:'',
    database:'companytest'
 
});
module.exports=connection;

// host: địa chỉ server database
// user: tên truy cập vào database
// password: password truy cập vào database
// database: Tên database 