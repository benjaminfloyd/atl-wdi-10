// app.js

//require express package
var express = require('express');
//save an express module as 'app'
var app     = express();
// assigning 3000 as our port
var port    = 3000;
// tells the server to listen for requests on port 3000

var hbs = require('hbs');

app.set("view engine", "hbs");
app.set('views', './views');

// respond with "Welcome to Pizza Express!" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('Welcome to Pizza Express!')
})

app.get('/topping', function(req, res) {

    res.render('topping', {
        data: req.query.type

    });
});

app.get('/order', function(req, res) {

     res.render('order',{
        data1: req.
        query.amount,
        data2: req.query.size
     });
     

});

app.listen(port, function(){
  console.log("==========================")
  console.log('LISTENING ON PORT ' + port);
  console.log("==========================")
});