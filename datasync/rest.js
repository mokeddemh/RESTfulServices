var express = require("express");
var mysql = require("mysql");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.post('/addteams',function(req,res){  
    var teams = req.body;
    var values = [];
    for(i in teams) {    
    values.push([teams[i].teamId,teams[i].teamName,teams[i].continent]);
    }
    var query = "INSERT INTO team VALUES ?";
    connection.query(query,[values],function(error,results){
     if(error) {      
    res.send(JSON.stringify("Error"));

    }
    else {
     res.send(JSON.stringify("Success"));
         }
     })  

 
  
});

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database:'Teams'
});
connection.connect();


var server = app.listen(8082,function(){
    var host = server.address().address
    var port = server.address().port
});


