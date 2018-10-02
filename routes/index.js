var express = require('express');
var router = express.Router();
var rety = require('./../model/tasks')();

/* GET home page. */
router.get('/', function(req, res, next) {
  //var body = {title : req.body.title, description:req.body.description, status: false}
  //console.log(req.body);
  rety.find(null, function(err,tasks){
    if(err){
      throw err;
    }
    res.render('index',{title:'Express',tasks: tasks});  
  });
   
});

router.post('/add', function(req, res, next) {
  var body = {title : req.body.title, description:req.body.description, status: false}
  //console.log(req.body);
  rety.create(body, function(err,tasks){
    if(err){
      throw err;
    }
    res.redirect('/');  
  });
  
});

router.get('/turn/:id', function(req, res, next) {
  var id = req.params.id;
  //console.log(req.body);
  rety.findById(id, function(err,task){
    if(err){
      throw err;
    }
    task.status = !task.status;
    task.save(function(){
      res.redirect('/');  
    });
    
  });
  
});

router.get('/remove/:id', function(req, res, next) {
  var id = req.params.id;
  //console.log(req.body);
  rety.deleteOne({_id:id}, function(err,task){
    if(err){
      throw err;
    }
    res.redirect('/');
  });
  
});

router.get('/tasks', function(req, res, next) {
  //var body = {title : req.body.title, description:req.body.description, status: false}
  //console.log(req.body);
  rety.find(null, function(err,tasks){
    if(err){
      throw err;
    }
    //res.render('index',{title:'Express',tasks: tasks});
    res.json(tasks);  
  });
   
});

module.exports = router;
