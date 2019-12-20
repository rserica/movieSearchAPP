
// call for express
var express = require("express");
var app = express();
var request = require("request");

// setting up the view
app.set("view engine", "ejs");

// ROUTES
app.get ("/", function(req, res){
    res.render("search");

});

app.get("/results", function(req,res){
  var query = req.query.search;
  var url = "http://www.omdbapi.com/?&apikey=2e07ff15&s=" + query
  request(url , function(error, response, body){
    if(!error && response.statusCode== 200)
      var data= JSON.parse(body);
      //res.send(results.Search);
      // renders the page results.ejs
      res.render("results", {data: data});
  });
});


// Server Listener @ LocalHost
app.listen(3000, function(){
    console.log("app.js on 3000 port");
});


// // Server listener @ amazon server
// app.listen(process.env.PORT, process.env.IP, function(){
//   console.log("Movie APP  has started @ "+ process.env.PORT );
// });
