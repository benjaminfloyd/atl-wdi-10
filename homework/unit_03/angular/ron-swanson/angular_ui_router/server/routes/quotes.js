var express = require('express');
var router = express.Router();
var methodOverride = require('method-override') 
var Quote = require('../../models/quote.js');




// GET
router.get('/', function(request, response) {
  Quote.find(function(error, quotes) {
    if(error) response.json({message: 'Could not find any quote'});

    response.json({quotes: quotes});
  });
});

// // GET
// router.get('/', function(request, response) {
//   Quote.find({}).exec(function(error, quotes) {
//     if(error) { console.log(error); }
//     console.log(quotes)
//     response.json({quotes: quotes});
//     //could be response.json({ quotes })
//   })
// });

// POST
router.post('/', function(request, response) {
  console.log('in POST');
  console.log('body:',request.body);

  var quote = new Quote(request.body);

  quote.save(function(error) {
    if(error) response.json({messsage: 'Could not save quote b/c:' + error});

    response.json({quote: quote});
  });
});

// GET
router.get('/:id', function(request, response) {
  var id = request.params.id;

  Quote.findById({_id: id}, function(error, quote) {
    if(error) response.json({message: 'Could not find quote b/c:' + error});

    response.json({quote: quote});
  }).select('-__v');
});

router.patch('/:id', function(request, response) {
  var id = request.params.id;

  Quote.findById({_id: id}, function(error, quote) {
    if(error) response.json({message: 'Could not find quote b/c:' + error});

    if(request.body.name) quote.name = request.body.name;
    if(request.body.location) quote.location = request.body.location;
    if(request.body.status) quote.status = request.body.status;

    quote.save(function(error) {
      if(error) response.json({messsage: 'Could not update quote b/c:' + error});

      response.json({message: 'quote successfully updated', quote: quote});
    });
  }).select('-__v');
});


router.delete('/:id', function(request, response) {
  var id = request.params.id;

  Quote.remove({_id: id}, function(error) {
    if(error) response.json({message: 'Could not delete quote b/c:' + error});

    response.json({message: 'Quote successfully deleted'});
  }).select('-__v');
});

module.exports = router;
