// /* packages */
var path        = require('path');
var express     = require('express');
var hbs         = require('hbs');
// /* app settings*/
var app         = express();
var port        = process.env.PORT || 3000;

/* set up the application params*/
var netflixcontroller = require('./controllers/netflix_controllers/netflix_controller.js');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// Netflix Views
app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(methodOverride('_method'));
// app.use('/?', Controller);
app.get('/', function(req,res) {
  res.send('This is our Home Page');
  res.render('welcome');
});

// Start server
app.listen(port, function() {
  console.info('Server Up -- Ready to serve hot movies on port', port,"//", new Date());
});