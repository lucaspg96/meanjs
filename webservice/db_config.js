var db_string = 'mongodb://localhost/todo';

var mongoose = require('mongoose')

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro ao conectar'));

mongoose.connect(db_string,{useMongoClient:true})

var taskSchema = mongoose.Schema({
  text:String,
  done:Boolean
});

exports.task = mongoose.model('Task', taskSchema);
