var express=require('express');
var app=express();

var routes=require('./routes/route.js');

app.get('/',routes.data);

var port = process.env.PORT || 3000;

var server=app.listen(port,function(req,res){
    console.log("Catch the action at http://localhost:"+port);
});