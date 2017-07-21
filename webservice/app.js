process.stdout.write('\033c');

var app = require('./app_config.js');
var db = require('./db_config')

app.get('/', function(req, res){
	res.end('Hello!!');
});

app.get('/tasks', function(req,res){

  db.task.find({},function(error, tasks){
      if(error){
        res.send({err:error})
      }
      else{
        res.send({'tasks':tasks})
      }
  })

})

app.post('/tasks', function(req,res){

  db.task({
    text : req.body.text,
    done : req.body.done
    }).save(function(error,task){
      if(error){
        res.send({err:error})
      }
      else{
        res.send(task)
      }
    })

})

app.put('/tasks',function(req,res){
  var id = req.body.id
  db.task.update({'_id':id},{done:true},function(error,task){
    if(error){
      res.send({err:error})
    }
    else{
      res.send({})
    }
  })

})

app.delete('/tasks',function(req,res){
  var id = req.query.id
	console.log(req.body,req.params,req.query);
	console.log("Deleting "+id)
  db.task.remove({"_id":id},function(error){
    if(error){
      res.send({err:error})
    }
    else{
      res.send({})
    }
  })
})
