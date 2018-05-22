var express = require("express");
var mysql = require("mysql");
var app = express();
app.use(express.static('public'));


var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database:'citydb'
});
connection.connect();


app.get('/getlistcities',function(req,res){  
    var query = "select idCity,name,touristNumber,imageurl as listImage from city natural join cityimage where imagetype='list' ";
    connection.query(query,function(error,results){
    if (error) throw error;
    res.send(JSON.stringify(results));

})
});

app.get('/getcitydetail/:id',function(req,res){  
    var query = "select name,touristNumber,imageurl as detailImage,description,"+
    "GROUP_CONCAT(placename) as places from city natural join cityimage natural join place"+ 
    " where imagetype='detail' and idCity=?" + 
    " group by name,touristNumber, detailImage,description";
    connection.query(query,[req.params.id],function(error,results){
    if (error) throw error;
    res.send(JSON.stringify(results[0]));

})
});



var server = app.listen(8082,function(){
    var host = server.address().address
    var port = server.address().port
});


