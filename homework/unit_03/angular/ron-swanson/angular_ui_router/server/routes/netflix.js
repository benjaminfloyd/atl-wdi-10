var express = require('express');
var router = express.Router();
var Netflix = require('../../models/netflix.js');

//your routes here

//GET
router.get('/', function(request, response){
    Netflix.find(function(error, netflix){
    if(error) response.json({message: 'Could not find movie'});

    response.json({netflix: netflix});
})
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

module.exports = router;
