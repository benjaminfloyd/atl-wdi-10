var express = require('express');
var router = express.Router();
var methodOverride = require('method-override') 
var Netflix = require('../../models/netflix.js');

//your routes here

//GET
router.get('/', function(request, response){
    Netflix.find(function(error, netflix){
    if(error) response.json({message: 'Could not find movie'});

    response.json({netflix: netflix});
    });
});

// Post
router.post('/', function(request, response){
    console.log('in POST');
    console.log('body:', request.body)

    var netflix = new Netflix(request.body);

    quote.save(function(error){
        if(error) response.json({ message: 'Moive not saved' + error});

        response.json({netflix: netflix});
    });
});

// Get by ID
router.get('/:id', function(request, response){
    var id = request.params.id;

    Netflix.findById({_id: id}, function(error, netflix) {
    if(error) response.json({message: 'Could not find movie b/c:' + error});

        response.json({netflix: netflix});
  }).
  select('-__v');
});
    
router.patch('/:id', function(request, response) {
  var id = request.params.id;

  Netflix.findById({_id: id}, function(error, netflix) {
    if(error) response.json({message: 'Could not find qnetflix b/c:' + error});

    if(request.body.name) quote.name = request.body.name;
    if(request.body.location) quote.location = request.body.location;
    if(request.body.status) quote.status = request.body.status;

    netflix.save(function(error) {
      if(error) response.json({messsage: 'Could not update quote b/c:' + error});

      response.json({message: 'quote successfully updated', netflix: netflix});
    });
  }).select('-__v');
});


router.delete('/:id', function(request, response) {
  var id = request.params.id;

  Netflix.remove({_id: id}, function(error) {
    if(error) response.json({message: 'Could not delete movie b/c:' + error});

    response.json({message: 'Movie successfully deleted'});
  }).select('-__v');
});

module.exports = router;