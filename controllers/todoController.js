var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//connect to database
mongoose.connect('mongodb://test:test12@ds131903.mlab.com:31903/todo', { useNewUrlParser: true });

// Create a Schema - This is like blueprint to dB
var todoSchema = new mongoose.Schema({
    item: String
});

var Todo = mongoose.model('Todo', todoSchema);
// var itemOne = Todo({item:"kick some coding ass"}).save(function(err){
//     if(err){
//         throw err;
//     }
//     console.log('items saved');

// });
var _data = [{
    item:"kick some coding ass"
}];
var urlencodedParser = bodyParser.urlencoded({extended:false});

module.exports = function(app){

    app.get('/todo',function(req, res){
        //get data from Database and send to view
        Todo.find({}, function (err, _data) {
            if(err) throw err;
            res.render('todo',{_todos:_data})
        });
    });

    app.post('/todo',urlencodedParser ,function(req, res){
        //get data from view and add into mongooDB
        var newTodo = Todo(req.body).save(function(err,_data){
            if(err) throw err;
            console.log(_data);
            res.json(_data);
        });
    });

    app.delete('/todo/:item',function(req, res){
        //get item from view and delete from mongooDB
        Todo.deleteOne({item:req.params.item.replace(/\-/g, " ")}, function(err, _data){
            if(err) throw err;
            res.json(_data);
        });
    });
}