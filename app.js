//jshint esversion:6
const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

const request = require("request");

app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req,res){
  var crypto = req.body.crypto;
  var fiat = req.body.fiat;

  var baseURL = "https://apiv2.bitcoinaverage.com/indices/global/ticker/";

  var finalURL = baseURL + crypto + fiat;

  request(finalURL,function(error,response,body){

    var data = JSON.parse(body);
    var price = data.last;
    var currentDate = data.display_timestamp;

    res.write("<p>The current date is " + currentDate + "</p>");

    res.write("<h1>" + amount + crypto + " is currently worth " + price + fiat + "</h1>");

    res.send();
  })
});

app.listen(3000,function(){
  console.log("Server started on post 3000");
});
