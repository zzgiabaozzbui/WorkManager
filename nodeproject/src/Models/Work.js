var db = require('../../Dbconnection');

var Work={
	getAllWork:function(callback){
		return db.query("Select * from worktoday",callback);
	},
	// getSinhVienById:function(id,callback){
	// 	return db.query("select * from sinhvien where Id=?",[id],callback);
	// },
	addWork:function(work,callback){
		return db.query("Insert into worktoday(id, title, description, date, priority, finish) values('',?,?,?,?,0);",[work.title,work.description,work.date,work.prio],callback);
	},
	updateWork:function(id,work,callback){
		return db.query("update worktoday set finish=? where id=?",[work.finish,id],callback);
	},
	deleteWork:function(id,callback){
		return db.query("delete from worktoday where id=?",[id],callback);
	}
};
 module.exports=Work; 