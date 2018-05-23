var express = require("express");
var mysql = require("mysql");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/addteams',function(req,res){  
    var teams = JSON.parse(JSON.stringify(req.body));
    var values = [];
    for(i in teams) {    
    values.push([teams[i].teamId,teams[i].teamName,teams[i].continent]);
    }
    var query = "INSERT IGNORE INTO team VALUES ?";
    connection.query(query,[values],function(error,results){
    
     if(error) {
     res.send('Error');
    }
    else {
     res.send('Success');
         }
     })  

 
  
});

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database:'teamsdb'
});
connection.connect();


var server = app.listen(8082,function(){
    var host = server.address().address
    var port = server.address().port
});


