var express = require('express');
//Lưu ý phải có mergeParams: true mới lấy được params tròn url(req.params)
var router = express.Router({ mergeParams: true });
var Work = require('./src/Models/Work');
router.get('/getAll',function(req,res){
    // res.setHeader("Access-Control-Allow-Origin", "*")
    // res.setHeader("Access-Control-Allow-Credentials", "true");
    // res.setHeader("Access-Control-Max-Age", "1800");
    // res.setHeader("Access-Control-Allow-Headers", "content-type");
    // res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
    Work.getAllWork(function(err,rows){
        if(err){
            res.json(err);
            console.log("notWork")
        } else {
            res.json(rows);
            console.log("Work")
        }

    });
});



router.post('/addWork',function(req,res){
    Work.addWork(req.body,function(err){
        if(err){
            res.json(err);
        } else{
            res.json(req.body);
        }
    });
    console.log(req.body);
});

router.put('/updateWork?',function(req,res,next){

    //req.params.id  chỉ có thể lấy url tham số yêu cầu trong mẫu này:/user/:name
    //req.query.id lấy các tham số truy vấn (tên) như/user?name=123hoặc các tham số nội dung.
    Work.updateWork(req.query.id,req.body,function(err,rows){
        if(err){
            res.json("notOk");
            console.log("notupdate")
        } else{
            res.json(rows);
            console.log("update")
        }
    });
});

router.delete('/deleteWork?',function(req,res,next){
    Work.deleteWork(req.query.id,function(err,count){
        if(err){
            res.json(err);
            console.log("notdelete")
        } else{
          res.json(count);
          
          console.log("delete")
        }
    });
});

// router.get('/:id?',function(req,res,next){
//     if(req.params.id){
//         SinhVien.getSinhVienById(req.params.id,function(err,rows){
//             if(err){
//                 res.json(err);
//             }
//             else{
//                 res.json(rows);
//             }
//         });
//     }else{
//         SinhVien.getAllSinhVien(function(err,rows){
//             if(err){
//                 res.json(err);
//             } else {
//                 res.json(rows);
//             }

//         });
//     }
// });

// router.post('/',function(req,res,next){
//     SinhVien.addSV(req.body,function(err,count){
//         if(err){
//             res.json(err);
//         } else{
//             res.json(req.body);
//         }
//     });
// });

// router.delete('/:id',function(req,res,next){
//     SinhVien.deleteSV(req.params.id,function(err,count){
//         if(err){
//             res.json(err);
//         } else{
//           res.json(count);
//         }
//     });
// });

// router.put('/:id',function(req,res,next){
//     SinhVien.updateSV(req.params.id,req.body,function(err,rows){
//         if(err){
//             res.json(err);
//         } else{
//             res.json(rows);
//         }
//     });
// });
module.exports=router;